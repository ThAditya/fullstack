let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random"

let img = document.querySelector("#images");
btn.addEventListener("click",async ()=>{
    let image = await getImages();
    console.log(image);
    img.setAttribute("src", image);
})


async function getImages(){
    try{
        let res = await axios(url2);
        return res.data.message;
    }catch(err){
        console.log("error", err);
        return "No Image found";
    }
}

// let url = "https://catfact.ninja/fact";

// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();

//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// async function getFacts(){
//     try{
//         let res = await axios(url);

//         return res.data.fact;
//     }catch(err){
//         console.log("error", err);
//         return "No fact found";
//     }
// }




// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }catch(err){
//         console.log("error", err);
//     }
// }


// fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data1)=>{
//         console.log("data1: ", data1.fact);
//         return fetch(url);
//     })
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data2)=>{
//         console.log("data2: ",data2.fact);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })