const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const outputs = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const squared = element * element;
//     console.log(squared);
//     outputs.push(squared);
// }
// function square (element){
//     return element * element ;
// }
// const result = numbers.map(function(element){
//     return element * element ;
// })
 const result = numbers.map(x => x * x);

const bigger = numbers.filter(x => x >5);

const isThere = numbers.find(x => x >5);

console.log(isThere);