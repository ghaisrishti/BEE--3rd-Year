const fs= require("fs");
fs.writeFile("../file1.txt","Hii guys, content of file 1", function (err, data){
if(err) return console.log(err);
console.log(data);
console.log("success!!1")
})
fs.writeFile("../file2.txt","Hii guys, content of file 2", function (err, data){
if(err) return console.log(err);
console.log(data);
console.log("success!!1")
})
