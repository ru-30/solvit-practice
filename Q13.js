const words = [
    { name: "John" },
    { name: "jane" },
    { name: "Doe" }
];

const result = words.map(p => ({
    ...p,
    isActive: true
}));

console.log(result);
