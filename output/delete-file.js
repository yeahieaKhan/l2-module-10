const fs = require("fs");
fs.writeFileSync("./output/temp.txt", "this is temp file");
console.log("temp file is created");

if (fs.existsSync("./output/temp.txt")) {
  console.log("file exist");
  fs.unlinkSync("./output/temp.txt");
}

try {
  fs.unlinkSync("./output/temp.txt");
} catch (error) {
  console.log("something went rong", error);
}
