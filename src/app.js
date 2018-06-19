import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'

import ping from './apps/ping'

// initiate express main app
const app = express()

// setup bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// setup morgan
app.use(morgan('common'))

// setup helmet
app.use(helmet())

// install apps
app.use('/ping', ping)

// run express engine
app.listen(process.env.PORT, process.env.HOST, () => {
  console.log('=========================')
  console.log(`Port: ${process.env.PORT}`)
  console.log(`Host: ${process.env.HOST}`)
  console.log('=========================')
})
