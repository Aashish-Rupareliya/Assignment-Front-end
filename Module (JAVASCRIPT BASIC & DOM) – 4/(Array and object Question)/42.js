const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'Jane', age: 25 };

const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log('Objects are equal:', isEqual);
