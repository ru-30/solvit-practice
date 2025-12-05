const result = "Javascript_is_fun";
const names = result.split("_")
.map(namez => namez.charAt(0).toUpperCase() + namez.slice(1))
.join(" ")

console.log(names)