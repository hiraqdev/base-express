import express from 'express'
import httpStatus from 'http-status-codes'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(httpStatus.OK).json({ message: 'pong' })
})

router.get('/example-exception', (req, res, next) => {
  try {
    const error =  new Error('test error')
    error.code = 400
    throw error
  } catch (err) {
    next(err)
  }
})

export default router
