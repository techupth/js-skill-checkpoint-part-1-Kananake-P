// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

//console.log(inventory[0].quantity)
let minQuantity;
allQuantity = [];

for (let n = 0; n < inventory.length; n++) {
  allQuantity[n] = inventory[n].quantity;
}

console.log(allQuantity);

for (let n = 0; n < allQuantity.length; n++) {
  if (minQuantity === 0) {
    minQuantity = allQuantity[n];
  } else if (minQuantity > allQuantity[n]) {
    minQuantity = allQuantity[n];
  }
}

console.log(minQuantity);

// for(let n=0; n<inventory.length; n = n+1){
//   if(inventory[n].quantity<inventory[n+1].quantity){
//     minQuantity = inventory[n].quantity
//   } else if(inventory[n].quantity>inventory[n+1].quantity){
//     minQuantity = inventory[n+1].quantity
//   }
// }
// console.log(minQuantity)
