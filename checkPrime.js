function checkPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function generatePrime(n) {
  const primes = [];
  let num = 2;

  while (primes.length != n) {
    if (checkPrime(num)) primes.push(num);
    num++;
  }
  return primes;
}

let n = 100000;
console.log(checkPrime(n));
console.log(generatePrime(10));
