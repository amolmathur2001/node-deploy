const express = require('express');
//const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const server = express();
const path = require('path');
const url = "mongodb+srv://amolmathur2001:xJX6M2NoGswbD5TE@cluster0.c8hby4o.mongodb.net/AmolDB?retryWrites=true&w=majority";

//connecting to the database 





main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(url,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    });
    console.log('DATABASE CONNECTED');
}
//first create a Schema 
const userSchema = new Schema({
    
    username : String,
    password : String
});

//Create a Model
//User is a Model which is acting like a collection name 
const User = mongoose.model('User',userSchema);
// User act as a Class, you can make a object from the class



//it is a middle ware to parse the body from json to object
//BdyParser = bodyParser.json();
server.use(express.json());
server.use(cors());

//CRUD (CREATE) POST 
server.post('/demo',async (req,res) =>{

    //creating an object from a User class / Model
    let user = new User(req.body);

    const doc = await user.save();
    res.json(doc);
    
})

//R(READ) GET
server.get('/demo',async(req,res) =>{
    const docs = await User.find({});

    res.json(docs);
})



server.listen(process.env.PORT,() =>{
    console.log('server started');
})
