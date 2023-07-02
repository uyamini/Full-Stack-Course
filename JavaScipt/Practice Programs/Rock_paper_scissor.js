const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Invalid input");
  }
};

function getComputerChoice() {
  num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won";
    } else {
      return "user won";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissor") {
      return "computer won";
    } else {
      return "user won";
    }
  } else if (userChoice === "scissor") {
    if (computerChoice === "rock") {
      return "computer won";
    } else {
      return "user won";
    }
  }
}

function playGame() {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
