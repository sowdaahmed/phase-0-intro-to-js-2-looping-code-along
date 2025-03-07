// Function to create thank-you messages
function writeCards(names, occasion) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages;
  }
  
  // Function to count down from a given number to zero
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Export the functions so tests can find them
  module.exports = { writeCards, countDown };
  
