const { error } = require('console');
const fs= require('fs');


//creating a folder in node JS
fs.mkdir("Giri", (error) => {
    if(error){
        console.log("Error occured while creating a file");
    }else{
        console.log("Succesfully created a folder name Giri");
    }
})
//creating a new file name = helper
fs.writeFileSync("Giri/bio.txt","Hello Everyone!!!");

//apending data  in to the file 
fs.appendFileSync("Giri/bio.txt","My name is Cristiano Ronaldo");

// reading the file without the buffer data
let data = fs.readFileSync("Giri/bio.txt", "utf-8");
//displaying the data in tot the console
console.log(data);

//renaming the file 
fs.renameSync("Giri/bio.txt", "Giri/mybio.txt");

//deleting the file 
fs.unlinkSync("Giri/mybio.txt");
console.log("mybio.txt file has been deleted successfully");

//deleting the folder
fs.rmdir("Giri",(error)=>{
    if(error){
        console.log("Error occured while deleting a folder");
    }else{
        console.log("Giri folder has been delete successfully");
    }
});
