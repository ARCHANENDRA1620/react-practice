const router=require('express').Router();
const nodemailer=require('nodemailer');
const { MongoClient } = require('mongodb');
const mongoConnection=require('mongodb').MongoClient;
const bcrypt = require("bcrypt");

let User=require('./models/user_model')

let mailTransport=nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'archi298',
            pass:'archi298'
        }
    }
);

let mailBody={
    from:'archi298@gmail.com',
    to:'archanendra.191994@gmail.com',
    subject:'Registration successful..!!!',
    body:'Congratulations, you are successfully registered'
}

router.route('/crud').get((req,res)=>{
    const username=req.body.username;
    const userpassword=req.body.userpassword;
    const usermail=req.body.usermail;
    const usernumber=req.body.usernumber;
    const newUser=new User({
        username,
        usermail,
        usernumber,
        userpassword
    })
    const salt = await bcrypt.genSalt(20);
    user.password = await bcrypt.hash(userpassword, salt);
    newUser.save().then(
        ()=>{
            mailTransport.sendMail(mailBody,function(error,info){
                if(error)
                {
                    console.log('error occured')
                }
                else{
                    console.log('email sent'+info.response)
                }
            })
        })
    .catch(err=>res.status(400).json('Error:'+err))
})



