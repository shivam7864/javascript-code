// Given two strings, find if one string can be formed by rearranging the letters of the other. (Anagram check)
function check(str1,str2){
    let obj={};
    // put char of string in which we have to check presence
    for(let char of str2){
        // obj[char] = (obj[char] || 0)+1
        if(obj[char]){
            obj[char]+=1;
        }else{
            obj[char]=1;
        }
    }

    for(let char of str1){
        if(!obj[char])return false;
        obj[char]--;
    }
    return true;
}

console.log(check("aab","aasssba"));