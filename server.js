require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expresslayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3800
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo');

const mongoose = require('mongoose');
const { createConnection } = require('net')
// database connection
const url = 'mongodb://localhost/Fullstack';

mongoose.connect(
    `${url}`,
    { 
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(()=> {
        console.log('connected');
    })
    .catch((e) =>{
        console.log('not connected');
    });

// session store
// let mongoStore =  new MongoDbStore({
//           mongooseConnection: connection,
//           collection: 'sessions'
// })

    // session config
app.use(session({
 secret: process.env.COOKIE_SECRET,
 resave:false,
 store: MongoDbStore.create({
    mongoUrl: url
}),
 saveUninitialized: false,
 cookie: { maxAge: 1000 * 60 * 60 *24 }
}))


// middelware
app.use(flash())

    // assets
app.use(express.static('public'))


// set template engine

 app.use(expresslayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

require('./routes/web')(app)

app.listen(PORT, () => {
    console.log(`listen at ${PORT}`); 
})