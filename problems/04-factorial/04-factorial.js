/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  
    if(0 === sumNum){
        return sumNum;
    }
    if(1 === sumNum){
        return sumNum;
    }
    return sumNum * factorial(sumNum-1);
}   console.log(factorial(3));
