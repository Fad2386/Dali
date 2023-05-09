const form = document.querySelector("form");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const productsContainer = document.querySelector(".products-container");

const products = [
  {
    name: "Велосипед",
    price: 70000,
  },
  {
    name: "Самокат",
    price: 50000,
  },
];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newProduct = {
    name: productName.value,
    price: +productPrice.value,
  };
  products.push(newProduct);
  showProducts();
  clearInputs();
});

function clearInputs() {
  productName.value = "";
  productPrice.value = "";
}
function showProducts() {
  productsContainer.innerHTML = "";
  products.forEach(function (product, index) {
    productsContainer.innerHTML += `<div class="product">
    <p class="product-card-name">${product.name}</p>
    <p class="product-card-price">${product.price}</p>
    <button class="product-card-btn" id = ${index}> X </button>
    </div>`;
  });
  onHower();
  dellProduct();
}
showProducts();

function onHower() {
  const produtsCards = document.querySelectorAll(".product");
  produtsCards.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      const button = card.querySelector("button");
      button.style.display = "block";
    });
    card.addEventListener("mouseout", function () {
      const button = card.querySelector("button");
      button.style.display = "none";
    });
  });
}


function dellProduct() {
  const productsCardDell = document.querySelectorAll(".product-card-btn");
  productsCardDell.forEach(function (dell) {
    dell.addEventListener("click", function () {
      const id = dell.id
      products.splice(id, 1)
      showProducts()
    });
  });
}

// function showNotificaton() {
//     const notification = document.querySelector(".notification")
//     notification.style.display = "block"
//     setTimeout(function() {

//     }

//     ))
// }



/* <div class="product">
            <p class="product-card-name">Велосипед</p>
            <p class="product-card-price">40000</p>
            <button class="product-card-btn"> X </button>
        </div> */
