import session from 'express-session'
import MongoStore from 'connect-mongo'

export default session({
    resave: true,
    name: 'doudouyp',
    secret: 'doudouyp',
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://82.157.18.166:27017',
        ttl: 86400000
    }),
    cookie: {
        httpOnly: true,
        maxAge: 86400000
    }
})
