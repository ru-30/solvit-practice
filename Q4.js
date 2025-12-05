let products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Mouse", price: 30 }
];

let result = products
  .filter(p => p.price > 100)
  .map(p => p.name.toUpperCase());

console.log(result);
