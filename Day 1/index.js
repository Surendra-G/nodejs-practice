const fs = require('fs');  //accessing the file system library in node js

//creating a new file
fs.writeFileSync("newfile.txt","Hello,welcome to development world!!");
fs.writeFileSync("newfile.txt","Hello, welcome to development world!!. have a great future ahead.");

 //append the content in the same file 
fs.appendFileSync("newfile.txt","\nSanchaii Hunuhunxa?");

//reading the file content
let data = fs.readFileSync("newfile.txt");

//this will give buffer data
// Buffer is a additional datatype in the node js
// mainly used to store the binary data
// while reading the file or receiving the packets from the network

//needs to convert the data in to the string format
let final_res = data.toString();
console.log(final_res);



