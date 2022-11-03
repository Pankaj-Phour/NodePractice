// In this file we will be discussing about path module in nodejs 
// It is a built in module of nodejs. We don't need to install it externally 
// We can directly use it in our file just by importing or requiring it at the top of our file 


// import path from 'path';
const path = require('path');

// path.basename() takes an argument (path of any file) and returns the name of the file as you can see below 
console.log(path.basename('C:/Users/ASTR 52/Desktop/nodePractice/app.js'))      /* It will return app.js  */

// in path.basename() we can also pass a second (optional) argument which just is the name of the extension and it is used to remove the extension from the file name returned by path.basename() 
console.log(path.basename('C:/Users/ASTR 52/Desktop/nodePractice/app.js','.js'))  /* it will return app  */


// path.delimeter() is used to seperate two or more path by coma to make them more readable.
// It puts all the paths in an array of paths  
console.log(process.env.PATH.split(path.delimiter))

// path.dirname() takes one argument, path of any file and returns the directory (folder) name of any file we pass the path of 
console.log(path.dirname('/nodePractice/node_modules/chalk'));  /* It will return /nodePractice/node_modules/  */


// path.extname() takes one argument, name of the file and returns the extension name of file 
console.log(path.extname('index.html')) /* It wilol return .html because the file extension name is .html */
console.log(path.extname('app.js'))    /* It will return .js because the file extension name is .js */
// We can get any extension of any file by this method 

// path.format() takes an object as argument and makes a path from the properties of the object  
// the object can have these properties in it 
// dir <string>,root<string>, base<string>, name<string>, ext<string> 
// if we are passing root, dir and base to our object 
// Then it will ignore the root and make path from dir + base 
console.log(path.format({
    root: 'Desktop',
    dir: 'nodePractice',
    base: 'pathModule.js'
}))   /* It will return 'nodePractice/pathModule.js' and ignore the root  */

// It uses root only when dir is not present in the object we pass to path.format() 
// Similarly if our base contains extension name then it will ignore the keyword ext from the object and make path from dir/root + base

// path.join() can take more than one argument base on user's purpose 
// If we want to make path of a file and we have the directory name then we can join them both by path.join() 
// let' say we have a directory and a file 
let dir = 'Desktop/nodePractice'
console.log(path.join(dir,'pathModule.js'))   /* It will return Desktop\nodePractice\pathModule.js */

// we can also add more than one path here 

console.log(path.join(dir,'node_modules', 'http'))   /* It will return Desktop\nodePractice\node_modules\http   */



// path.normalize() takes an isArgumentsObject(path of any file/folder) 
// And converts it to a normal/correct path according to that system correcting/replacing the seperators of path like (/// or \\\\) 

// let's say we have path of a file 
let filePath = 'C://Desktop\\nodePractice\\\\pathModule.js//';
console.log(filePath);  /* Now the path to our file is not correct it is syntaxtically wrong */
// We can correct it by path.normalize(). It will automatically replace/correct the path seperators according to the system pattern 

let correctPath = path.normalize(filePath)
console.log(correctPath);  /* It will return C:\Desktop\nodePractice\pathModule.js\   */ 



// path.parse() takes a string as argument and converts it into an object seperating all the properties like root,dir,name,ext,base 
// It is just the opposite of path.format() 
// let's say we have path of a file/folder and we want to get root,dir,name,ext,base from that path 
// Then we can get that easily by path.parse() 
let file = 'C:\\Desktop\\nodePractice\\pathModule.js'
let obj = path.parse(file)
console.log(obj);
// it will return an object with all the properties in it from the path 
// {
//     root: 'C:\\',
//     dir: 'C:\\Desktop\\nodePractice',
//     base: 'pathModule.js',
//     ext: '.js',
//     name: 'pathModule'
//   }

// path.sep property returns the seperator of path according to the system/OS 
console.log(path.sep)  /* It will return \  */ 
