// 1.
let number = prompt("Enter number");
console.log(number * 0.1);

// 2.
function variables(number_1, number_2) {
  if (number_1 < number_2) {
    console.log(number_1);
  } else {
    console.log(number_2);
  }
}
variables(15, 30);

// 3.
let number_3 = prompt("Enter number");
if (number_3 < 100) {
  console.log("Number less than 100");
} else if (number_3 > 100) {
  console.log("Number greater than 100");
} else {
  console.log("The number is 100");
}

// 4.
const name1 = prompt("Enter your Name");
const age = prompt("Enter your age");
if (age >= 18) {
  console.log(`Hello, ${name1}`);
} else {
  console.log(`Hi, ${name1}`);
}
