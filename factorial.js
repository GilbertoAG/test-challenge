// 3. Calculate the factorial of a number using recursion

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }

    
}

module.exports = factorial;