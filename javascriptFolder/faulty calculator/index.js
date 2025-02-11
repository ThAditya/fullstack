let ran = Math.random();
let a = prompt("Enter 1st num: ");
let opr = prompt("Enter the operation: ");
let b = prompt("Enter 2nd num: ");

let obj = {
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**' 
}

if(ran > 0.1){
    // using eval function which work as calculator in itself

    alert(`the result is ${eval(`${a} ${opr} ${b}`)}`);
}else{
    opr = obj[opr];
    alert(`the result is ${eval(`${a} ${opr} ${b}`)}`);
}