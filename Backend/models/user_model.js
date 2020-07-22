const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const userSchema= new Schema({
    username:String,       
    useremail:String,
    usernumber:String,
    userpassword:String
})