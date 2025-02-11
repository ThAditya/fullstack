// arrName.map :- taking array as a input and store it in new array 


let Students = [{
    name : "Aditya",
    Marks : 90
},{
    name : "Bhakti",
    Marks : 95
},{
    name : "Vansh",
    Marks : 94 
}]


let gpa = Students.map((el) =>{
    return el.Marks/ 10;
});


// let arr = [1,2,3,4];
// let double = arr.map((el)=>{
//     return el*2;
// })






    or


// filter = it store the value in new Array based on given condition and matching, is it true or not?

let num = [1,2,3,4,5,6,7,8,9,2,4,6,10,13,42];

let ans = num.filter((el) =>{
    return el % 2 == 0;
})