// Initialize variables
const numStudents = parseInt(prompt("Enter the number of students:"));
const gradesMatrix = [];

let passedCount = 0;
let failedCount = 0;

// Read grades and calculate averages
for (let student = 1; student <= numStudents; student++) {
  const grades = [];
  let totalScore = 0;

  for (let i = 1; i <= 4; i++) {
    const grade = parseFloat(
      prompt(`Enter grade ${i} for Student ${student} (0 to 10):`)
    );

    // Validate the grade to be between 0 and 10
    if (grade < 0 || grade > 10 || isNaN(grade)) {
      console.log(
        `Invalid grade entered for Student ${student}. Please enter a grade between 0 and 10.`
      );
      i--; // Decrement i to re-enter the invalid grade
      continue;
    }

    grades.push(grade);
    totalScore += grade;
  }

  const average = totalScore / 4;
  gradesMatrix.push({ student, average });

  // Check if the student passed or failed
  if (average >= 6) {
    console.log(
      `Student ${student} passed with an average of ${average.toFixed(2)}`
    );
    passedCount++;
  } else {
    console.log(
      `Student ${student} failed with an average of ${average.toFixed(2)}`
    );
    failedCount++;
  }
}

// Calculate the percentage of students who passed
const passingPercentage = (passedCount / numStudents) * 100;

// Display the summary
console.log(`\nSummary:`);
console.log(`Number of Students Passed: ${passedCount}`);
console.log(`Number of Students Failed: ${failedCount}`);
console.log(`Percentage of Students Passed: ${passingPercentage.toFixed(2)}%`);
