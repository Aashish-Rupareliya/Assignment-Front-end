function isVowel(char) {
    var vowels = 'aeiouAEIOU';
    return vowels.includes(char);
}

console.log(isVowel('a')); // Output: true
