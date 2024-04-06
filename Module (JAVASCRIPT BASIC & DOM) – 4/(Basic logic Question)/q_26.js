function findMaxNumber(a, b, c) {
    var max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
    return max;
}

console.log(findMaxNumber(10, 5, 8)); // Output: 10
