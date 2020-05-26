const express = require('express');

const middleware= require('./middleware')

const errorHandler=require('./middleware/error-handler');

let app = express();

app.use(middleware)

// Mount the APIs specific to version
app.use('/api/v1', require('./routes'));

app.use(errorHandler)

process.on('unhandledRejection',err=>{
    console.log(err.name,err.message)
    console.log("UNHANDLED REJECTION");
    process.exit(1);
})
module.exports = app;