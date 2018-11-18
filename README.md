# base-express

Skeleton api using expressjs.

Note:

```
This skeleton only for api development, and using es2015 features.
```

## Dependencies

NodeJS: `8.11.1`

ExpressJS: `4.16.3`

Coding standard: `standardjs`

REST standard: `jsonapi`

Database: `MongoDB`

ODM: `Mongoose`

Test: `Jest`

Default middlewares:

- body-parser
- helmet
- morgan

## Scripts

- `yarn run build` : Build using babel
- `yarn run api` : Build and run api
- `yarn run standard` : Run standardjs checker
- `yarn run summary` : Run standardjs checker with standard-summary
- `yarn run test` : Run jest
- `yarn run compose`: Run docker-compose engine

## Docker

build:

```
docker build -t <your_image_name> .
```

running a container:

```
docker run --name base-express-api -e MONGO_URI=<mongo_uri> -p 3000:3000 -d <your_image_name>
```

running docker-compose:

```
yarn compose
```

## Configurations

I'm using `dotenv` rules, all available configurations placed at `env.sample`.
You need to copy this file to `.env` and change all values.

```
NOTE:
-----

This file (`.env`) will used as configuration for `docker-compose.yml` too.
```

## PM2

I'm using `pm2-runtime` only for container based, please check `Dockerfile`.  When
running this engine without docker (`yarn run api`), i'm just using `node app.js`.

## Mongo

Change `MONGO_URI` value in your `.env` file and setup based on your actual mongo instance.
For more information: [Mongoose Connection](http://mongoosejs.com/docs/connections.html)
