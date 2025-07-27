// Program to find the longest word in a given sentence

function longestWord(str) {
  let ans = "";
  let res = "";
  for (let char of str) {
    if (char == " " || char == "." || char == ",") {
      if (res.length > ans.length) {
        ans = res;
      }
      res = "";
    } else {
      res += char;
    }
  }
  if (res.length > ans.length) {
    ans = res;
  }
  return ans;
}

let str = "My name is, Shivam Tiwari. I live in Prayagraj";
console.log(longestWord(str));
