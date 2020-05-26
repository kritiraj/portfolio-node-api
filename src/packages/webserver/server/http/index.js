const http= require('http');

const httpServer={
    start:({port,listener})=>{
        new Promise((resolve,reject)=>{
            const server=http.createServer(listener);
            server.once('error',(err)=>reject(err))
            server.once('listening',()=>resolve(server))
            server.listen(port)
        })
    }
}
module.exports=httpServer