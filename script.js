function fibonacci(num) {
    // Handle base cases
    if (num === 0) return 0;
    if (num === 1) return 1;
    
    // Initialize the first two Fibonacci numbers
    let a = 0; // F(0)
    let b = 1; // F(1)
    
    // Compute the Fibonacci numbers iteratively
    for (let i = 2; i <= num; i++) {
        let next = a + b; // Compute the next Fibonacci number
        a = b;           // Update 'a' to the previous 'b'
        b = next;        // Update 'b' to the newly computed Fibonacci number
    }
    
    return b; // Return the nth Fibonacci number
}

// Example usage
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(50)); // Output: 12586269025
