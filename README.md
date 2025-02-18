# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion.  The `foo` function is intended to add two numbers, but due to JavaScript's loose typing, it concatenates strings instead when one of the arguments is a string. This can lead to unexpected results in calculations. The solution shows how to address this issue using explicit type checking or conversion.

## Bug
The `bug.js` file contains the buggy code.

## Solution
The `bugSolution.js` file contains corrected code that uses `parseInt` to ensure both operands are numbers before performing addition. 