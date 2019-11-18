/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {

    //makes the job easier using the spread operator to copy from old array to new
    let newArray = [...someArr]


    for (let i = index; i < someArr.length; i++) {
        newArray[i] = someArr[i +1]
    }

    //this will help in removing the last element, if i don't use it
    //then i will get undefined in my last number
    newArray.pop()
    return newArray
}
console.log(spliceElement([2,3,9,11], 3));

