// Sending headers with API requests

let url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        const config = {headers:{ Accept: "application/json"} };
        let res = await axios.get(url, config);
        console.log(res.data.joke);
    }catch(err){
        console.log("error", err);
    }
}

// Activity using Query Strings

let url2 = "http://universities.hipolabs.com/search?name=India";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    show(colleges);

})

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }

}

async function getColleges(country) {
    try{
        let clg = await axios.get(url2+country);
        // console.log(clg.data);
        return clg.data;
    }catch(err){
        console.log(err);
    }
}    