const numbers = [12, 89, 65, 45];
const half = numbers.map(n => n/2);
const third = numbers.map(n => n/3);
// console.log(half);
// console.log(third);

const firends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstletter = firends.map(friend => friend[0]);
console.log(firstletter);
const namelength = firends.map(friend => friend.length);
console.log(namelength);