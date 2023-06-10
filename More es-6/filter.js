const numbers = [12, 89, 65, 45];
const bigNums = numbers.filter(number => number>20);
const tiny = numbers.filter(number => number<20);
const even = numbers.filter(num => num %2 === 0);
console.log(even);
console.log(bigNums);
console.log(tiny);