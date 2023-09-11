// Step 1: Read input from the user
const numCarsSold = parseInt(prompt("Enter the number of cars sold:"));
const totalSalesValue = parseFloat(prompt("Enter the total value of sales:"));
const fixedSalary = parseFloat(prompt("Enter the fixed salary:"));
const commissionPerCar = parseFloat(
  prompt("Enter the commission per car sold:")
);

// Step 2: Calculate the commission based on 5% of total sales value
const commissionFromSales = totalSalesValue * 0.05;

// Step 3: Calculate the total earnings from car sales (commission per car * number of cars sold)
const earningsFromCarSales = commissionPerCar * numCarsSold;

// Step 4: Calculate the final salary by adding fixed salary, earnings from car sales, and commission from total sales
const finalSalary = fixedSalary + earningsFromCarSales + commissionFromSales;

// Step 5: Display the final salary
console.log(`The salesperson's final salary is: $${finalSalary.toFixed(2)}`);
