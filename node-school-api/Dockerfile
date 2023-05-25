FROM node:18-alpine

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/backend

WORKDIR /usr/src/app/backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 9090

CMD ["node", "server.js"]