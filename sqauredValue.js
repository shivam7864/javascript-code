// The function should return true if every value in arr1 has its corresponding value squared in arr2. The frequency must be same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let freq1 = {};
  let freq2 = {};

  for (let elem of arr1) {
    freq1[elem] = (freq1[elem] || 0) + 1;
  }

  for (let elem of arr2) {
    freq2[elem] = (freq2[elem] || 0) + 1;
  }

  for (let key in freq1) {
    // key **2;
    let squared = key * key;
    if (!freq2[squared]) return false;
    if (freq1[key] !== freq2[squared]) return false;
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 2, 3], [1, 4, 4])); // false
console.log(same([2, 2, 3], [4, 4, 9])); // true
console.log(same([2, 2, 3], [4, 9]));
