import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import cors from 'cors'
import authRouter from './routes/auth'
import cookieParser from 'cookie-parser'
import session from './middlewares/session'
import permission from './middlewares/permission'

const port = 2022

mongoose.connect('mongodb://82.157.18.166:27017', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log('mongo connected successfully...')
});

db.on('error', () => {

})

db.on('close', () => {

})

const app = express()

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
    maxAge: '1728000'
}))
app.use(session)
app.use(cookieParser())
app.use('/', authRouter)
app.use('/api', permission, routes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
