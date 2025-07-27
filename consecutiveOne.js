// Find the max count of consecutives by 1s in an array?

function check(arr){
    let sum=0;
    for(let item of arr){
        if(item==1){
            sum+=1;
        }else sum=0;
    }
    return sum
}

let arr = [1,2,1,2,1,1,1,1,1];
console.log(check(arr));