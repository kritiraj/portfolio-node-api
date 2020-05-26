const chai = require('chai');
const {
    expect
} = chai;

const ErrorWithData=require('./error-with-data')
describe('src/helper/error-with-data',()=>{
    it('should return message',()=>{
        const error=new ErrorWithData('error',300);
        const message=error.message
        const status=error.statusCode;
        expect(message).to.equals('error');
        expect(status).to.equals(300)
    })
    it('should return status',()=>{
        const error=new ErrorWithData('error',400);
        const status=error.statusCode;
        expect(status).to.equals(400);
    })
})