// // Async function to get the user's location

// async function greet(){
//     throw "weak connection";
//     return "hello";
// };

// greet()
//     .then((result)=>{
//         console.log("print hello");
//         console.log("result was: ",result);
//     })
//     .catch((err)=>{
//         console.log("print error: ", err);
//     })


// let demo = async () =>{
//     return 5;
// };


// Await keyword: pauses the execution of its surrounding async function until te promise is settled(resolved or rejected)

function getNum(){

    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        let num = Math.floor(Math.random() * 10) +1;  
        console.log(num);
        resolve();
      }, 2000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    getNum();
}


let h1 = document.querySelector("h1");

async function changeColor(color){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() *5)+1;
            if(num > 3){
                reject("Promise was rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, 1000);
    });
}

async function color() {
    try{
        await changeColor("red");
        await changeColor("orange");
        await changeColor("Blue");
        await changeColor("yellow");
    }catch(error){
        console.log("error caught");
        console.log(error);
    }

    let a = 5;
    console.log(a);
    console.log("the new num is: ", a+3);
}

