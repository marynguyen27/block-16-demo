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
Array.find 
--------------------- */
