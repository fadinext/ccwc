const argv = process.argv;

const CCWC = require("./ccwc")
const program = new CCWC();

console.log(program.execute(argv));