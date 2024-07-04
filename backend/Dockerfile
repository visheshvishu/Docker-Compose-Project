FROM node:current-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env.sample .env
EXPOSE 5000
CMD ["npm", "start"]