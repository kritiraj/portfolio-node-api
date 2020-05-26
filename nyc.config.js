const process= require('process')

const ENVIRONMENT={
    base:{
        lines:100,
        statements:100,
        functions:100,
        branches:100,
        include:['src/**/*.js'],
        exclude:['src/**/*.spec.js'],
        all:true,
        'check-coverage':true,
        reporter:['lcov','text-summary'],
        cache:true
    }
}
const configForEnv=(environment)=>Object.assign({},ENVIRONMENT.base)

const config=configForEnv(process.env.NODE_ENV)

module.exports=config;