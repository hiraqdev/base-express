import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import httpStatus from 'http-status-codes'
import mongoose from 'mongoose'

import ping from './apps/ping'
import jsonapi from './apps/jsonapi'

import * as jsonapiHelper from './helpers/jsonapi'
import config from './config'

// initiate express main app
const app = express()

mongoose.connect(config.mongo.uri, config.mongo.options).then(() => {
  console.info(`Connected to mongo uri: ${config.mongo.uri}`)
  console.log('=========================')
}).catch(err => {
  console.error(err.message)
})

// setup bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// setup morgan
app.use(morgan('common'))

// setup helmet
app.use(helmet())

// install apps
app.use('/ping', ping)
app.use('/jsonapi', jsonapi)

// final error handling, all exception or error system should be throwed here
app.use((err, req, res, next) => {
  console.error(err.stack)
  const error = jsonapiHelper.error(httpStatus.INTERNAL_SERVER_ERROR, err.name, err.message, err.code)
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json(jsonapiHelper.errors(error))
})

// run express engine
app.listen(config.app.port, config.app.host, () => {
  console.log('=========================')
  console.log(`Port: ${config.app.port}`)
  console.log(`Host: ${config.app.host}`)
  console.log('=========================')
})
