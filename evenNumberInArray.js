// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function evenNumber(arr) {
  let result = [];
  for (let item of arr) {
    if (item % 2 == 0) result.push(item);
  }
  return result;

  //using filter
//   return arr.filter((elem)=>elem%2==0)
}
let arr = [1, 9, 4, 5, 2, 6, 7, 9];
console.log(evenNumber(arr));
