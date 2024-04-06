function fibonacciSeries(limit) {
    let fibSeries = [0, 1];
    for (let i = 2; fibSeries[i - 1] + fibSeries[i - 2] <= limit; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
}

console.log(fibonacciSeries(50)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
