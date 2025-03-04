FROM node:18-slim

RUN apt-get update && apt-get install -y curl

ENV NODE_ENV development

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf node_modules && npm i

COPY . .

CMD [ "npm", "start" ]

EXPOSE 3004
