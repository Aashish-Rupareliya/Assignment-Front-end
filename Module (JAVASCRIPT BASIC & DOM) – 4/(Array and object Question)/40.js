const today = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = daysOfWeek[today.getDay()];
let hour = today.getHours();
const ampm = hour >= 12 ? 'PM' : 'AM';
hour = hour % 12 || 12;
const minutes = today.getMinutes();
const seconds = today.getSeconds();

console.log(`Today is ${day}. Current Time is ${hour} ${ampm}: ${minutes} : ${seconds}`);
