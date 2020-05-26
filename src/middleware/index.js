const compose = require('compose-middleware').compose
const morgan=require('morgan')
const cors=require('cors');
// morgan.token('time', (req, res) => new Date().toISOString());
const bodyParser = require('body-parser');


module.exports=compose([
    morgan(':remote-addr :method :url :status :res[content-length] :response-time ms'),
    bodyParser.json(),
    cors({methods:['POST']}),
])