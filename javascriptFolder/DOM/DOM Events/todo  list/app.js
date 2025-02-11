let btn = document.querySelector("button");
let list = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){
    
    let item = document.createElement("li");
    item.innerText = input.value;
    list.appendChild(item);


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    // console.log(input.value);
    input.value = "";
});


list.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log(listItem);
        console.log("delete");
    }
    // console.log("Button clicked");
});



// let delBtns = document.querySelectorAll(".button ");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

////// Event delegation: to delete the item when the delete button is clicked and gonna used when new element is listed.
