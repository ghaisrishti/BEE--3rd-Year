
const fs= require("fs");
console.log(fs);
console.log("hii");
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function multiply(a,b){
    return a*b;
}
fs.readFile("demo.txt","utf-8", (data)=>{
console.log(data)
})
add(2,3);
sub(5,6);
multiply(3,2);
console.log("exit")
/*process - set of tasks 
uss process mai jitne task hai voh thread par run hote hai
Node js is single thread and single thread language is by nature synchronous , 
toh fir time consuming task(Non-blocking I/O) ko karta kaise hai node js???
Node js mai 2 component hai
v8 engine(jo ki c++, js mai codded hai) hota hai
Lib-uv (Library hoti hai c++ mai codded) isme do program bane hue hai eventloop aur thread pool
node node.js likhne ke baad stack mai yeh sab hoga -
sabse pehle project initialize hoga fir jo bhi module require kiye hai voh ho jaenge fir saare top level(jo globally likhe hai - function mai nahi) code chalenge, fir call back register hoga fir event loop start ho jatio haiii
ab thread pool cpu intensive work karvane ke liye use hota hai, fs module ke kaam(T/O Kaam), crypto, dns ka kaam.
ab event loop saare kaam ko delegate kar deta hai thread pool par taaki parallely execute ho sakn........ in which order callback will be executed will be decided by eventloop 
event loop is order mai callback chalayega- 
1. expired timer - set timeout
2. I/O polling - fs,request
3. setimmediate
4. close callback
uske baad check karta hai ki koi pending callback haii - agar ni bacha program end , agar bacha hai firse event loop chalega shuru se. 
*/
