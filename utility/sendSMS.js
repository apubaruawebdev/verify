const SID = "AC969e10ba18ef649a927fdae914ee3e2d";
const AUTH_TOKEN = "33b0b21044da492830a2f702c2c1c6e6";

const twilio = require('twilio')(SID, AUTH_TOKEN);


const verifySMS = (to, sms) => {
    console.log(to);
    twilio.messages.create({
        from : "+18647341069",
        to : to,
        body : "Hello"
    })
    .then((res) => console.log("MESSAGE SENT"))
    .catch((err) => console.log(err))
    
}







module.exports = {verifySMS};