// Write a func to find max number in an array

function maxNumber(arr){
    let ans=-9999;
    for(let item of arr){
        if(item>ans)ans=item;
    }
    return ans;
}

let arr = [1,9,4,5,2,6,7,9];
console.log(maxNumber(arr));
