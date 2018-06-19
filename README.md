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

Default middlewares:

- body-parser
- helmet
- morgan

## Scripts

- `yarn run build` : Build using babel
- `yarn run api` : Build and run api
- `yarn run standard` : Run standardjs checker
- `yarn run summary` : Run standardjs checker with standard-summary

## Configurations

I'm using `dotenv` rules, all available configurations placed at `env.sample`.
You need to copy this file to `.env` and change all values.

## Mongo

Change `MONGO_URI` value in your `.env` file and setup based on your actual mongo instance.
For more information: [Mongoose Connection](http://mongoosejs.com/docs/connections.html)
