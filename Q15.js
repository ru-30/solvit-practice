function formatNames(names) {
  return names
    .map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
    .sort()                                                           
    .join(", ");                                                      
}

console.log(formatNames(["bob", "Alice", "david"]));
