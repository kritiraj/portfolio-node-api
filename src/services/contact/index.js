const contactModel=require('../../db/schema/contact.entity');

const contactRequest=async(details)=>{
    let contactDetails=new contactModel(details);
    await contactDetails.save();
}

module.exports=contactRequest;