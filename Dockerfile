FROM keymetrics/pm2:latest-alpine

ENV APP_DIR /var/app
RUN mkdir -p /var/app
RUN mkdir -p /var/app/dist
WORKDIR ${APP_DIR}

# Bundle APP files
COPY package.json .
COPY yarn.lock .

# Install app dependencies
RUN yarn install

COPY src ./src/
COPY pm2.json .
COPY .babelrc .

RUN yarn build
EXPOSE 3000
CMD [ "pm2-runtime", "start", "pm2.json" ]
