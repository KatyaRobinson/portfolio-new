
var smtpTransport = nodemailer.createTransport("SMTP",{
  host: 'server179.web-hosting.com',
    port: 465,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: 'hello@katyagurina.com',
        pass: 'Amira1Luna2$$'
    }
});




smtpTransport.sendMail({  //email options
   from: "Sender Name <email@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
   to: "Receiver Name <receiver@email.com>", // receiver
   subject: "Emailing with nodemailer", // subject
   text: "Email Example with nodemailer" // body
}, function(error, response){  //callback
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
   
   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
});
