import express from 'express'
import httpStatus from 'http-status-codes'

import * as jsonapi from '../../helpers/jsonapi'

const router = express.Router()

router.get('/example-data', (req, res) => {
  const payload = { message: 'example attribute' }
  res.status(httpStatus.OK).json(jsonapi.data('1', 'message', payload))
})

router.get('/example-errors', (req, res) => {
  const error1 = jsonapi.error(httpStatus.BAD_REQUEST, 'Bad Request 1', 'Example error 1')
  const error2 = jsonapi.error(httpStatus.BAD_REQUEST, 'Bad Request 2', 'Example error 2')
  res.status(httpStatus.BAD_REQUEST).json(jsonapi.errors(error1, error2))
})

export default router
