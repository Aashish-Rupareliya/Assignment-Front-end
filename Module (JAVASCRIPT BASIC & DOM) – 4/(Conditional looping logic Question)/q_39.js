function isPalindrome(number) {
    const originalNumber = number;
    let reversedNumber = 0;
    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }
    return originalNumber === reversedNumber;
}

let count = 1;
while (count <= 3) {
    const inputNumber = parseInt(prompt('Enter a number:'));
    if (isPalindrome(inputNumber)) {
        console.log(inputNumber, 'is a palindrome.');
    } else {
        console.log(inputNumber, 'is not a palindrome.');
    }
    count++;
}
