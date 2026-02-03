FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

# Default to no Lavalink nodes unless provided at runtime.
ENV LAVALINK_NODES=[]

CMD ["node", "index.js"]
