// function factorial (n){
//     if(n==0 || n==1)return 1;
//     return n*factorial(n-1);
// }

function factorial (n){
    if(n==0 || n==1)return 1;
    let ans=1;
    for(let i=2;i<=n;i++){
        ans*=i;
    }
    return ans;
}

let n = 10;
console.log(factorial(n));
