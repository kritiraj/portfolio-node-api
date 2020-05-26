const nodemailer=require('nodemailer');
const EmailTemplate=require('email-templates')
const path=require('path')

const config=require('../../../config')

const createTransporter=()=>(nodemailer.createTransport({
        service: 'gmail',
        auth: {
            ...config.mailOptions.login
           }
       })
    );
    
const getMailOptions =(to,subject,html)=>({
    from: config.mailOptions.adminMail,
    to: to,
    subject: subject,
    html: html
  }); 
const loadTemplate=async(templateName,context)=>{
    const template=new EmailTemplate()
    const mail=await template.render(path.join(__dirname,'../../emailTemplate',templateName),{...context});    
    return mail;
}

const sendMail=async(mailOptions)=>{
    const transporter=createTransporter();
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
} 

const mail=async(data)=>{
    const clientHtmlMail=await loadTemplate('client',data);
    const clientMailOptions=getMailOptions(data.email,config.mailOptions.clientSubject,clientHtmlMail);
    const adminHtmlMail=await loadTemplate('admin',{...data,admin:config.mailOptions.adminName});
    const adminMailOptions=getMailOptions(config.mailOptions.adminMail,`${config.mailOptions.adminSubject} from ${data.name}`,adminHtmlMail);
    sendMail(clientMailOptions);
    sendMail(adminMailOptions)
}
module.exports=mail;