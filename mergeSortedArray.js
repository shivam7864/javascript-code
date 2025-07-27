// Given 2 arrays that are sorted, e.g., [0,3,4,31] and [4,6,30], merge and sort them: [0,3,4,4,6,30,31].

function mergeArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  let ans = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      ans.push(arr2[j]);
      j++;
    } else {
      ans.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    ans.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    ans.push(arr2[j]);
    j++;
  }

  return ans;
}

let arr1 = [0, 2, 4, 5, 6, 7];
let arr2 = [1, 3, 8, 9, 10];
console.log(mergeArrays(arr1, arr2));
