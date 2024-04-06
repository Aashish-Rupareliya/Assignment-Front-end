function firstLastDigitSum(number) {
    let lastDigit = number % 10;
    while (number >= 10) {
        number = Math.floor(number / 10);
    }
    return lastDigit + number;
}

console.log(firstLastDigitSum(1234)); // Output: 5 (1 + 4)
