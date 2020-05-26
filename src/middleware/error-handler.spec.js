const chai = require('chai');
const {
    expect
} = chai;
const sinon=require('sinon');
const sinonChai=require('sinon-chai');
chai.use(sinonChai)
const mockResponse=()=>{
    const res={};
    res.status=sinon.stub().returns(res);
    res.json=sinon.stub().returns(res);
    return res;
}
describe('src/middleware/error-hamdler',()=>{
    let testee;
    let err;
    beforeEach(()=>{
        testee=require('./error-handler')
        err={
            statusCode:400,
            message:'error',
            stack:'in line6',
            status:'fail'
        }
    })
    describe('when development',()=>{
        beforeEach(()=>{
            process.env.NODE_ENV='development'
           
        })
        it('next should have been called',async()=>{
            const next=sinon.spy()
            const res=mockResponse()
            await testee(err,null,res,next)
            expect(next).to.have.been.calledWith();
        })
        it('devError should have been called',async()=>{
            const next=sinon.spy()
            const res=mockResponse()
            await testee(err,null,res,next)
            expect(res.status).to.have.been.calledWith(400)
            expect(res.json).to.have.been.calledWith({status:err.status,error:err,message:err.message,stack:err.stack})
        })
    })
    describe('when Production',()=>{
        beforeEach(()=>{
            process.env.NODE_ENV='production'
        })
        it('next should have been called',async()=>{
            const next=sinon.spy()
            const res=mockResponse()
            await testee(err,null,res,next)
            expect(next).to.have.been.calledWith();
        })
        it('devError should have been called',async()=>{
            const next=sinon.spy()
            const res=mockResponse()
            await testee(err,null,res,next)
            expect(res.status).to.have.been.calledWith(400)
            expect(res.json).to.have.been.calledWith({status:err.status,message:err.message})
        })
    })
})