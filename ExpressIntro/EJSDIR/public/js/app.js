document.querySelectorAll("button");

for(btn of buttons){
    btn.addEventlistener("click",()=>{
      console.log("Button was Clicked");  
    })
}    