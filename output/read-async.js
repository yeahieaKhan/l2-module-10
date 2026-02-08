const fs = require("fs");
fs.readFile("./data/entries/dairy.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("what happen", error.message);
  }
  console.log(data);
});

console.log("done");
