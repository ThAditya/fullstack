const express = require('express');
const app = express();

const Port = 3000;

app.get('/register', (req, res)=>{
    res.send('Standard GET request');
})

app.post('/register', (req, res)=>{
    res.send('Standard POST response');
})

app.listen(Port, ()=>{
    console.log(`Server is turning on port ${Port}`);
})