// const title = document.createElement("h1")
// title.innerText = "My text"
// console.log(title)

// const main = document.querySelector("main")
// main.appendChild(title)

// 1. Создание элемента. createElement("h1")
// 2. Добавление текста в тег. innerText
// 3. Поиск элемента, куда хотим поместить тег
// 4. Добавление созданного тега в найденные элемент. appendChild()

// const main = document.querySelector("main")
// main.innerHTML += `<section>
// <h2>My text</h2>
// </section>`

// innerHTML - свойство, которое позволяет получить или назначить html содержимое тега
//     1. Поиск элемента, куда хотим поместить тег
//     2. Добавляем тег с помощью innerHTML
//     3. += h1 из html добавить к h2 из JS

//  const main = document.querySelector("main")
// main.innerHTML += `<p>Hello</p>`

// for(let i = 1; i <= 100; i++) {
//      console.log("hello")
//      main.innerHTML += `<p>Hello ${[i]}</p> `
// }

// const names = ["Arsen", "Sergej", "Illya", "Artur"]
// for(let i = 0; i < names.length; i++) {
//     main.innerHTML += `<p> ${names[i]}</p> `
// }

// let name = ""
// for(let i = 0; i < names.length; i++) {
//     name = "," + names[i] // "Arsen, Sergej, Illya, Artur"
// }
// main.innerHTML += `<p>${names}</p>`

// main.innerHTML += `<p>${names.join(",")}</p>`

// Есть массив ссылок. Для каждой ссылки массива создать тег img, в свойство src положить ссылку
// const img1 = ["https://i.pinimg.com/736x/34/0f/37/340f37ae4f36826f3571a2f9c64544ec.jpg", 
//     "https://img1.akspic.ru/previews/7/4/7/9/6/169747/169747-ikanvas-art-pechat_na_holste-poster-oblako-500x.jpg", 
//     "https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg"]
// for(let i = 0; i < img1.length; i++) {
//     main.innerHTML += `<img src = ${img1[i]}>`
// }

// Есть массив объектов. Для каждого объекта отобразить тег a, в href положить ссылки

// const links = [
//     {
//         name: "Google",
//         link: "https://google.com"
//     },
//     {
//         name: "Facebook",
//         link: "https://facebook.com"
//     },
//     {
//         name: "Instagram",
//         link: "https://instagram.com"
//     },
// ]

// for(let i = 0; i < links.length; i++) {
//     main.innerHTML += `<a href = "${links[i].link}">${links[i].name}</a>`
// }

// const products = [
//     {
//         name: "Iphone 14",
//         price: 70000
//     },
//     {
//         name: "Iphone 13",
//         price: 60000
//     },
//     {
//         name: "Samsung S30",
//         price: 65000
//     }
// ]

// for(let i = 0; i < products.length; i++) {
//     main.innerHTML += `<div class="products1"
//     p<h5>${products[i].name}</h5> 
//     <p>${products[i].price}</p>
//     </div>`
    
// }

// let sum = 0
// for(let i = 0; i < products.length; i++){
//     sum += products[i].price
// }
// main.innerHTML += `<h2>Summ: ${sum}<h2>`

const users = [
    {
        email: "test@gmail.com",
        login: "Test"
    },
    {
        email: "starta@gmail.com",
        login: "Starta University"
    },
    {
        email: "admin@gmail.com",
        login: "Admin"
    },

]

{/* <div class="user">
        <h5>Email</h5>
        <p>Login</p>
    </div> */}
const usersContainer = document.querySelector(".users-container");

for (let i = 0; i < users.length; i++) {
    usersContainer.innerHTML += `<div class="user"
        <h5>${users[i].email}</h5> 
        <p>${users[i].login}</p>
    </div>`;
}
users.forEach(function (us) {
    usersContainer.innerHTML += `<div class="user"
        <h5>${us.email}</h5> 
        <p>${us.login}</p>
    </div>`;
})
console.log(users)

// const posts = [
//     {
//         title: "My first title",
//         descr: "My descr",
//         author: "Test"
//     },
//     {
//         title: "My second title",
//         descr: "My second descr",
//         author: "Admin"
//     },
//     {
//         title: "My third title",
//         descr: "My third descr",
//         author: "Starta University"
//     },
// ]

// const postsCont = document.querySelector(".posts-container");

// for (let i = 0; i < posts.length; i++) {
//     postsCont.innerHTML += `<div class="post"
//         <h6>${posts[i].title}</h6> 
//         <p>${posts[i].descr}</p>
//         <p>${posts[i].author}</p>
//     </div>`;
// }

// posts.forEach(function(post) {
//     console.log(post)
//     postsCont.innerHTML += `<div class="post"
//         <h6>${post.title}</h6> 
//         <p>${post.descr}</p>
//         <p>${post.author}</p>
//     </div>`;
// })

// const numbers = [10, 30, 25, 60, 13]

// numbers.forEach(function(number) {
//     console.log(number)
// })

// const names = ["Fhj", "HJHkk", "hgh", "ghgh", "gh"]
// names.forEach(function(name) {
//     console.log(`Привет ${name}`)
// })