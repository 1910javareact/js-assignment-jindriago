/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    if(typeof(someStr) !== "string"){
        throw `Input was incorrect, please enter a string`
    }

    if(isNaN(startIndex)){
        throw `Input is incorrect, please enter a number`;
    }

    if(isNaN(endIndex)){
        throw `Input is incorect, please enter a number`
    }

    if(startIndex > endIndex){
        throw `Input is incorrect, the Start Index is greater than the End Index`
    }

    //holds the ouput
    let newStr= ""

    for(let i = startIndex; i < endIndex; i++){
        newStr += someStr.charAt(i)
}   return newStr
} console.log(substring("hello", 0, 3));
