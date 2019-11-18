/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {

    //this helps to filter unwanted characters
    let tempStr = /[\W_]/g;


    //this make the string all lowercase and remove unwated characters
    //so for example: 
    //(" racecar, racecar") after using  .replace(/[\W_]/g, '') is now: racecarracecar
    let lowerStr = someStr.toLowerCase().replace(tempStr, '');

    //used the built in functions and chained them together
    let reverseStr = lowerStr.split('').reverse().join(''); 
    return reverseStr === lowerStr;
} console.log(isPalindrome("Racecar"));
  
