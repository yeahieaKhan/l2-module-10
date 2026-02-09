const os = require("os");
console.log("system info \n");
console.log("-".repeat(50));
console.log("\n Platform Details : \n ");
console.log("Platform : ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS type : ", os.type());
console.log("OS Releae : ", os.release());
console.log("Host name: ", os.hostname());
console.log("\n CPU info :");
console.log("-".repeat(50));

const cpus = os.cpus();
console.log("CPU model : ", cpus[0].model);
console.log("Number of cores: ", cpus.length);
console.log("CPU Speed : ", cpus[0].speed);
console.log("-".repeat(50));

const totalMemory = os.totalmem();
const freeMem = os.freemem();
console.log(
  "Total Memory :",
  (totalMemory / 1024 / 1024 / 1024).toFixed(2),
  "gb",
);

console.log("Fee Memory :", (freeMem / 1024 / 1024 / 1024).toFixed(2), "gb");

console.log("-".repeat(50));

const uptime = os.uptime();
console.log(`${uptime}`);
