const obj  ={
    name:"anurag",
    surname:"sharma"
}
console.log(obj.name);
console.log(obj["name"]);

/* change the ojbject */
obj.name = "anveshika";
console.log(obj.name);

/* adding a function */
obj.surname = function(){
    console.log("greetings")
}
console.log(obj.name);
console.log(obj.surname());


 /* nested objects */
 const obj2 = {
    bike:"zx10r",
    car:{
        name:"accord",
        brand:"honda"
    }
 }
 console.log(obj2.car.name)
/* to join two objects */
const a = {...obj,...obj2};
console.log(a);

/* choose the value from the array of objects*/
const datafromdatabase = [
    {
        name:"anurag",
        surname:"sharma"
    },
    {
        name2:"anvi",
        surname:"singh"
    }
]
console.log(datafromdatabase[0].name);














