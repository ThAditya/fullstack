const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send('Hello World!')
})
app.get('/about',(req, res)=>{
    res.send('This is about page')
})
app.get('/login',(req, res)=>{
    res.send('This is login page')
})
app.get('/signup/user1/page1',(req, res)=>{
    res.send('This is signup and user')
})
app.get('/signup/:username/:password',(req, res)=>{
    console.log(req.params);
    res.send('ok')
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
});