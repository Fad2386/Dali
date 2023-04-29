// alert("Hello World")
// console.log("Hello")
// prompt("Как вас зовут?")
// const username = prompt("Как вас зовут?")
// console.log(username)

// console.log("Hello")
// console.log("Меня зовут Dali")
// console.log("мне 12 лет")

// alert("Выберитие какой-то из вариантов")
// alert("Заполните все поля формы")
// const userage = prompt("Сколько Вам лет?")
// console.log(userage)

// const userName = prompt("Как вас зовут?")
// const userage = prompt("Cколько вам лет?")
// console.log("Привет, " + userName + " вам " + userage + " лет")
// console.log(`Hello, ${userName}, you are ${userage} old.`)
// const userAge = prompt("Сколько вам годиков?")
// console.log(2023 - userAge)

// const r = 154
// const g = 172
// const b = 65

// console.log(` rgb ${r}, ${g}, ${b}`)

// console.log(172)
// let temp = prompt ("Сколько градусов по цельсию?")
// let farengeit = temp *1.8 + 32
// alert(farengeit)

// const numbers = [10, 0, 70, 1000, 95]
// const names = ["Arsen", "Artur", "Maria"]

// console.log(names[2])
// alert(numbers[0])
// console.log(numbers.length)

// const names = []
// names.push(prompt("Enter your name"))
// names.push(prompt("Enter your name two"))
// console.log(names)

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for(let i = 98; i < 100; i++) {
//   console.log(i)
// }
// const names = []
// for(let i = 0; i < 5; i++) {
//     names.push(prompt("Enter your name"))
//   }
// console.log(names)

// const nambers = [10, 4, 15, 32, 8]
// console.log(`Number ${numbers[0]}`)

// for (let i = 0; i < nambers.length; i++) {
//     console.log(nambers[i] * nambers[i])
//     console.log(nambers[i]**2)
//     console.log(Math.pow(nambers[i], 2))
// }
// const laptop = {
//     RAM: "4GB",
//     country: "Ukraine",
//     prise: 20000,
//     currensy: "USD",
//     color: ["black", "gray", "white"],
//     additional_info: {
//         warranty: "24 month",
//         class: "normal"
//     }
// }
// console.log(`${laptop.prise} ${laptop.currensy}`)
// console.log(laptop.color[0])
// const product = {
//     name: "Soap",
//     prise: 5000,
// }
// console.log(product.name)
// console.log(product.prise)
// const products = [
//     {
//         name: "Iphone 14",
//         prise: 40000
//     },
//      {
//         name: "Iphone 15",
//         prise: 60000
//     },
//      {
//         name: "Iphone 16",
//         prise: 70000
//     },
// ]
// for(let i = 0; i < products.length; i++) {
//     if(products[i].prise > 40000) {
//     console.log(products[i].name)
//     }
// }
// let sum = 0
// for(let i = 0; i < products.length; i++) {
//     sum += products[i].prise
// }
// console.log(sum)
// console.log(products[0].name)
// for(let i = 0; i < products.length; i++) {
//     console.log(`Name: ${products[i].name}. Prise ${products[i].prise}`)
// }
// const numbers = [10, 20, 30, 40, 50]
// let sum = 0
// for(let i = 0; i < numbers.length; i++) {
//     // sum = sum + numbers[i] 
//     sum += numbers[i]
// }
// console.log(sum)

// const products = [
//     {
//         title: "TV Samsung",
//         category: "TV",
//         price: 40000 
//     },
//     {
//         title: "TV Xiaomi",
//         category: "TV",
//         price: 42000 
//     },
//     {
//         title: "Iphone 14",
//         category: "phone",
//         price: 50000 
//     },
//     {
//         title: "HP 1065",
//         category: "laptop",
//         price: 70000 
//     },
//     {
//         title: "ACER G575",
//         category: "laptop",
//         price: 63000 
//     },
// ]
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 45000) {
//       console.log(products[i].title);
//     }
//   if (products[i].category == "TV") {
//       console.log(`Mame: ${products[i].title}. end price: ${products[i].price}`)
//   }
  
//   if (products[i].price > 45000) {
//     console.log(products[i].price * 0.9);
//   } else{
//   console.log(products[i].price);
//     }
// }

// const names = ["Arsen", "Lia", "Nastya", "Ivan"];
// const newNames = [];
// for (let i = 0; i < names.length; i++) {
//   const newName = names[i].toUpperCase();
//   newNames.push(newName);
//   console.log(names[i].toUpperCase());
// }

// const num1 = 20
// const num2 = 50
// console.log('Переменная', num1)
// console.log('Переменная', num2)
// console.log('Sum', num1 + num2)

// const num4 = 20
// const num5 = 50
// console.log('Переменная', num4)
// console.log('Переменная', num5)
// console.log('Sum', num4 + num5)

// function showVariablesSum () {
//   const num1 = 20
// const num2 = 50
// console.log('Переменная', num1)
// console.log('Переменная', num2)
// console.log('Sum', num1 + num2)
// }

// showVariablesSum ()

// function showVariablesSum (num1, num2) {
// console.log('Переменная', num1)
// console.log('Переменная', num2)
// console.log('Sum', num1 + num2)
// }

// showVariablesSum (20, 50)
// showVariablesSum (100, 200)

// function calc (num1, num2) {
//   console.log(num1 + num2)
//   console.log(num1 - num2)
//   console.log(num1 * num2)
//   console.log(num1 / num2)
// }
// calc (10, 100)

// function P (x, y) {
//   let S = x * y
//   console.log(`Длина комнаты = ${x}, ширина = ${y}. Площадь = ${S}`)
// }
// let x = +prompt ("Напишите длину")
// let y = +prompt ("Напишите ширину")
// P(x, y)

// function show() {
//   const userName = prompt("Enter your name")
//   console.log(userName.toUpperCase())
// }
// show()

// function show(number){
//   for(let i = 0; i <= number; i++) {
//     console.log(i)
//   }
// }
// let num = +prompt("Enter Number")
// show(num)

// function show(array) {
//   for(let i = 0; i <= array.length; i++) {
//    console.log(array[i])
//    }
//  }
//  const numders = [10, 20, 30]
//  name(numders)

//  function names() {
//   console.log(`Имя ${x1}, Фамилия ${t1}`)
//  }
//   let x1 = prompt("Enter Name")
//   let t1 = prompt("Enter Name1")
// names ()


// function calc(x, y) {
//   const result = x**2 + y**2
//   return result
// }
// const num = calc(2, 4)
// console.log(num)

// const user = 
//  {
//  Name: "Dali",
//  age: "29",
//  eMails: ['google@gmail.com', 'google@gmail.com']
//  }
// console.log(`Name is ${user.Name}. He is ${user.age} years old. Second e-mail is ${user.eMails[1]}`)

// const users = [
//         {
//             age: 15,
//             solary: 400000,
//             email: 'google@gmail.com' 
//         },
//         {
//             age: 39,
//             solary: 400000,
//             email: 'google@gmail.com' 
//         },
//         {
//             age: 50,
//             solary: 400000,
//             email: 'google@gmail.com' 
//         },
//     ]
//     console.log(users[users.length-1].age)

//     damage

//     const players = [
//         {
//            playerName: "Player 1",
//            damage: 100
//         },
//         {
//            playerName: "Player 2",
//            damage: 200
//         }
//      ]
     
//      if (players[0].damage > players[1].damage) {
//         alert(`${players[0].playerName} выйграл`);
     
//      } else if (players[0].damage < players[1].damage) {
//         alert(`${players[1].playerName} выйграл.`);
     
//      } else {
//         alert(`Ничья`);
//      }

//      const number = +prompt("Enter a number")

// if(number % 10 == 8) {
//     console.log(number)
// }

// const time = +prompt("Enter time")

// if(number % 10 == 8) {
//     console.log(number)
// }

// function getArray(number) {
//     const num = []
//     for(let i = 0; i < number; i++) {
//         num.push(i)
//     }
//     return num
// }
// console.log(getArray(5)) 

// function getArray(x, y) {
//     const num = []
    
//     for(let i = x; i <= y; i++) {
//         num.push(i)
//     }
    
//     return num
// }
// const num1 = +prompt("Emter 1 number")
// const num2 = +prompt("Emter 2 number")
// console.log(getArray(num1, num2)) 

// function getArray(x, y) {
//     const num = []
//     if(x < y){
//     for(let i = x; i <= y; i++) {
//         num.push(i)
//     }
// }
//     else if (x>y){
//         for(let i = y; i <= x; i++) {
//             num.push(i)
//         }
//     }
//     else{
//         return "Nan"
//     }
    
//     return num
// }
// console.log(getArray(8, 8))

// /*numbers[i] > 50

//     number % 2 == 0
//     % - остаток от деления

//     При делении на 2, если в остатке 0 - то число четное, иначе - нечетное
//     10 % 2 = 0
//     5 % 2 = 1

//     10/2 = 5. 0 -ост ЧЕТ
//     5/2 = 2. 1-ост НЕЧЕТ
//     15/2 = 7. 1- ост НЕЧЕТ
//     28/2 = 14. 0 - ост ЧЕТ
//     23/2 = 11. 1 - ост НЕЧЕТ
// */

// const numbers = [5, 10, 15, 23, 28, 32]
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i]%2 == 0){
//         console.log(numbers[i])
//     }
// }
// numbers()