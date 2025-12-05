const words = ["JS", "React", "Node", "JS","React",];
 const text=words.map(p => p.toLowerCase());
const result = [...new Set(text)].sort();

console.log(result)
