// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";

let amountPrice = [];
for (let n = 0; n < products.length; n++) {
  amountPrice[n] = products[n].price * products[n].quantity;
}
console.log(amountPrice);

function sumValue(accumulator, currentvalue) {
  return accumulator + currentvalue;
}

amountPrice = amountPrice.reduce(sumValue, 0);
console.log(amountPrice);

function calculateTotalPrice(allPrice, code) {
  if (promotionCode === "") {
    return amountPrice;
  } else if (promotionCode === "SALE20") {
    return amountPrice * 0.8;
  } else if (promotionCode === "SALE50") {
    return amountPrice * 0.5;
  }
}

console.log(calculateTotalPrice(promotionCode));
