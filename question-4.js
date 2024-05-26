// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

//console.log(inventory[0].quantity)
let minQuantity;

for (let n = 0; n < inventory.length; n++) {
  if (n === 0) {
    minQuantity = inventory[n].quantity;
  } else if (minQuantity > inventory[n].quantity) {
    minQuantity = inventory[n].quantity;
  }
}

console.log(minQuantity);

let nameMinQantity;

for (let n = 0; n < inventory.length; n++) {
  if (minQuantity === inventory[n].quantity) {
    nameMinQantity = inventory[n].name;
  }
}
console.log(nameMinQantity);

console.log(
  "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " + nameMinQantity + " ซึ่งมี " + minQuantity + " ชิ้น"
);
