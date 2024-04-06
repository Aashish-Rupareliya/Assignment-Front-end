const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const currentDate1 = mm + '-' + dd + '-' + yyyy;
const currentDate2 = mm + '/' + dd + '/' + yyyy;
const currentDate3 = dd + '-' + mm + '-' + yyyy;
const currentDate4 = dd + '/' + mm + '/' + yyyy;

console.log('Current date formats:');
console.log(currentDate1);
console.log(currentDate2);
console.log(currentDate3);
console.log(currentDate4);
