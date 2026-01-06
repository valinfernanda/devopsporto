# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json & install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy semua kode ke container
COPY . .

# 5. Expose port
EXPOSE 3000

# 6. Start server
CMD ["node", "src/server.js"]
