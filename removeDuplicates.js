// Write a program to remove duplicates from an array.


// function removeDuplicates(arr){
//     const set =new Set();
//     const result = [];

//     for(let item of arr){
//         if(!set.has(item)){
//             set.add(item);
//             result.push(item);
//         }
//     }
//     return result;
// }

function removeDuplicates(arr) {
  const map = new Map();
  const result = [];

  for (let item of arr) {
    if (!map.has(item)) {
      map.set(item, true);
      result.push(item);
    }
  }

  return result;
}

let arr = [1,2,4,3,4,5,5];
console.log(removeDuplicates(arr));
