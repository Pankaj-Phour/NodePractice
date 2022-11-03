// file system module used as fs module in node is a built in module of nodejs 
// We can use it directly just by importing it at top of our file 
// It has a lot of built in functions to read, open, write, delete, and many other tasks to perform on a file
// While working with api and other mega projects in node it comes handy to make code easier 
// let's import fs module here and see some of it's important functions 

const fs = require('fs');

// console.log(fs);  /* It will returna a lot of functions list that we cna use in node with fs module */
console.log("Hello from fileSystem.js");
// let's try to create a new file with fs module 
// For that we have a function called writeFile() in fs module 
// fs.writeFile() takes 4 arguments. 1. name of file. 2. data to write in file. 3. encoding type of data to write in file. 4. Callback function to handle errors 

fs.writeFile("data1.txt","this is a text file","utf-8", (err)=>{
    if(!err){
        console.log("File created successfully");
    }
    else{
        console.log("Following error occured while creating file -------->",err);
    }
})

// We can also read data from a file with nodejs fs module. For that we have a function named fs.readFile(). 
// fs.readFile() takes 3 arguments 1.) name of file to read data from 2.) encoding type of data to read in file 3.) callback function 
// callback function in readFile() takes two arguments 1 is for error and 2 is for data that is readed from the target file 
fs.readFile('data12.txt','utf-8', (err,data)=>{
    if(err){
        console.log("Error occured while reading file----> ",err);
    }
    else{
        console.log(data,"data");
    }
});


// We also have a method to delete a file with nodejs fs module. For that we have a function named fs.unlink(). 
// fs.unlink() takes two argument 1.)  name of the file to delete 2.) callback function 
// callback function in readFile() takes 1 argument for error.

fs.unlink('data13.txt',(err)=>{
    if(err){
        console.log("Error occured while deleting file ----> ",err);
    }
    else{

        console.log("File deleted successfully");
    }
})


// We can also update content of a file without changing it's previous data with nodejs fs module. For that we have a function named fs.appendFile() 
// fs.appendFile() takes 4 arguments.  1.) name/path of the file to update. 2.) data to append/update in the file. 3.) An optional argument for encoding type of data  4.) callback function. 

fs.appendFile('data.txt', '\nThis is new data added by appendFile().', (err)=>{
    if(!err){
        console.log("Data updated successfully");
    }
    else{
        console.log("Error occured while updating file----> ",err);
    }
})

// We can create and delete folders using fs module in nodejs. For that we have some other functions named fs.mkdir() and fs.rmdir(). 
// fs.mkdir() creates a folder/directory in the current working directory or we can pass path to it where to create folder/directory.

fs.mkdir('files', (err)=>{
    if(err){
        console.log("Error occured while creating folder----> ",err);
    }else{
        console.log(err,"Folder created successfully");   
    }
}
    )

    fs.rmdir('files', (err)=>{
        if(err){
            console.log("Error occured while deleting folder----> ",err);
        }else{
            console.log(err,"Folder deleted successfully");   
        }
    })

const writer = fs.createWriteStream('data.txt');
writer.write(" Testing writeStream function.")
// console.log(writer);


const reader = fs.createReadStream('data.txt')
reader.on('data', (data)=>{
    console.log("Data reader",data.toString());
})



// We can also check for a specific folder/directory in our working directory with fs.access() in nodejs. 
// fs.access() is used to check to check if a file/folder exists in the current working directory or not 
// We can also check permissions of file (read/write) by fs.access() 

fs.access('files',(err)=>{
    if(err){
        console.log("file/folder not found error----> ",err);
    }
    else{
        console.log("File/folder is present in current working directory");
        // We can also add some other code if our file/folder is found in this block
    }
})


// now let's create our files in a folder named dataFiles 
// First we will be checking if our current working directory contains a folder named dataFiles 
// If our current working directory does not contain a folder named dataFiles then we will create a folder named dataFiles 
// Else we will create our files in that folder 

fs.access('dataFiles',(err)=>{
    // if folder is not  already present in the working directory then this code block will execute 

    if(err){
        fs.mkdir('dataFiles',(err)=>{
            if(err){
                console.log("Error occured while creating folder ---> ",err);
            }
            else{
                for(let i=0;i<5;i++){
                    fs.writeFile(`dataFiles/data${i+1}.txt`,`This is text file number ${i+1}`,(err,data)=>{
                        console.log(err,data,"Files created successfully");
                    })
                }
            }
        })
    }

    // if folder is already present in the working directory then this code block will execute 
    else{
        for(let i=0;i<5;i++){
            fs.writeFile(`dataFiles/data${i+1}.txt`,`This is text file number ${i+1}`,(err,data)=>{
                console.log(err,data,"Files created successfully");
            })
        }
    } 
})

// We can also delete more than one files at a time with the method above 
// We just have to use fs.unlink() in place of fs.writeFile()

 