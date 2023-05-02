const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= number.length; i++) {
  if (number[i] % 2 == 1) console.log(number[i]);
}

function arrayNumbers(num1, num2) {
  const numbers = [];
  for (let i = num1; i >= num2; --i) {
    numbers.push(i);
  }
  return numbers;
}
console.log(arrayNumbers(55, 20));

const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
const numbers_squared = numbers;
for (let i = 0; i < numbers_squared.length; i++) {
  console.log(numbers_squared[i] ** 2);
}
const last_elem = numbers_squared[6];
console.log(last_elem);

const user = {
  first_name: "Ivan",
  last_name: "Ivanov",
  age: 20,
  salary: 500,
};

console.log(
  `User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old.`
);
