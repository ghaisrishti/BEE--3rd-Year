const fs= require("fs");
const start= Date.now()
console.log("start");
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("set Immediate callback")
})
function dosometask(){
    return new Promise((resolve,reject)=>{
        resolve("promise chala")
    })
}
fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2");
    },0)
    setImmediate(()=>{
        console.log("immd 2");
    })
});
console.log("end");
dosometask().then((res)=>{
    console.log(res)
})
.catch((err)=>{
console.log(err)
})
process.nextTick(()=>{
    console.log("next tick")
})
/* process.nextTick() padh le
thread pool ka default size 4 aur isko hum badha kar 128 tak kar sakte haii , badhane ke liye process.UV_THREADPOOL_SIZE=10
Threadpool par cpu extensive task hota haii*/