/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    
    //holds the number passed it for easier readability
  let num = someNum;
    //holds the number we use to divide, a const because we don't want to change it
  const division = 2;

    //checks to see if the number we are dividing is divisible by 2
  if (Number.isInteger(num/division)) {
    return true;
  } else return false

} console.log(isEven(4));
