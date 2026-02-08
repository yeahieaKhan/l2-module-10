const args = process.argv;

const name = args[2] || "guest";

const time = new Date().getHours();

console.log("Time:", time);

let greeting;

if (time < 12) {
  greeting = "good morning";
} else if (time < 17) {
  greeting = "good afternoon";
} else {
  greeting = "good night ";
}

console.log(`${greeting} ${name} `);
