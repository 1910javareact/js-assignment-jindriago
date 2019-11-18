/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    //holds the new string
    let newString = "";

    //for loop to iterate through, starting out with last
    //the last chracter of the string
    for (let i = someStr.length - 1; i >= 0; i--) {
        newString += someStr[i];
    }
    return newString;
} console.log(reverseStr("Hello"));