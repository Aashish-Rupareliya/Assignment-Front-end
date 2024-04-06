function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const sentence = 'javascript is awesome';
console.log(capitalizeFirstLetter(sentence)); // Output: Javascript is awesome
