import express from 'express';
import LatelyRouter from './lately'

const router = express.Router();

// router.use('/login', AuthRouter);
router.use('/lately', LatelyRouter);

export default router;
