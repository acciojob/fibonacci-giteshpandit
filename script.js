function fibonacci(num) {
    // Handle base cases
    if (num === 0) return 0;
    if (num === 1) return 1;
    
    // Initialize the first two Fibonacci numbers
    let a = 0; // F(0)
    let b = 1; // F(1)
    let fib = 0;

    // Compute the Fibonacci numbers iteratively
    for (let i = 2; i <= num; i++) {
        fib = a + b; // F(n) = F(n-1) + F(n-2)
        a = b;      // Update F(n-2) to the previous F(n-1)
        b = fib;    // Update F(n-1) to the current F(n)
    }
    
    return fib;
}

// Example usage
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55


