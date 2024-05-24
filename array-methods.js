const numbers = [1, 2, 3, 4];

/* ------------------ 
forEach 
--------------------- */

function logger(item, index) {
  console.log('item:', item, 'index:', index);
}

numbers.forEach(logger);

// same as above but with Arrow function
numbers.forEach((item, index) => {
  console.log('item:', item, 'index:', index);
});

// for (let index = 0; index < numbers.length; index++) {
//      logger(numbers[index], index

/* ------------------ 
MAP 
--------------------- */
console.log('\nMAP\n');
const mappedNumbers = numbers.map((x) => {
  console.log('Item:', x);
  return x * 2;
});

console.log(mappedNumbers);

/* ------------------ 
Find / FindIndex 
--------------------- */
const foundNumber = numbers.find((item, index) => {
  return item === 3;
});
// will return undefined if not found
console.log('Found!', foundNumber);

const foundIndex = numbers.findIndex((item) => item === 3);
// will return -1 if not found
// if there are multiple, it will just return the 1st time it found it
console.log('Found Index', foundIndex);

let objArr = [
  { name: 'Travis', grade: 'B+' },
  { name: 'Brian', grade: 'A+' },
  { name: 'Eric', grade: 'D' },
];

let found = objArr.find((item) => item.name === 'Travis');
console.log(found.grade);

/* ------------------ 
Filter
--------------------- */
// return numbers that are even
let filteredArray = numbers.filter((num) => num % 2 === 0);
console.log(filteredArray);

/* ------------------ 
Reduce
--------------------- */

/*
accumulator - running total or the answer we are building
current - current item as we loop the array
*/

let answer = numbers.reduce((accumulator, currentItem) => {
  return accumulator + currentItem; // adding to my running total
});

console.log(answer);

let myLetters = 'hello'.split('');

let myLetterObject = myLetters.reduce((acc, cur) => {
  if (!Object.hasOwn(acc, cur)) {
    acc[cur] = 1;
  } else {
    acc[cur] += 1;
  }
  return acc;
}, {});

console.log(myLetterObject);
