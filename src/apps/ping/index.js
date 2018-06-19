import express from 'express'
import httpStatus from 'http-status-codes'

import { data } from '../../helpers/jsonapi'

const router = express.Router()

router.get('/', (req, res) => {
  const payload = { message: 'pong' }
  res.status(httpStatus.OK).json(data(1, 'message', payload))
})

export default router
