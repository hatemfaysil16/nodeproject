// console.log(process.arch);
// console.log(process.pid);
// console.log(process.platform);
// console.log(process.version);
// console.log(process.cwd());
// console.log(process.uptime());
// console.log(process.hrtime());
// console.log(process.memoryUsage());
process.argv.forEach((value,index,array)=>{
    console.log(`${index} : ${value}`);
});
// coment { write cmd  node .\process hatem faysil 11}