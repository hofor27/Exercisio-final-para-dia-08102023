// Initialize a variable to keep track of whether to continue or not
let continueCalculations = true;

// Create a loop to continue until the teacher decides to stop
while (continueCalculations) {
  // Initialize variables to store grades
  let firstGrade, secondGrade;

  // Read and validate the first grade
  do {
    firstGrade = parseFloat(
      prompt("Enter the 1st assessment grade (0 to 10):")
    );
  } while (isNaN(firstGrade) || firstGrade < 0 || firstGrade > 10);

  // Read and validate the second grade
  do {
    secondGrade = parseFloat(
      prompt("Enter the 2nd assessment grade (0 to 10):")
    );
  } while (isNaN(secondGrade) || secondGrade < 0 || secondGrade > 10);

  // Calculate the simple average
  const average = (firstGrade + secondGrade) / 2;

  // Display the average for the current student
  console.log(`The average grade for this student is: ${average.toFixed(2)}`);

  // Ask if the teacher wants to continue
  const response = prompt(
    "Do you want to calculate the average for another student? (YES/NO)"
  ).toUpperCase();
  if (response !== "YES") {
    continueCalculations = false;
  }
}

console.log("Thank you for using the grade calculation tool.");
