/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
  if(isNaN(n)){
    throw "Try again, this time with something thats actually a number"
}
if(n < 0){
    throw new Error('N must be greater than 0')
}
if(n === Infinity){
    throw false
}
//this is a base case
if(n === 0){
    return 0
}
//also a base case
if(n === 1){
    return 1
}
return fib(n-1) + fib(n-2)
} console.log(fib(10));

       