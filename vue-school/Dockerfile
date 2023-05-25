FROM node:18-alpine

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend

WORKDIR /usr/src/app/frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "dev" ]