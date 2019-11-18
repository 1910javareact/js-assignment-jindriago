/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {

    //this prints out the property name and the values
    for(let prop in someObj){
        console.log(`Property = ${prop}, and it's value = ${someObj[prop]}`);
    }
}
let myObj = {
    firstN: 'John',
    lastN: 'Doe',
    age: 25
    }
objectProperties(myObj);