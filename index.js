function speedDetector(speed) {
  const speedLimit = 70;
  let demeritPoints = 0;

  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    demeritPoints = Math.floor((speed - speedLimit) / 5);
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("Points:", demeritPoints);
    }
  }
}

// Test the function with different speeds
speedDetector(80);  // Output: Points: 2
speedDetector(72);  // Output: Points: 0
speedDetector(150); // Output: License suspended
