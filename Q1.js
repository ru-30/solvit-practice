let numbers = [2, 4, 6, 8, 10, 12];

let result = numbers
  .map(n => n * 2)
  .filter(n => n >= 10)
  .sort((a, b) => b - a);

console.log(result);