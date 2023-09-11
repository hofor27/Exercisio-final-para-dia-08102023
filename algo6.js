// Initialize variables
let totalWeight = 0;
let highestHeight = -Infinity;
let lowestHeight = Infinity;
let count = 0;

// Read the initial weight
let weight = parseFloat(prompt("Enter the weight in kilograms (0 to end):"));

// Continue reading and processing data until weight is 0
while (weight !== 0) {
  // Read the height in meters
  const height = parseFloat(prompt("Enter the height in meters:"));

  // Update the total weight
  totalWeight += weight;

  // Update the highest and lowest heights
  if (height > highestHeight) {
    highestHeight = height;
  }
  if (height < lowestHeight) {
    lowestHeight = height;
  }

  // Increment the count of people
  count++;

  // Read the next weight
  weight = parseFloat(prompt("Enter the weight in kilograms (0 to end):"));
}

// Calculate the average weight
const averageWeight = totalWeight / count;

// Display the results
console.log(`Highest Height: ${highestHeight} meters`);
console.log(`Lowest Height: ${lowestHeight} meters`);
console.log(`Average Weight: ${averageWeight.toFixed(2)} kilograms`);
