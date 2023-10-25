function isPrime(number) {
    if (number <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    if (number <= 3) {
        return true; // 2 and 3 are prime numbers
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false; // Divisible by 2 or 3
    }

    // Check for prime by testing divisors up to the square root of the number
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
    //this is a code for prime number 
}

// Example usage:
console.log(isPrime(17)); // Output: true (17 is a prime number)
console.log(isPrime(4));  // Output: false (4 is not a prime number)
