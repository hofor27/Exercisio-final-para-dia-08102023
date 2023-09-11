// Step 1: Read input from the user
const currentQuantity = parseInt(
  prompt("Enter the current quantity in stock:")
);
const maximumQuantity = parseInt(
  prompt("Enter the maximum quantity in stock:")
);
const minimumQuantity = parseInt(
  prompt("Enter the minimum quantity in stock:")
);

// Step 2: Calculate the average quantity
const averageQuantity = (maximumQuantity + minimumQuantity) / 2;

// Step 3: Check if the current quantity is greater than or equal to the average quantity
if (currentQuantity >= averageQuantity) {
  console.log("Do not purchase");
} else {
  console.log("Make purchase");
}
