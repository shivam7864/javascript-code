// Find the max count of consecutives by 1s in an array?

function check(arr){
    let sum=0;
    let ans=0;
    for(let item of arr){
        if(item==1){
            sum+=1;
            ans=Math.max(sum,ans);
        }else {
            sum=0;
        }
    }
    return ans
}

let arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(check(arr));
console.log(check([1,2,1,2,1,1,1,1,1]));  // 5
console.log(check([1,1,0,1,1,1,0,1]));    // 3
console.log(check([0,0,0]));              // 0
console.log(check([1,1,1,1]));            // 4
