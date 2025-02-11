const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("You contact with root path")
})

app.get('/mango', (req,res)=>{
    res.send("YOu contact to Mango path");
})

app.get('/apple',(req,res)=>{
    res.send("YOu contact to apple path")
})


app.post('/', (req,res)=>{
    res.send("You sent a post request to root ")
})

app.get('/:username/:id', (req,res)=>{

    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}${id}</h1>`
    res.send(htmlStr);
})

app.get("/search", (req,res)=>{
    let {q} = req.query;
    res.send(`<h1>the query of requested to be: ${q}</h1>`);
})
app.get('*', (req,res)=>{
    res.send("the work is going on this path")
})
// app.use((req, res)=>{
//     console.log("request received");
//     let code = "<h1>Fruits<h1> <ul> <li> Apple </li> <li> Mango </li></ul>"
//     res.send(code);
// })

app.listen(2000,()=>{
    console.log('Server is available on port 2000')
})