
// A function to get a user choice
function getUserChoice() {
    let userChoice = prompt("Do you choose rock, paper, or scissors?");
    checkUserChoice(userChoice);
}

// A function to check that the user choice is valid
function checkUserChoice(userInput) {
    userInput = userInput.toLowerCase();
  
    if (['rock', 'scissors', 'paper'].includes(userInput)) {
      return userInput;
    } else {
      console.log('Did not choose rock, paper, or scissors');
    }
  }
  
  
  // A function to get the computer choice
  function getComputerChoice() {
    let computerNum = Math.floor(Math.random() * 3);
  
    if (computerNum === 0) {
      return 'rock';
    } else if (computerNum === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  // function to determine the winner- human or computer?
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Game was a tie!'
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won!';
      } else {
        return 'You won!'
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won!';
      } else {
        return 'You won!'
      }
    }
  } 
 
  // The game function
  function playGame() {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
  
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame()