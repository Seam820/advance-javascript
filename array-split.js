const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const part = nums.slice(2, 6);

const part = nums.splice(2,4, 10);
// console.log(part); 
// console.log(nums);

const together = nums.join(" ami ");
console.log(together);