// Program to check whether a string is a palindrome or not?
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let str="";
    for(let char of s){
        if((char >= 'a' && char <'z') || (char >= '0' && char <='9')){
            str+=char;
        }
    }
    let newStr="";
    // for(let i = str.length-1 ;i>=0;i--)
    for(let i=0;i<str.length;i++){
        newStr = str[i]+newStr;
    }
    console.log(str);
    console.log(newStr);
    return newStr == str;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))