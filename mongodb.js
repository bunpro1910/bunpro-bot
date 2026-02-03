const { MongoClient } = require('mongodb');
const colors = require('./UI/colors/colors');
const config = require("./config.js");
require('dotenv').config();

let client;
let connected = false;
let db = null;
let playlistCollection = null;
let autoplayCollection = null;
let languageCollection = null;

if (config.mongodbUri) {
    const uri = config.mongodbUri;
    client = new MongoClient(uri);
} else {
    try {
        const { getLangSync } = require('./utils/languageLoader.js');
        const lang = getLangSync();
        console.warn("\x1b[33m[ WARNING ]\x1b[0m " + (lang.console?.mongodb?.uriNotDefined || "MongoDB URI is not defined in the configuration."));
    } catch (e) {
        console.warn("\x1b[33m[ WARNING ]\x1b[0m MongoDB URI is not defined in the configuration.");
    }
}

function createSafeCollection(getCollection) {
    const emptyCursor = { toArray: async () => [] };
    return {
        find: (...args) => {
            const col = getCollection();
            if (!col) return emptyCursor;
            return col.find(...args);
        },
        findOne: async (...args) => {
            const col = getCollection();
            if (!col) return null;
            return col.findOne(...args);
        },
        updateOne: async (...args) => {
            const col = getCollection();
            if (!col) {
                return { acknowledged: false, matchedCount: 0, modifiedCount: 0, upsertedId: null, upsertedCount: 0 };
            }
            return col.updateOne(...args);
        },
        insertOne: async (...args) => {
            const col = getCollection();
            if (!col) return { acknowledged: false, insertedId: null };
            return col.insertOne(...args);
        },
        deleteOne: async (...args) => {
            const col = getCollection();
            if (!col) return { acknowledged: false, deletedCount: 0 };
            return col.deleteOne(...args);
        },
    };
}

function initializeCollections() {
    if (!client) return;
    db = client.db("PrimeMusicSSRR");
    playlistCollection = db.collection("SongPlayLists");
    autoplayCollection = db.collection("AutoplaySettings");
    languageCollection = db.collection("GuildLanguages");
}

async function connectToDatabase() {
    try {
        const { getLangSync } = require('./utils/languageLoader.js');
        const lang = getLangSync();
        if (!client) {
            console.warn("\x1b[33m[ WARNING ]\x1b[0m " + (lang.console?.mongodb?.skippingConnection || "Skipping MongoDB connection as URI is not provided."));
            return;
        }

        try {
            await client.connect();
            connected = true;
            initializeCollections();
            console.log('\n' + 'â”€'.repeat(40));
            console.log(`${colors.magenta}${colors.bright}${lang.console?.bot?.databaseConnection || 'ðŸ•¸ï¸  DATABASE CONNECTION'}${colors.reset}`);
            console.log('â”€'.repeat(40));
            console.log('\x1b[36m[ DATABASE ]\x1b[0m', '\x1b[32m' + (lang.console?.mongodb?.connected || 'Connected to MongoDB âœ…') + '\x1b[0m');
        } catch (err) {
            connected = false;
            db = null;
            playlistCollection = null;
            autoplayCollection = null;
            languageCollection = null;
            console.warn("\x1b[33m[ WARNING ]\x1b[0m " + (lang.console?.mongodb?.connectionFailed || "Could not connect to MongoDB. Continuing without database functionality."));
            console.error(err.message);
        }
    } catch (e) {
        if (!client) {
            console.warn("\x1b[33m[ WARNING ]\x1b[0m Skipping MongoDB connection as URI is not provided.");
            return;
        }
        try {
            await client.connect();
            connected = true;
            initializeCollections();
            console.log('\n' + 'â”€'.repeat(40));
            console.log(`${colors.magenta}${colors.bright}ðŸ•¸ï¸  DATABASE CONNECTION${colors.reset}`);
            console.log('â”€'.repeat(40));
            console.log('\x1b[36m[ DATABASE ]\x1b[0m', '\x1b[32mConnected to MongoDB âœ…\x1b[0m');
        } catch (err) {
            connected = false;
            db = null;
            playlistCollection = null;
            autoplayCollection = null;
            languageCollection = null;
            console.warn("\x1b[33m[ WARNING ]\x1b[0m Could not connect to MongoDB. Continuing without database functionality.");
            console.error(err.message);
        }
    }
}

const safePlaylistCollection = createSafeCollection(() => (connected ? playlistCollection : null));
const safeAutoplayCollection = createSafeCollection(() => (connected ? autoplayCollection : null));

function getLanguageCollection() {
    return connected ? languageCollection : null;
}

module.exports = {
    connectToDatabase,
    playlistCollection: safePlaylistCollection,
    autoplayCollection: safeAutoplayCollection,
    getLanguageCollection,
};
