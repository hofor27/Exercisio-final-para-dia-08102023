// Initialize arrays to store data
const genders = [];
const heights = [];

// Variables for calculations
let highestHeight = -Infinity;
let totalHeightWomen = 0;
let numMen = 0;
let shortestHeightMen = Infinity;

// Read and store data until height is zero
while (true) {
  // Read gender and convert to uppercase for consistency
  const gender = prompt("Enter gender (M or F):").toUpperCase();

  // Exit the loop if height is zero
  const height = parseFloat(prompt("Enter height in meters (0 to end):"));
  if (height === 0) {
    break;
  }

  // Store gender and height
  genders.push(gender);
  heights.push(height);

  // Calculate highest reported height
  if (height > highestHeight) {
    highestHeight = height;
  }

  // Calculate average height of women
  if (gender === "F") {
    totalHeightWomen += height;
  }

  // Count the number of men and find the shortest height among men
  if (gender === "M") {
    numMen++;
    if (height < shortestHeightMen) {
      shortestHeightMen = height;
    }
  }
}

// Calculate the average height of women
const averageHeightWomen =
  totalHeightWomen / genders.filter((g) => g === "F").length;

// Display the results
console.log(`Highest Height: ${highestHeight} meters`);
console.log(`Average Height of Women: ${averageHeightWomen.toFixed(2)} meters`);
console.log(`Number of Men: ${numMen}`);
console.log(`Shortest Height Among Men: ${shortestHeightMen} meters`);
