const express = require('express');
const { default: mongoose, mongo } = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/secV-dbs')
.then(() => console.log('Connected to MongoDB...'))
.catch(() => {console.log("Not Connected to MongoDB...")})


const userSchema = new mongoose.Schema({
    userName : String,
    password : String,
    age : Number,
    city : String
})

const User = mongoose.model('User', userSchema);

User.create(
    {
        userName : "Aditya",
        password : "werty",
        age : 20,
        city : "Mathura"
    },
    {
        userName : "Akash",
        password : "werrt",
        age : 21,
        city : "Mathur"
    },
    {
        userName : "Prakhar",
        password : "wertqwy",
        age : 24,
        city : "Mathuraaaa"
    }
)
.then((x)=>{console.log("Document created Successfully")})


app.listen(5000,()=>{
    console.log('server is running on port 5000');
})