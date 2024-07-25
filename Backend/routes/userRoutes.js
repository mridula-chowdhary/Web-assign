const express = require('express');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const bodyparser= require('body-parser')
const app= express();

//Registration route
const userSchema = new mongoose.Schema({
    email:{type:String, require:true},
    password:{type:String, require:true}
})

const User = mongoose.model('User',userSchema);
mongoose.connect('mongodb://localhost:27017/temp');
app.post('/register',(req,res)=>{
    // const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
  if(!email|| password ){
    res.status(400).send('Username and password are required')
  }
 const newUser = new User({ email,password});
  newUser.save();
})

app.listen(5000);