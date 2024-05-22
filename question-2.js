// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory[0] = { name: "Apple", price: 35, quantity: 200 };
console.log(inventory);

inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory);

//console.log(inventory[0].price)
// allPrice = [];
// for(let n=0; n<inventory.length; n++){
//   allPrice[n] = inventory[n].price
// }
// console.log(allPrice)

// allQuantity = [];
// for(let n=0; n<inventory.length; n++){
//   allQuantity[n] = inventory[n].quantity
// }
// allQuantity
