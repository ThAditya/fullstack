// Every : return true if every element of array gives true for some function. Else return false

// let num = [2,4,6,8];
let num = [2,4,6,8, 9];


let ans = num.every((el)=>{
    return el % 2 == 0;
});


// Some: Return true if some elements of array give true for some function, else return false.
  