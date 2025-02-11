// foreach :- some function definition or name 
// use it as :- arr.forEach

let obj = [{
    Name : 'Aditya',
    College : "GLA University",
    Branch : 'CSE',
    Rollno : 2215000127  
},
{
    Name : 'Bhakti',
    College : "GLA University",
    Branch : 'CSE',
    Rollno : 2215000471
},
{
    Name : 'Vansh',
    College : "GLA University",
    Branch : 'CSE',
    Rollno : 2215001348
}]


obj.forEach((element )=> {
    console.log(element.Name);
});


// let arr = [1,2,3,4,5];

// arr.forEach((el)=>{
//     console.log(el);
// });

// arr.forEach (function(el){
//     console.log(el);
// });




// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);
