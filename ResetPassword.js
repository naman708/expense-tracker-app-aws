const nodemailer = require('nodemailer');




exports.forgotpass=(req,res)=>{
   // const UID=req.params.id;
    const { Email } =  req.body;
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use the name of your email service provider
        auth: {
          user: 'helpgpumusic@gmail.com',
          pass: 'xndm plhk lghh nqtu',
        },
      });

      const mailOptions = {
        from: 'helpgpumusic@gmail.com',
        to: Email,
        subject: 'Reset password',
        text: 'here yoyr verification code',
        html: '<p>This is the HTML version of the email.</p>',
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
};