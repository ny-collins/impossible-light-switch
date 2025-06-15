//function greet(name) {
//     console.log("Hello "+name+"! Welcome to JavaScript");
//};

//greet("Miriam");


//const greet = function(name) {
//    console.log("Hello "+name+"!");
//};

//greet("Daniel");

//const greet = (name) => {
//       console.log("Hello "+name+"!");
//};

//greet("Daniel");

//function add(a, b) {
//        console.log(a+b);
//};

//add(2, 5);

//const add = function(a, b) {
//        console.log(a+b);
//};

//add(2, 5);

//const add = (a, b) => {
//        console.log(a+b);
//};

//Write a function  add (a, b) that returns the sym of two numbers.

//function add(a, b) {
//        console.log(a+b);
//};

//testing 
//add(2, 4);

//function confirm(num) {
//        if (num%2===1) {
//                console.log("The number "+num+" is odd");
//        }else {
//               console.log("The number "+num+" is even");
 //       };
//};

//confirm(2);

const toCelcius = (tempInF) => {
        let tempInC;
        tempInC=(tempInF-32)*(5/9);
        console.log("The temperature in degrees Celcius is "+tempInC);
};
toCelcius(14);

const toFahrenheit = (tempInC) => {
        tempInF=(tempInC*(9/5)+32);
        console.log("The temperature in degrees Fahreinheit is "+tempInF);
};
toFahrenheit(-10);
