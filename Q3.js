const words = ["HELLO", "", "WORLD", "JS", ""];

const result = words
  .filter(word => word !== "")
  .map(word => word.toLowerCase())
  .reverse();
console.log(result);