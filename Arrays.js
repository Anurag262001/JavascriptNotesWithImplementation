/* 
() paranthesis
[] square brackets
{} curly braces

*/

/* let arr = [0,1,2,3,4,5];
console.log(arr);
 */
/* slice */ /* don't change the original array */
/* const newarr  = arr.slice(1,3)
console.log(newarr);
console.log(arr);
 */
/* splice */ /* chnage the original array too */
/* const newarr2  = arr.splice(1,3)
console.log(newarr);
console.log(arr); */

/* array method  push a value into an array
   arr.push(4) 
   
*/


/* 
What is the spread operator in Express?
The spread operator helps the iterable objects to expand into individual elements. Iterable objects are those on which we can use a loop, for example, Array, Map, Set, etc
*/


const arr1 = [1,2,3,4,55,6,7,88,3];
const arr2 = [10,20,309,40,60,5780];
const merge = arr1.concat(arr2);
console.log(merge)
console.log(...arr1,...arr2)
console.log(arr1+arr2);