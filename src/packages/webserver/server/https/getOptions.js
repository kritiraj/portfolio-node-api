const fs=require('fs');
const path=require('path');

const getCa=(config)=>{
    const END="-----END CERTIFICATE-----";
    const ca=fs.readFileSync(config.tls.ca).toString().split(END);
    return ca.map((ca)=>ca+ END).splice(0,ca.length-1);
}

const getOptions=(config)=>{
    console.log(__dirname)
    if(!config.tls || !config.tls.server || !config.tls.server.key || !config.tls.server.cert){
        throw new Error("HTTPS config not provided")
    }
    console.log(path.join(process.cwd(),config.tls.server.key));
    
    const options={
        key:fs.readFileSync(config.tls.server.key),
        cert:fs.readFileSync(config.tls.server.cert),
        ca:getCa(config)
    }
    if(config.tls.requestCert){
        options.requestCert=config.tls.requestCert
        if(config.tls.rejectUnauthorized){
            options.rejectUnauthorized=config.tls.rejectUnauthorized
        }
    }
    return options
}

module.exports=getOptions