// Step 1: Read the pollution index from the user
const pollutionIndex = parseFloat(
  prompt("Enter the measured pollution index:")
);

// Step 2: Define the thresholds for different notifications
const thresholdGroup1 = 0.3;
const thresholdGroup2 = 0.4;
const thresholdAllGroups = 0.5;

// Step 3: Check and issue notifications based on the pollution index
if (pollutionIndex >= thresholdAllGroups) {
  console.log("All groups of industries must stop their activities.");
} else if (pollutionIndex >= thresholdGroup2) {
  console.log(
    "Industries in the 1st and 2nd groups must stop their activities."
  );
} else if (pollutionIndex >= thresholdGroup1) {
  console.log("Industries in the 1st group must stop their activities.");
} else {
  console.log(
    "Pollution index is within acceptable limits. No action required."
  );
}
