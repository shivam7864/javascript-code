
function countChar (str){
    let count = {};
    // str = str.toLowerCase();
    for(let char of str){
        if(char === ' ')continue;
        count[char] = (count[char] || 0) +1;
    }
    return count;
}
let str = "My name is Shivam Tiwari";
console.log(countChar(str));
