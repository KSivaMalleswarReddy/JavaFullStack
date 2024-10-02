// for (let i=0;i<=5;i++){
//   console.log(i);
// }

// let i=0;
// while (i<5) {
//   console.log(i);
//   i++;
// }

// let i=0;
// do{
//   console.log(i);
//   i++; 
// }while(i<5);

// for in loop
// let person = {name :"john",age:20,city:"HYD"};
// for(let key in person){
//   console.log(key + ":" + person[key])
// }


// for of loop
// let arr =[10,20,30]
// for(let value of arr){
//   console.log(value)
// }

// switchCase
// let a=2+4;
// switch(a){
//     case 3:
//         console.log("to Small")
//         break;
//     case 4:
//         console.log("Exactly")
//         break;
//     case 5:
//         console.log("to Big")   
//         break;
//     default:
//         console.log("I don't konwn those values")
// }

// let a = "2"
// let b = "2"

// function add(a,b){
//   return a+b
// }
// let ans = add(a,b)
// console.log(ans)


// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
//   };
  
//   console.log(car.brand);  // "Toyota"
//   console.log(car.model);  // "Corolla"
//   console.log(car.year);   // 2020
// let clone ={};

// for (let key in user);
// clone[key] =user[key];
// clone.name ="nagesh";

// alert( user.name);

// let user ={
//     name:"mallesh",
//     age:22 
// };

// let clone = Object.assign({}.user)

// alert(clone.name);
// alert(clone.age);

// let student = {
//     name: "John",
//     age: 21,
//     grade: "A"
//   };
  
//   for (let key in student) {
//     console.log(`${key}: ${student[key]}`);
//   }

//   let person = {};

// person.firstName = "Alice"; // Add property firstName
// person.lastName = "Smith";  // Add property lastName
// person.age = 25;            // Add property age

// delete person.age;          // Delete age property

// console.log(person);

// rest parameters

// function sumAll(...args){
//     let sum =0;
//     for (let arg of args) sum +=arg;
//     return sum;
// }
// console.log(sumAll(1));
// console.log(sumAll(1,2));
// console.log(sumAll(1,2,3));

// function outerfunction(){
//     let counter = 0;
//     function innerfunction(){
//         counter += 1
//         return counter
//     }
//     return innerfunction
// }
// let incrementCounter = outerfunction()

// console.log(incrementCounter())
// console.log(incrementCounter())
// console.log(incrementCounter())

// let animal ={
//     eats:"Yes 1 Eats",
//     walk(){
//       console.log("Yes I Can Walk")
//     }
// };

// let rabbit ={
//     jumps:true,
//     _proto_:animal
// };
// let longEar = {
//     earHeight :21,
//     _proto_:rabbit
// }
// rabbit.walk()

// console.log(longEar.earHeight)

// console.log(longEar.jumps)

/*var employee1 = {firstName:"john",lastName:"Rosdson"};
var employee2 = {firstName:"limmy",lastName:"Bally"};

function invite(first ,second){
    console.log(first + this.firstName+this.lastName + second)
}

invite.call(employee1,"Hello","how are you?")

invite.apply(employee2 ,["hello","how are you?"])
let inviteFunction = invite.bind(employee1,"Hello","how are you?")
inviteFunction() */


let val = setInterval(settime,3000);
function settime(){
    console.log("hello evry 3 secs");

}

setInterval(val);

// rest parameter

function sumAll(...args){
    let mul =1;
    for (let arg of args){
         mul *= arg;
    }
    return mul;
}

console.log(sumAll(1,2,3));

// spread operator
let user={
    name:"Mallesh",
    age:"22",
    weight:63
};

let fun=(...val)=>{
    for (let  key of val){
        console.log(key);
    }
};

fun(user);

function outerFunction(){
    let outer = "i am outside"
    function innerFunction(){
        console.log("i am inside");
    }
    return innerFunction;
}
// outerFunction();
// console.log(outerFunction());
const inner = outerFunction(); 
inner();

// prototype

let games={
    type:"cricket",
    display(){
        console.log("11 members playing");
    }
};

let animi={
    favourite:"football",
    __proto__:games
};
animi.display()
console.log(animi.favourite);

// invite apply bind

function obj(greeting,ques){
    console.log(greeting+" Mallesh "+ ques);
}

obj.call(obj,"hello","call ")

obj.apply(obj,["hello","apply "])   

let why=obj.bind(obj,"hello ","bind")
why()