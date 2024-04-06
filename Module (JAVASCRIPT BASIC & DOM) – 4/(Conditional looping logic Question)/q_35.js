function digitSum(number) {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

console.log(digitSum(1523)); // Output: 11 (1 + 5 + 2 + 3)
