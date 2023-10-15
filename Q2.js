// Function to generate a random number after a specified delay
function generateRandomNumberWithDelay(delay) {
    // Display countdown messages every second
    for (let remainingTime = delay; remainingTime > 0; remainingTime--) {
      console.log(`Time remaining: ${remainingTime} second(s)`);
      await sleep(1000); // Wait for 1 second
    }
  
    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 100); // You can adjust the range as needed
  
    // Display the generated number
    console.log(`Random number generated: ${randomNumber}`);
  }
  
  // Function to create a delay using Promises
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Specify the delay in seconds (e.g., 3 seconds)
  const delayInSeconds = 3;
  
  // Call the function with the specified delay
  generateRandomNumberWithDelay(delayInSeconds);
  