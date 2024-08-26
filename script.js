    
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
      return (computerChoice === 'paper') ? 'Computer won!' : 'You won!' ;
    }

    if (userChoice === 'paper') {
      return (computerChoice === 'scissors') ? 'Computer won!' : 'You won!';
    }

    if (userChoice === 'scissors') {
      return (computerChoice === 'rock')  ? 'Computer won!' : 'You won!';
    } 
}
 
// // The game function
// function playGame() {
//     let userChoice = getUserChoice('paper');
//     let computerChoice = getComputerChoice();

//     console.log(userChoice);
//     console.log(computerChoice);

//     console.log(determineWinner(userChoice, computerChoice));
// }

// playGame()


//////////// Listeners //////////////

document.addEventListener('DOMContentLoaded', function() {   // sets an event listener for when the entire HTML document is loaded
    const rock = document.getElementById('rock');            // assigns the HTML element with id 'rock' to the variable 'rock'
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    const images = [rock, paper, scissors];

    images.forEach(image => {
        image.addEventListener('click', () => {
          
          // Fade out the unselected images and center the selected image
          images.forEach(img => {
            if (img !== image) {
              img.classList.add('fade-out');
            } else {
              image.classList.add('center'); 
            }
          });

          // Get the user's choice based on the clicked image's id
          let userChoice = image.id;

          // Get the computer's choice
          let computerChoice = getComputerChoice();
          console.log(`Computer chose: ${computerChoice}`)

          // Update the HTML to display the computer's choice
          let computerChoiceImg = document.getElementById('computer-choice-img');
          computerChoiceImg.src = `images/${computerChoice}.png`;
          computerChoiceImg.alt = `Computer's choice: ${computerChoice}`;
          //document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;

          
          // Determine the game outcome
          

        });
    });
});