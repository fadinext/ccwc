const fs = require("fs");

const argv = process.argv;
const stdin = fs.readFileSync(process.stdin.fd, "utf-8");
const CCWC = require("./ccwc");
const program = new CCWC();

console.log(program.execute(argv, stdin));
