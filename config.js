require("dotenv").config();

const parseBool = (value, defaultValue) => {
  if (value === undefined) return defaultValue;
  return ["1", "true", "yes", "on"].includes(String(value).toLowerCase());
};

const parseNumber = (value, defaultValue) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : defaultValue;
};

const parseList = (value) => {
  if (!value) return [];
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const parseNodes = () => {
  const rawNodes = process.env.LAVALINK_NODES;
  if (rawNodes) {
    try {
      const parsed = JSON.parse(rawNodes);
      if (Array.isArray(parsed)) return parsed;
    } catch (_) {}
  }

  const host = process.env.LAVALINK_HOST;
  const password = process.env.LAVALINK_PASSWORD;
  if (!host && !password) return [];

  return [
    {
      name: process.env.LAVALINK_NAME || "node-0",
      password: password || "",
      host: host || "localhost",
      port: parseNumber(process.env.LAVALINK_PORT, 2333),
      secure: parseBool(process.env.LAVALINK_SECURE, false),
    },
  ];
};

module.exports = {
  TOKEN: process.env.TOKEN || "",
  language: process.env.LANGUAGE || "vi",
  ownerID: parseList(process.env.OWNER_ID),
  mongodbUri: process.env.MONGODB_URI || "",
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID || "",
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
  setupFilePath: process.env.SETUP_FILE_PATH || "./commands/setup.json",
  commandsDir: process.env.COMMANDS_DIR || "./commands",
  embedColor: process.env.EMBED_COLOR || "#1db954",
  activityName: process.env.ACTIVITY_NAME || "nghe nhac",
  activityType: process.env.ACTIVITY_TYPE || "LISTENING", // LISTENING, PLAYING
  SupportServer: process.env.SUPPORT_SERVER || "https://discord.gg/5TCHMQNG",
  embedTimeout: parseNumber(process.env.EMBED_TIMEOUT, 5),
  showProgressBar: parseBool(process.env.SHOW_PROGRESS_BAR, true),
  showVisualizer: parseBool(process.env.SHOW_VISUALIZER, true),
  generateSongCard: parseBool(process.env.GENERATE_SONG_CARD, true),
  lowMemoryMode: parseBool(process.env.LOW_MEMORY_MODE, false),
  errorLog: process.env.ERROR_LOG || "",
  nodes: parseNodes(),
};
