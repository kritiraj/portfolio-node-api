const chai = require('chai');
const sinon=require('sinon');
const sinonChai=require('sinon-chai');
const {
    expect
} = chai;
chai.use(sinonChai)
describe("src/heper/catchAsync", () => {
    let testee
    beforeEach(() => {
        testee = require('./catchAsync')
    })

    it('shoud catch exception of function passed to it', async () => {
        const error = new Error('catch')
        const foo = testee(() => {
            throw error
        })
        expect(foo).to.throw(error)
    })
    it('should call next with error when functuon passes into it throws error',async()=>{
        const error=new Error('catch');
        const next=sinon.spy()
        const foo=testee(async(req,res,next)=>{
            throw error
        })
        await foo(null,null,next)
        expect(next).to.have.been.calledWith(error)
    })
    it('shoudl call next with error arguments in next',async()=>{
        const next=sinon.spy()
        const foo=testee(async(req,res,next)=>{
           next("test")
        })
        await foo(null,null,next)
        expect(next).to.have.been.calledWith('test')
    })
})