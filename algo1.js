// Step 1: Read the factory cost of the car from the user
const factoryCost = parseFloat(prompt("Enter the factory cost of the car:"));

// Step 2: Define the distributor's percentage and taxes rate
const distributorPercentage = 0.28; // 28%
const taxesRate = 0.45; // 45%

// Step 3: Calculate the distributor's cost (28% of factory cost)
const distributorCost = factoryCost * distributorPercentage;

// Step 4: Calculate the taxes (45% of factory cost)
const taxes = factoryCost * taxesRate;

// Step 5: Calculate the final cost to the consumer (factory cost + distributor cost + taxes)
const finalCost = factoryCost + distributorCost + taxes;

// Step 6: Display the final cost to the consumer
console.log(`The final cost to the consumer is: $${finalCost.toFixed(2)}`);
