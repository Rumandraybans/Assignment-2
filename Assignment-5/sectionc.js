//Divide by Zero Exception
let numerator = 55;
let denominator = 0;

try {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  
  let result = numerator / denominator;
  console.log("Result:", result);
} 
catch (error) {
  console.log("Error:", error.message);
} 
finally {
  console.log("Calculation finished.");
}
console.log("-------------------------")

//Invalid Age Exception
function checkAge(age) {
  try {
    if (age < 18) {
      throw "Not Eligible";
    } else {
      console.log("Eligible to Vote");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
checkAge(26);
checkAge(12);
console.log("-------------------------")

//Custom Exception
let username = "Hi"; // Length is 2
console.log("Username:", username);

try {
    if (username.length < 5) {

        throw new Error("Invalid Username: Chracters are less than 5");
    }
    
    console.log("Valid Username");
} catch (error) {

    console.log("Error:", error.message);
}
console.log("-------------------------")

//Calculator 
let number1=10;
let number2="abvj";
console.log("Input Number 1:", number1);
console.log("Input Number 2:", number2);
try{
    if(typeof number1 !== "number" || typeof number2 !== "number"){
        throw new Error("Invalid Input: Both inputs must be numbers");
    }
    if(number2 === 0){
        throw new Error("Division by zero is not allowed");
    }
    console.log("Subtraction:", number1 - number2);
    console.log("Division:", number1 / number2);
    console.log("Addition:", number1 + number2);
    console.log("Multiplication:", number1 * number2);
} catch (error) {
    console.log("Error:", error.message);
}
console.log("-------------------------")