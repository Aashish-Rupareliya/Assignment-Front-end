function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

console.log(reverseNumber(64728)); // Output: 82746
