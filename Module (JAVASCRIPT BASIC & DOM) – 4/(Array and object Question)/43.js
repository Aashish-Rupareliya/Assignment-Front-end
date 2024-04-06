const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Doe', age: 35, city: 'Chicago' }
];

const csv = data.map(obj => Object.values(obj).join(',')).join('\n');
console.log('CSV data:\n', csv);
