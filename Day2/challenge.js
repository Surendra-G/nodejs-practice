const { error } = require("console");
const fs = require("fs");

//CRUD Operation using Asynchronous 
//creating the folder named Giri
fs.mkdir("GIRI", (error,data)=>{
    if(error){
        console.log("Error occured in creating the folder");
    }else{
        console.log("Floder succesfully Created");
    }
})


//creating the file name bio.txt and write some data into it
fs.writeFile("GIRI/bio.txt","Hello my name is SUrendra Giri.",(error,data)=>{
    if(error){
        console.log("Error occured in creating the file");
    }else{
        console.log("file succesfully Created");
    }
})

//reading the data 
fs.readFile("GIRI/bio.txt","utf-8",(error,data)=>{
    if(error){
        console.log("error reading the content of the file");
    }else{
        console.log("Succesfully read!!");
        console.log(data);
    }
})

//reanme the file 
fs.rename("GIRI/bio.txt","GIRI/mybio.txt",(error,data)=>{
    if(error){
        console.log("error naming the content of the file");
    }else{
        console.log("Succesfully Rename the file!!");
    }
})


//delleting the file and the folder
fs.unlink("GIRI/mybio.txt",(error,data)=>{
    if(error){
        console.log("Error in deleting the file");
    }else{
        console.log("SUccessfuly deleted the file");
    }
})

//deleting the folder
fs.rmdir("GIRI",(error)=>{
    if(error){
        console.log("Error in deleting the folder");
    }else{
        console.log("SUcessfully deleted the folder");
    }
})