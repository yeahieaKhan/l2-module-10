const fs = require("fs");

fs.writeFileSync("./output/app.log", "Application started \n");
console.log("file created successfully");

const logEntity1 = `${new Date().toISOString()}  user logged in \n`;
fs.appendFileSync("./output/app.log", logEntity1);

const logEntity2 = `${new Date().toISOString()} Data fetched`;
fs.appendFileSync("./output/app.log", logEntity2);

console.log("done");
