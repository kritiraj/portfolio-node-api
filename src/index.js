
const mongoConn = require('./db')();
const webserver=require('./packages/webserver')
const config=require('../config')
const app=require('./app')
process.on('uncaughtException',err=>{
    console.log(err.name,err.message)
    console.log("UNCAUGHT EXCEPTION");
    process.exit(1);
})
module.exports= webserver(config.server,app);