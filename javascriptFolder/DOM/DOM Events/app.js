////////// use of Onclick and Onmouseenter

// let btns = document.querySelectorAll("button");

// for( btn of btns){
//     btn.onclick = sayHello ;
//     btn.onmouseenter = function () {
//         console.log("We are enter!");
//     };
// };

// function sayHello(){
//     alert("Hello!");
// };

////////// addeventlistener: we use it for call multiple elements

let btns = document.querySelectorAll("button");

for( btn of btns){
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", sayName);
};

function sayHello(){
    alert("Hello!");
};

function sayName(){
    alert("Aditya!");
};

function sayName(){
    alert("you dblclick Bhakti!");
};
