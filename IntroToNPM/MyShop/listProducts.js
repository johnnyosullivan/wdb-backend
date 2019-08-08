var faker = require('faker');

// var randomProduct = faker.commerce.productName();
// var randomPrice = faker.commerce.price();

function priceList() {
    for (var i = 1; i <= 10; i++) {
        console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
    }
}
console.log("===================");
console.log("WELCOME TO MY SHOP");
console.log("===================");
priceList();
console.log("===================");

