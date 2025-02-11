const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) =>{
    res.render("home.ejs");
})

app.get('/ig/:username', (req, res) =>{
    let {username} = req.params;
    const instaData = require('./data.json');
    const data = instaData[username];
    // console.log(data);
    
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
    // let {username} = req.params;
    // const followers = ["addd", "vvv", "bob", "rtyui", "sdfh","xcvbn"]
    // res.render("instagram.ejs", {username, followers});
})

app.get('/rolldice', (req,res)=>{
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num});
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})
// app.get('/', (req,res)=>{
//     res.send('Hello World!');
// })