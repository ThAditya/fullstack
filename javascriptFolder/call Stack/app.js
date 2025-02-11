/////// Promises: the operation object represents the eventual completion(or failure) of an asynchronous operation and its resulting value;
////// two default callbacks in promises 1. resolve and 2. reject


// function saveToDb(data){
//     return new Promise((resolve, reject)=>{
//         let checkInternetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(checkInternetSpeed > 4){
//             resolve("Success: Data was saved");
//         }else{
//             reject("Failure: Weak connection");
//         }
//     });  
// }


// //// Promises chaining:using .then and .catch methods

// let request = saveToDb("apna college")
//     .then((result)=>{
//         console.log("data1 saved");
//         console.log("Result of promise: "+result);
//         return saveToDb("hello world");
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log("Result of promise: "+result);
//         return saveToDb("Aditya");
//     })
//     .then((result)=>{
//         console.log("Data3 saved");
//         console.log("Result of promise: "+result);
//     })
//     .catch((error)=>{
//         console.log("Promise was not saved");
//         console.log("Error : ", error);
//     });

////// Callback hell and setting up promises

// function saveDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) +1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveDB("Apna college", ()=>{

//     console.log("Data was Saved " );
    
//     saveDB("hello world", ()=>{
//         console.log("success2, data2 saved");
//         saveDB("Aditya", ()=>{
//             console.log("Success3: Data3 Saved");
//         },()=>{
//             console.log("Failure3: data3 failed");
//         })
//     },()=>{
//         console.log("failure2, data2 not saved");  
//     });

// },
// ()=>{
//     console.log("Weak connection, Data wasn't saved");
// })

// callback and callback hell

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay);
    });
}

changeColor("red", 2000)
    .then(()=>{
        console.log("red changed");
        return changeColor("orange", 2000);
    })
    .then(()=>{
        console.log("orange changed");
        return changeColor("Yellow", 2000);
    })
    .then(()=>{
        console.log("yellow changed");
        return changeColor("Blue", 2000);
    })
    .then(()=>{
        console.log("Blue changed");
    })




// // Callbacks nesting -> callback Hell
// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, () =>{
//         changeColor("green", 1000, ()=>{
//             changeColor("blue", 1000)
//         });
//     });
// });

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000   )

// setTimeout(()=>{
//     h1.style.color = "Blue";
// }, 3000)




// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// function hello(){
//     console.log("print hello");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo function");
// demo();
// console.log("done");