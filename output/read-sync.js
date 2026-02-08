const fs = require("fs");
console.log("Reading Starting");

try {
  console.log("File Content reading : ");
  const data = fs.readFileSync("./data/entries/dairy.txt", "utf-8");
  console.log(data);
  console.log("Finished");
} catch (error) {
  console.log(error.message);
}
