
const determineServerType=(config={})=>{
    return config.tls && config.tls.enabled ? 'https' : 'http'
}
const getPort=(config={})=>{
 const port =config.port || 3000;
 return port;
}
const start=async(config,listener)=>{
    const type=determineServerType(config);
    const port=getPort(config);
    const server= require(`./server/${type}`);
    try{
        const serverCreated=await server.start({port,config,listener});
        console.log(`Server of type ${type} started on PORT ${port}`)
        return serverCreated
    }
    catch(err){
        throw err;
    }
}
module.exports=start