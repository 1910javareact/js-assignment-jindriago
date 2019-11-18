/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let myObj = {
    name: 'Jose',
    age: 24
}
console.log(myObj);


function myObj2(name, age){
    this.name = name
    this.age = age
}
let person2 = new myObj2('Lisa', 25)
console.log(person2);

class theObject {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
let person3 = new theObject('Morty', 23)
console.log(person3);
