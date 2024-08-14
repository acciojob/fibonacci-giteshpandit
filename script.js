function fibonacci(num) {
    if (num === 0) return 0; // The 0th Fibonacci number is 0
    if (num === 1) return 1; // The 1st Fibonacci number is 1

    let a = 0; // F(0)
    let b = 1; // F(1)
    
    // Use a loop to compute the Fibonacci number at position 'num'
    for (let i = 2; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}

module.exports = fibonacci;


