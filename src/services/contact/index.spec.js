const td= require('testdouble');
const assert= require('assert');

describe('/src/services/contact',()=>{
    let stubs;
    let testee;
    beforeEach(()=>{
        // const contactModel= td.replace('../../db/schema/contact.entity')
        // contactModel.prototype.save=td.function();
        stubs={
            contactRequest:td.replace('./index','CONTACTREQUEST')
        }
    })
    afterEach(td.reset)
    it('it exports contact service',()=>{
        testee=require('./index')
        assert.deepStrictEqual(testee,stubs.contactRequest)
    })
})