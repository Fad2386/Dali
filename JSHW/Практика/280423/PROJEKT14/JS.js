// const button = document.querySelector(".btn")
// const button1 = document.querySelector(".btn1")
// const title = document.querySelector("h1")

// let counter = 0
// button.addEventListener("click", function() {
//     counter++
//     title.innerText = counter
// })


// button1.addEventListener("click", function() {
//     counter--
//     title.innerText = counter
// })

 const body = document.body;

 const buttons = document.querySelectorAll("button");
 for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function (event) {
     if (event.target.id == "img") {
       body.style.background = "url(./img/img1.jpg)";
     } else {
       const color = event.target.id;
       body.style.background = color;
     }
   });
 }



    
 
// body.style.backgroundColor = "red"

// const redButton = document.querySelector("#red")
// redButton.addEventListener("click", function() {
//     body.style.backgroundColor = "red"
// })

// const blueButton = document.querySelector("#blue")
// blueButton.addEventListener("click", function(event) {
//     console.log(event)
//     body.style.backgroundColor = "blue"
// })

// const greenButton = document.querySelector("#green")
// greenButton.addEventListener("click", function() {
//     body.style.backgroundColor = "green"
// })

// const yellowButton = document.querySelector("#yellow")
// yellowButton.addEventListener("click", function() {
//     body.style.backgroundColor = "yellow"
// })
