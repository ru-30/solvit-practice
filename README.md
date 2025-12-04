#first work#


#question1.# 
let numbers = [2, 4, 6, 8, 10, 12];

let result = numbers
  .map(n => n * 2)
  .filter(n => n >= 10)
  .sort((a, b) => b - a);
console.log(result); 



#question2#
let text = " learn-javascript ";

let result = text
  .trim()
  .toUpperCase()
  .replace("-", " ");
console.log(result);

 

 #question3#
const words = ["HELLO", "", "WORLD", "JS", ""];

const result = words
  .filter(word => word !== "")
  .map(word => word.toLowerCase())
  .reverse();
console.log(result);

#question4#

let products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Mouse", price: 30 }
];

let result = products
  .filter(p => p.price > 100)
  .map(p => p.name.toUpperCase());

console.log(result);

 #question5
 let text = "hello_world";
let words = text.split("_");

let result = words
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(result); 

#question6

const users = [
  { name: "alice", role: "admin" },
  { name: "bob", role: "user" },
  { name: "john", role: "admin" }
];

const result = users
  .filter(u => u.role === "admin")
  .map(u => u.name.charAt(0).toUpperCase() + u.name.slice(1));

console.log(result);

# question7

