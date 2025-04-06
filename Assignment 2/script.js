// Task 1: Age and Adult Check
let age = 25;
let isAdult = age >= 18;
console.log("Task 1:");
console.log(`Age: ${age}`);
console.log(`Is Adult: ${isAdult}`);

// Task 2: Mathematical Operations
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("\nTask 2:");
console.log(`Addition: ${x} + ${y} = ${addition}`);
console.log(`Multiplication: ${x} * ${y} = ${multiplication}`);
console.log(`Modulus: ${x} % ${y} = ${modulus}`);

// Task 3: Even or Odd Check
function checkEvenOdd(n) {
  return n % 2 === 0 ? "even" : "odd";
}

let number = 7; // You can change this number to test different values
let numberType = checkEvenOdd(number);
console.log("\nTask 3:");
console.log(`The number ${number} is ${numberType}`);

// Task 4: Array with Numbers 1 to 5
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
  numbersArray.push(i);
}
console.log("\nTask 4:");
console.log("Numbers array:", numbersArray);

// Task 5: Square Function
function square(number) {
  return number * number;
}

let testNumber = 4; // You can change this number to test different values
let squaredResult = square(testNumber);
console.log("\nTask 5:");
console.log(`Square of ${testNumber} is ${squaredResult}`);

// Additional: Display results in the browser console
console.log("\nAll tasks completed successfully!");
