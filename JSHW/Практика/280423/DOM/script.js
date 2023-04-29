// // по тегу
// const title = document.querySelector("h1")
// console.log(title)

// // по классу
// const text = document.querySelector(".deckription")
// console.log(text)

// // вложенный селектор
// const text1 = document.querySelector("section p")
// console.log(text1)

// // по id
// const googlelink = document.querySelector("#google-link")
// console.log(googlelink)

// по селектору 
//     const texts = document.querySelectorAll("p")
//     console.log(texts)

//     const text1 = document.querySelectorAll(".deckription")
// // const section2 = document.querySelector(".container")

// const text = document.querySelector(".text")
// const h2 = document.querySelector("section h2")
// const a = document.querySelector("#link")

// const title = document.querySelector("h1")
// title.innerText = "Привет мир"

// const google = document.querySelector("a")
// google.innerText = "Ссылка на Google"

// const texts = document.querySelectorAll("p")
// console.log(texts[0])
// for(let i = 0; i < texts.length; i++) {
//     texts[i].innerText = "Мой текст"
// }

// const link = document.querySelectorAll("a")
//     for(let i = 0; i < link.length; i++) {
//         link[i].innerText = "Link"
// }

const link = document.querySelector("#google-link")
const href = link.getAttribute("href")
console.log(href)

// const img = document.querySelector("img")
// const img1 = img.getAttribute("src")
// console.log(img1)

const img = document.querySelectorAll("img")
for(let i = 0; i < img.length; i++) {
    const img1 = img[i].getAttribute("src")
    console.log(img1)
    }

   