const { error } = require("console");
const fs = require("fs");

//file system in asynchronous

//creating file in asynchronous
fs.writeFile('async.txt',"I learned node js basic today" ,(error)=>{
    if(error){
        console.log("Error in creating a file");

    }else{
        console.log("File created Succesfully");
    }
});

//appending content in asynchronous
fs.appendFile("async.txt","\nLovely day", (error) =>{
    if(error){
        console.log("Error occured while appending the file content");

    }else{
        console.log("file content added successfully.");
    }
});  

// reading the file

fs.readFile("async.txt","utf-8",(error,data)=>{
    if(error){
        console.log("Error in reading the files");
    }else{
        console.log(data);
    }
})
