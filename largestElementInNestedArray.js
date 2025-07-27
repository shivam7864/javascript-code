// Write a JavaScript program to find the largest element in a nested array.
function findLargest(arr){
    let ans = -99999;
    for(let array of arr){
        for(let elem of array){
            if(elem > ans){
                ans= elem;
            }
        }
    }
    return ans;
}

let arr = [[1, 3, 5], [8, 9, 10], [11, 11, 2]];
console.log(findLargest(arr));