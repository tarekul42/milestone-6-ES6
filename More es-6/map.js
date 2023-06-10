const numbers= [2, 8, 4, 6, 3];
function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const doubled = doubleIt(number);
        output.push(doubled);
    }  
    return output;
}

// function doubleIt(number){
//     return number * 2;
// }

const doubleIt = num => num*2;

const result = getDoubles(numbers);
console.log(result);



 