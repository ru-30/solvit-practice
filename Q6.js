const users = [
  { name: "alice", role: "admin" },
  { name: "bob", role: "user" },
  { name: "john", role: "admin" }
];

const result = users
  .filter(u => u.role === "admin")
  .map(u => u.name.charAt(0).toUpperCase() + u.name.slice(1));

console.log(result);