////// JSON: Accessing data from JSON
//// JSON.parse(data) method is used to parse a string data into a js object

let jsonData =
 '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.", "length":78}';

let validRes = JSON.parse(jsonData);
console.log(validRes);


//// JSON.stringify(json) Method is used to parse a js object data into JSON
let student = {
    "name" : "Aditya",
    "marks" : 90
}

// console.log(JSON.stringify(student));