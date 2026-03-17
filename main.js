const arr = ["0", "1", "22", "333", "4444", "55555", "44.22"];
arr.forEach((num) => {
  num.startsWith("2") || num.startsWith("4") ? console.log(num) : null;
});

function isPrime(n = 100) {
  for (let i = 2; i <= n; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) prime = false;
    }
    if (prime) {
      console.log(`divisors of ${i}: 1 and ${i}`);

    }
  }
}

isPrime(100);
