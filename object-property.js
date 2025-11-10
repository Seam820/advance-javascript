const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 23 },
];
const names = students.map(student => student.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

const ages = students.filter(student => student.age > 21);
console.log(ages); // [{ id: 2, name: 'Bob', age: 22 }, { id: 3, name: 'Charlie', age: 23 }]

const charlie = students.find(student => student.name === 'Charlie');
console.log(charlie); // { id: 3, name: 'Charlie', age: 23 }