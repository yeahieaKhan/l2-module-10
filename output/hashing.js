// start learning hashing

const crypto = require("crypto");

console.log("\n MD5 Hash : ");
const md5Hash = crypto.createHash("md5").update("password124").digest("hex"); //not recommended
const md5Hash2 = crypto.createHash("md5").update("password124").digest("hex"); //not recommended
console.log("Input : password123");
console.log("MD5 hasedPassword :", md5Hash);
console.log("MD5 hashed 2:", md5Hash2);

const sha256Hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");
console.log("Input: password123");
console.log("output", sha256Hash);

const sha512Hash = crypto
  .createHash("sha512")
  .update("password123")
  .digest("hex");
console.log("Input: password123");
console.log("output", sha512Hash);

console.log(2 ** 32 / 10 ** 9);

//done
