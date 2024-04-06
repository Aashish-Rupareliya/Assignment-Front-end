if (typeof '10' !== typeof 10) {
    console.log('Not equal, converting...');
    var convertedNum = parseInt('10');
    console.log('Converted:', convertedNum);
} else {
    console.log('Equal');
}
