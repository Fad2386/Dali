// __1__
function toggle_theme() {
  const target = document.querySelector(".rectangle");
  target.classList.toggle("rectangle2");
}
// __2__
function toggle_theme1() {
  const target = document.querySelector(".rec");
  target.classList.toggle("rec2");
  console.log("BLUE");
}
// __3__
function toggle_theme2() {
  const target = document.querySelector(".rect");
  target.classList.toggle("rect2");
}
// __4__
function addText(text) {
  const add = document.querySelector(".root");
  add.innerHTML +=
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
}
// __5__
// const text = document.querySelector(".root_1")
// const button = document.querySelector(".btn")


// button.addEventListener("click", function() {
//         if (text.innerHTML === ""){
//         text.innerHTML += `<p id = "blue">Lorem Ipsum.</p>`;
//         const blue = document.querySelector("#blue");
//         blue.style.color = "blue"
//         }

//         else if (blue.style.color == "blue") {
//             text.innerHTML += 
//             `<p id = "green">Lorem Ipsum.</p>`;
//             const green = document.querySelector("#green");
//             green.style.color = "green"
//         }
//         else {}
// })




