// In this file we will be learning about arguments and input in nodejs 
// We will use the process method of nodejs to get the input (extra arguments) from user
// And we can also perform any task based conditionaly on that input from user 
// We can get input/arguments from user by process.argv method 
// It will always return path of our project and path of file we are working in along with extra arguments passed at the time of running project(if any) 


import http from 'http'
import data from './data.js'
const a = process.argv
// console.log(a)
// In the above line a will be an array of items 
/*  [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\ASTR 52\\Desktop\\nodePractice\\app.js'
  ]    */
// First item will be path of our project and second will be the path of file we are working in 
// And the rest is dependent on the argument by user 
// If user enters anything extra while running the code 
// It will be shown in the array a 

// let's check again by entering an extra parameter while running the code with npm start (Pankaj)
const b = process.argv;
// console.log(b)
// It will return the following code 
/*  [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\ASTR 52\\Desktop\\nodePractice\\app.js',
    'Pankaj'
  ]    */


//   we can access arguments from this as a normal array 
// Let's say if we want to access the path of file we're working in 
// We can access it by process.argv[1] as it is present on index 1 in the array 
// If we want to access argument Pankaj then we will be doing process.argv[2] 

// Let's say we have a condition in the code, that if a random user comes to code 
// Then we have to show the usual code 
// But if the admin visits code then we have to send him data from our file data.js 
// We can do this by process.argv method 

let input = process.argv;
console.log(input);

// here we will be getting the extra parameter for admin to check if the user is admin or a normal user 
// As we know that first two values in process.argv array are the path of our project and current file 
// So we will be working with the third value here 

let admin = process.argv[2]
if(admin){
    console.log("Welcome Admin")
    console.log(`You can check the reponse of code on http://localhost:${8100}`);
    http.createServer((req,res)=>{
        res.writeHead(200);
        // console.log(data,"Hello")
        res.write(JSON.stringify(data));
        res.end();
    }).listen(8100)
}
else{
    console.log("Hello user ")
}