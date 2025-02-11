let url = "http://universities.hipolabs.com/search?name=India";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let state = document.querySelector("input").value;
    console.log(state);
    let colleges = await getColleges();
    show(colleges);
})

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colleges){
        console.log(col.name);
        let li = document.querySelector("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(state) {
    try{
        let clg = await axios.get(url+state);
        // console.log(clg.data);
        return clg.data;
    }catch(err){
        console.log(err);
    }
}








// let url2 = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async ()=>{
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let colleges = await getColleges(country);
//     show(colleges);

// })

// function show(colleges){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colleges){
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }

// }

// async function getColleges(country) {
//     try{
//         let clg = await axios.get(url2+country);
//         console.log(clg.data);
//         return clg.data;
//     }catch(err){
//         console.log(err);
//     }
// }    