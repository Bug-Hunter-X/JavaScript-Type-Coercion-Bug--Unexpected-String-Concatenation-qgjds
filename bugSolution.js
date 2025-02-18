function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: Error: Inputs must be numbers
console.log(foo(1, 2));   // Output: 3

//Alternative solution: using parseInt
function foo2(a,b){
  return parseInt(a) + parseInt(b);
}
console.log(foo2(1,'2')); //Output: 3