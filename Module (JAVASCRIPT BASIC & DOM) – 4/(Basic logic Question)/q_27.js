function findMinNumber(a, b, c) {
    var min = (a < b) ? (a < c ? a : c) : (b < c ? b : c);
    return min;
}

console.log(findMinNumber(10, 5, 8)); // Output: 5
