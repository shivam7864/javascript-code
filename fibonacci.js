function fibonacci(n) {
  if (n == 0) return 0;
  let dp = Array.from(n);
  dp[0] = 0;
  if (n == 1) return dp[0];
  dp[1] = 1;
  if (n == 2) {
    return dp[1];
  }
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp;
}

let n = 10;
console.log(fibonacci(n));
