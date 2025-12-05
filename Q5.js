let text = "hello_world";
let words = text.split("_");

let result = words
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(result); 
