const arry = [1,2,3,4,5];
const double =  arry.map(n=> n*2)
.filter (n => n%2 == 0)
.reduce((sum, val) => sum + val, 0);

console.log(double)