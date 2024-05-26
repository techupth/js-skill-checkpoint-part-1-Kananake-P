// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory[0] = { name: "Apple", price: 35, quantity: 200 };
console.log(inventory);

inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory);

let amountFruitPrice  = [] ;
for (let n=0; n<inventory.length; n++){
  amountFruitPrice[n] = inventory[n].price * inventory[n].quantity
}

console.log(amountFruitPrice)

function sumValue(accumulator,currentvalue){
  return accumulator + currentvalue;
}

let totalPrice = amountFruitPrice.reduce(sumValue,0)
console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก " + totalPrice + " บาท")




