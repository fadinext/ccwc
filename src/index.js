const { argv } = process;

const CCWC = require("./ccwc");
const program = new CCWC();

console.log(program.execute(argv));
