const fs = require("fs");

// fs.writeFile("example.txt", "Hello World!", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("File created successfully!");
//   }
// });

// fs.writeFile("hello.text", "Hello World", (error) => {
//   if (error) {
//     console.log("Something Went Wrong");
//   } else {
//     console.log("File created sucessfully");
//   }
// });

const content = "I love programming";

try {
  fs.writeFileSync("world.txt", content);
  console.log("file created successfully sync");
} catch (error) {
  console.log("Something went wrong");
}
