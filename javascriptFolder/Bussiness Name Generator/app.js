let rand = Math.random();
let first, second, third;

// lets generate first word
if(rand < 0.33){
    first = "crazy";
}else if(rand < 0.66 && rand > 0.33){
    first = "Amazing";
}else{
    first = "fire";
}

// lets generate second word
rand = Math.random();
if(rand < 0.33){
    second = "Engine";
}else if(rand < 0.66 && rand > 0.33){
    second = "Food";
}else{
    second = "Garments";
}

// lets generate third word
rand = Math.random();
if(rand < 0.33){
    third = "Bros";
}else if(rand < 0.66 && rand > 0.33){
    third = "Limited";
}else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);