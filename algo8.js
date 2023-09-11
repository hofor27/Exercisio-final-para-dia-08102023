// Initialize an array to store the names
const names = [];

// Read and store the names of 10 people
for (let i = 1; i <= 10; i++) {
  const name = prompt(`Enter name #${i}:`);
  names.push(name);
}

// Read the name to search for
const searchName = prompt("Enter a name to search for:");

// Check if the searchName is among the stored names
let found = false;
for (const name of names) {
  if (name === searchName) {
    found = true;
    break; // Exit the loop as soon as a match is found
  }
}

// Display the result
if (found) {
  console.log("I FOUND IT");
} else {
  console.log("I DIDN'T FIND IT");
}
