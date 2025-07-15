let users= [
    {
        id: 1,
        name: "Srishti",
        age: 21
    },
    {
        id:2,
        name:"Ritik",
        age: 10
    }
]
function isAllowed(id){
    return new Promise((resolve,reject)=>{
         let user= users.filter((u)=>{
        return u.id ==id
    })[0]
    console.log(user);
    if(!user) return reject("No user found");
  if(user.age<18) return reject("Not eligible to vote");
  return resolve("Eligible to vote");
})
    //find the user with id then check the age>18
    //    for (let i = 0; i < users.length; i++) {
    //     if (users[i].id === id) {
    //         return users[i].age > 18;
    //     }
    // }
    // return false; 
    //filter returns a new array
   
  
}
isAllowed(1).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
console.log("start");
console.log("sum 2 numbers");
//console.log(isAllowed(1));
//console.log(isAllowed(2));
