// Convert the string "123" to a number and add 7
function convertToNumber(x="123"){
    x=Number(x);
    x+=7;
    console.log("converted number:", x);
}
convertToNumber();

// 2. Check if the given variable is falsy and return "Invalid" if it is.
function falsyValue(x=0){
    if(x == false){
      return("invalid input");
    }
}
console.log("invalid input:", falsyValue());


// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue 
for(let i=1;i<=10;i++){
    if(i%2==0){
        continue;
    }
    console.log("odd numbers:", i);
}

// 4. Create an array of numbers and return only the even numbers using filter method. 
const array1=[1,2,3,4,5];
console.log("even numbers:", array1.filter(x=>x%2==0));  

// 5. Use the spread operator to merge two arrays, then return the merged array.
const array2=[1, 2, 3];
const array3= [4, 5, 6];
const array4=[...array2, ...array3];
console.log("merged array:", array4);
 

// Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). 
switch(2){
    case 1:
    console.log("sunday");
    break;
    case 2:
    console.log("monday");
    break;
    case 3:
    console.log("tuesday");
    break;
    case 4:
    console.log("wednesday");
    break;
    case 5:
    console.log("thursday");
    break;
    case 6:
    console.log("friday");
    break;
    case 7:
    console.log("saturday");
    break;
    default:
}

// Create an array of strings and return their lengths using map method 
array5= ["a", "ab", "abc"];
console.log("sorted array:", array5.map(x=>x.length));


// 8. Write a function that checks if a number is divisible by 3 and 5.
function divideBy(x=15){
    if(x%3==0 && x%5==0){
        return("Divisible by both");
    }
}
console.log("Divisible by both:", divideBy());


// 9. Write a function using arrow syntax to return the square of a number
const squareNumber=(x)=>{
    console.log("square of the number:", x*x);
}
squareNumber(5);

// 10. Write a function that destructures an object to extract values and returns a formatted string.
function destructureObject(){
    const person = {name: 'John', age: 25}
    console.log( person.name +" is "+  person.age + " years old");
}
destructureObject();

// 11. Write a function that accepts multiple parameters (two or more) and returns their sum. 
function sum(x,y,z,m,n){
    return(x+y+z+m+n);
}
console.log("sum of the numbers:", sum(1, 2, 3, 4, 5));

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
const printMessage=(message)=>{
    setTimeout(()=>{
        console.log("message:", message);
    }, 3000);
}
printMessage("Success");

// 13. Write a function to find the largest number in an array.
function findTheLargestNumber(){
    const array=[1, 3, 7, 2, 4];
    return(Math.max(...array));
}
console.log("largest number:", findTheLargestNumber());

// 14. Write a function that takes an object and returns an array containing only its keys. 
function getKeys(obj={name:"John", age: 30}){
    return Object.keys(obj);
}
console.log("keys:", getKeys());

// 15. Write a function that splits a string into an array of words based on spaces.
function splitString(str="The quick brown fox"){
    return str.split(" ");
}
console.log("split string:", splitString());


// 1. What is the difference between forEach and for...of? When would you use each?
// forEach()
//can't use break or continue in forEach()
//use callback function
//use when you want to do a normal loop without any conditions

// for(const element of array){
//     console.log(element);
// }
//use a normal loop
//you can use continue and break in for loop
//use when you want to do a loop with conditions (such as skipping elements or stopping the loop)

//2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. 
// Hoisting is a javascript make function declarations & variables are processed before the code execution and it is moved to the top of the scope.
//  console.log(x)
//  let x = 10;

 // the hoisting will get let x on the top of the scope but it will not be initialized.

 //Temporal Dead Zone(TDZ) is a javascript feature that prevents variables from being accessed before they are declared.
//  console.log(y)
//  const y = 10;

 // the TDZ will prevent the variable y from being accessed before it is declared.

//  3. What are the main differences between == and ===?
// == is compare value only
// === is compare value and type
// Example:
console.log(1 == "1") // true
console.log(1 === "1") // false

// Explain how try-catch works and why it is important in async operations. (0.5 Grade)
try{
    console.log("Hello")
}catch(error){
    console.log(error)
}
// if not add catch this will make the all program crashed and the program will stop.
//try use for you need to do something and if it failed it will catch the error and continue the program.


// 5. What’s the difference between type conversion and coercion? Provide examples of each.

// The conversion means u need to change the key from data type to another data type.
// Example:
 let k="123";
 let result=Number(k);
 console.log("result:", result)

//  coercion means the javascript will automatically change the data type to another data type.

let number2="123";
let number3=5
console.log(number2+number3)
//javascript automatically convert number3 to string to join it with number2.

