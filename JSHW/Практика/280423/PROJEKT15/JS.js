const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")

const products = [
    {
        name: "Велосипед",
        price: 70000
    },
    {
        name: "Самокат",
        price: 50000
    }
]
form.addEventListener("submit", function(event) {
    event.preventDefault()

    const newProduct = {
        name: productName.value,
        price: +productPrice.value
    }
    products.push(newProduct)
})
console.log(products)