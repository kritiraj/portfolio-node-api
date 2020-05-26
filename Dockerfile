FROM node:10-alpine

WORKDIR /opt/app

COPY package.json yarn.lock ./

RUN yarn install
COPY . /opt/app

CMD ["npm","start"]