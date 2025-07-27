// Program to find Reverse of a string without using built-in method?

let str = "My name is shivam";

function reverse(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  return newStr;
}

console.log(reverse(str));

function reverseWord(str) {
  let ans = "";
  let res = "";
  for (let char of str) {
    if (char == " ") {
      ans += reverse(res);
      ans += " ";
      res = "";
    } else {
      res += char;
    }
  }
  ans += reverse(res);
  return ans;
}

function reverseWordInString(str) {
  let ans = "";
  let res = "";
  for (let char of str) {
    if (char == " ") {
      res += " " 
      ans = res + ans;
      res = "";
    } else {
      res += char;
    }
  }
  res+= " "
  ans = res + ans;
  return ans;
}

console.log(reverseWord(str));
console.log(reverseWordInString(str));
