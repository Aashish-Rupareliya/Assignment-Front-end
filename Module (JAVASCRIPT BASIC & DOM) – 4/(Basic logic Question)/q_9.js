var today = new Date();
var christmas = new Date(today.getFullYear(), 11, 25); // December 25th
if (today.getMonth() === 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
}
var oneDay = 1000 * 60 * 60 * 24;
var daysLeft = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);
console.log('Days left until next Christmas:', daysLeft);
