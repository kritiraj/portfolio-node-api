const https= require('https');
const getOptions=require('./getOptions')
const httpsServer={
    start:({port,config,listener})=>{
        new Promise((resolve,reject)=>{
            const server=https.createServer(getOptions(config),listener);
            server.once('error',(err)=>reject(err))
            server.once('listening',()=>resolve(server))
            server.listen(port)
        })
    }
}
module.exports=httpsServer