function processProducts(products) {
  const productNames = products.map(product => product.name);
  console.log("Product Names:", productNames);

  products.forEach(product => {
    const priceStatus = product.price > 50 ? "above" : "below";
    console.log(`${product.name} is ${priceStatus} $50`);
  });
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 75 },
  { name: "Headphones", price: 45 }
];

processProducts(products);