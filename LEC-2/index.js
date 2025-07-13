const Module = require("module")

/*module is a piece of code which is reusable , it is encapsulated from other modules. module has its own scope.*/
function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
//module.exports={
  //  sum,sub
//}
//yeh jo uppar module ko export karne ka tarika hai but yeh na use kara kare nich vala istemal kare!!
module.exports.sum=sum;
module.exports.sub=sub;
//node js by default commonJs use karta hai module export karne ke liye  aur doosra method haiii 
// ES Module mai do types ke export hote hai default export aur named export