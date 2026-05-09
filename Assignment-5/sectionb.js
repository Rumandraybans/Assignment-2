//Email
console.log("Email Validation");
let email = "wrong-email@";
//let email = "rightemail01@gmail.com"
let emailPattern =
/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

console.log("Input email:", email);
if (emailPattern.test(email)) {
    console.log("Valid email");
} else {
    console.log("Invalid email");
}
console.log("-------------------------")

//Password
let password = "PASSWORD123";
let pwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if (pwordpattern.test(password)) {
  console.log("Password is valid.");
} else {
  console.log("Weak password try again.");
}
console.log("-------------------------")

//Mobile Number
let mobno = "6954876320";
let pattern2 = /^[6-9]\d{9}$/;

if (pattern2.test(mobno)) {
  console.log("Mobile Number is valid.");
} else {
  console.log("Invalid Mobile Number.");
}
console.log("-------------------------")

//Extract Number
let str1 = "Order123Amount450";

let numbers = str1.match(/\d+/g);
console.log("Input String:", str1);
console.log("Extracted Numbers:", numbers);
console.log("-------------------------")

//Replace spaces
let str2 = "JavaScript Regular Expression";

let result = str2.replace(/\s+/g, "*");

console.log("Output:", result);
console.log("-------------------------")