const body = document.querySelector("body")
const info = document.createElement("p");
const main = document.createElement("div")

body.append(main, info);
info.innerHTML = "Your element is: ";

const element = prompt("Enter your element: ");

if (element === "p" || element === "a") {
  const text = prompt("text: p");
}

const result = document.createElement(element);

body.prepend(result);

info.innerText += result.nodeName;