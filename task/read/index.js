const fs= require("fs");
fs.readFile("../file1.txt", "utf-8",function(err,data1){
    if(err) return console.log(err);
    fs.readFile("../file2.txt", "utf-8", function(err, data2){
        if(err) return console.log("error in second file");
        fs.writeFile("./result.txt", data1+"\n"+ data2, function(err){
            if(err) console.log(err);
                console.log("done");
        })
    })
})

// fs.readFile("../file2.txt", "utf-8",function(err,data){
//     if(err) return console.log(err);
//     console.log(data);
// })
console.log(process.argv);// terminal ka input process.argv se read hota hai process.argv ek array hai jiske andar terminal ke input aate hai

