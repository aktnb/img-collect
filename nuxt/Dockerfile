FROM node:latest

ENV TZ Asia/Tokyo

WORKDIR /nuxt

RUN apt-get -y update && npm i -g npm

COPY ./package*.json ./

RUN npm ci --include=dev
