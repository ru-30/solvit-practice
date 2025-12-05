const num = [1, 4, 6, 9, 10, 13, 14];
//const even = num.map (p => p%2 ==0).length;
const even =num.filter(p => p%2 == 0).length
console.log(even)