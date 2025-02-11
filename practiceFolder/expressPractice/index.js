const express = require("express");
const app = express();

// Get req = it is used for retrieving data from the client
// Post req = it is used for submitting data to the server
// send for sending request
// render = its is used to run the ejs file 

//Serving Static File
app.use(express.static("public"));

app.set("view engine", "ejs");
 
app.use(express.urlencoded({extended:true}))

app.get('/login', (req, res) => {
    res.render("login");
});

app.get('/signup', (req,res)=>{
    res.render("signup");
})

app.post('/signup',(req,res)=>{
    console.log(req.body);
    app.send('ok');
})

let todos = ['game','coding','dance','music'];

app.get('/todos',(req,res)=>{
    res.render('todos',{todos});
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`App is listen at port 3000`);
});