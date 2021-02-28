const express = require('express');
const router = express.Router();
var unirest = require("unirest");

var otp;


router.get('/',function(req,res){
    res.send('dlmdldkmkmm')
    //console.log(otp);
} )

router.post('/otp',function(Req,res){
    otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
console.log(otp);
console.log(typeof(Req.body.mobile))
   /*var req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");
    
    req.headers({
      "authorization": "Ewvy45UlsmRr9nihA387YteCPMKLq2OSIXQ1oFaJfjuBVN0dWHx9E5gykXIUDNl2zKQMFLj08fba1YCq"
    });

    var num=(Req.body.mobile).toString()
    console.log('jk'+num)
    req.form({
      "message": "Your otp for FIR filing is "+otp,
      "language": "english",
      "route": "q",
      "numbers": (Req.body.mobile).toString()
    });
    
    req.end(function (res) {
      if (res.error) throw new Error(res.error);
    
      console.log(res.body);
    });
    
    res.send("Sent msg")
    //Req=JSON.parse(Req.body)*/
    console.log("haere"+Req.body.mobile);
    console.log(otp);
    
    })

    router.post('/checkotp',function(req,res){
      console.log(otp);
      if(req.body.otp==otp)
      {
        console.log('op')
        res.json({otp:true})
      }
      else 
      {
        console.log('not')
        res.json({otp:false})
      }
    })
    

module.exports = router;