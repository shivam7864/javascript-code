// Write a JavaScript function that sorts an array of numbers in descending order. and viceversa

function bubbleSortAscending(arr) {
  let a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

function bubbleSortDescending(arr) {
  let a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] < a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

const arr = [4, 1, 9, 2, 7];

console.log("Ascending:", bubbleSortAscending([...arr]));   // [1, 2, 4, 7, 9]
console.log("Descending:", bubbleSortDescending([...arr]));