const express=require('express');
const cors=require('cors');
const crudRouter=require('./CRUDOeration')
const mongoose=require('mongoose')
var app=express();
app.use(cors());
app.use('/crud',crudRouter);
const url='mongodb://localhost:27017/Retail/Users';
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB connection created successfully')
})

app.listen(9000,()=>{
    console.log(`server is running on port 9000`)
});
