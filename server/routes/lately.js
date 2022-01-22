import express from 'express'
import controller from './../controllers/lately'

const router = express.Router()

router.get('/list', controller.list);

export default router

