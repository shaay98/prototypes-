"use strict"

const products = [
{ id: 1, name: "Laptop", price: 1200, category: "Electronics" },
{ id: 2, name: "Phone", price: 800, category: "Electronics" },
{ id: 3, name: "Shoes", price: 120, category: "Clothing" },
{ id: 4, name: "Watch", price: 150, category: "Accessories" },
{ id: 5, name: "Headphones", price: 200, category: "Electronics" },
];

// .map
const productNames = products.map((product) => product.name)
console.log(products)
console.log(productNames)

// .filter
const expensiveProducts = products.filter((product) => product.price > 500)
console.log(expensiveProducts)
const inexpensiveProducts = products.filter((product) => product.price < 500)
console.log(inexpensiveProducts)

// .reduce
const totalPrice = products.reduce((sum, product) => sum + product.price, 0)
console.log(totalPrice)

// render function
function renderProducts(productsList){
    const container = document.getElementById("products");
    container.innerHTML = ""
    productsList.forEach((product) => {
        const div = document.createElement("div")
        container.innerHTML += `<p>${product.name} - ${product.price}</p>`
        container.appendChild(div)
    })
}
document.getElementById("render").addEventListener("click", () => {
    renderProducts(expensiveProducts);
    })