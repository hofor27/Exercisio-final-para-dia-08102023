// Initialize an array to store the numbers
const numbers = [];

// Read five integers and store them in the array
for (let i = 0; i < 5; i++) {
  const num = parseInt(prompt(`Enter integer #${i + 1}:`));
  numbers.push(num);
}

// Find the largest and smallest numbers
let largest = numbers[0];
let smallest = numbers[0];
let sum = 0;

for (const num of numbers) {
  // Find the largest number
  if (num > largest) {
    largest = num;
  }

  // Find the smallest number
  if (num < smallest) {
    smallest = num;
  }

  // Calculate the sum
  sum += num;
}

// Display the results
console.log(`Largest number: ${largest}`);
console.log(`Smallest number: ${smallest}`);
console.log(`Sum of numbers: ${sum}`);
