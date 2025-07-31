# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY backend .     

# EXPOSE 5000
# CMD ["node", "index.js"]


# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# copy จาก root
COPY package*.json ./

RUN npm ci --omit=dev

COPY backend ./  

EXPOSE 5000
CMD ["node", "index.js"]
