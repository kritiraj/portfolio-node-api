const chai = require('chai');
const {
    expect
} = chai;
const td= require('testdouble');
describe('src/services/index',()=>{
    let stubs;
    let testee;
    beforeEach(()=>{
        stubs={
            contact:td.replace('./contact','CONTACT'),
            mail:td.replace('./mail','MAIL')
        };
        testee=require('./index');
    })
    afterEach(td.reset);

    it('exports contact',()=>{
        expect(testee.contactRequest).to.deep.equal(stubs.contact)
    })

    it('exports mail',()=>{
        expect(testee.mail).to.deep.equal(stubs.mail)
    })
})