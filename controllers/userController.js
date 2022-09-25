const nodemailer = require('nodemailer');

const userData = (req, res) => {


    res.render('user/index');
}


const storeData = (req, res) => {
   const transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port : 587,
    auth : {
        user : "apubarua.diu@gmail.com",
        pass : "cqhgapzexodsyett"
    }
   });

   transporter.sendMail({
    from : "apubarua.diu@gmail.com",
    to : req.body.email,
    subject : "Nodemailer",
    text : `HI! ${req.body.name}, you are welcome`
   })


   res.redirect('back')


}



module.exports = {
    userData,
    storeData


}