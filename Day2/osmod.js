//requiring the operating system 
const os = require("os");

//checking the architecture of the computer
console.log(os.arch());
//checking my hostname
console.log(os.hostname());
//checking the platform names
console.log(os.platform());

//checking the freemeory
const freememory = os.freemem();
console.log(`${freememory/1024/1024/1024}`);

//temporary memory
const totalmemo = os.totalmem();
console.log(`${totalmemo/1024/1024/1024}`);

//checking the temporaryDIrectory
console.log(os.tmpdir());

console.log(os.type());