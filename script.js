let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
};
const getAbsoluteDistance = (guess, targuet) => {
    return Math.abs(guess - targuet);
};
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    if (humanGuess > 10 || humanGuess < 0) {
        window.alert( 'Out of range. Selected number must be between 0 and 9. Try again.');
    } else if (getAbsoluteDistance(humanGuess, secretTarget) < getAbsoluteDistance(computerGuess, secretTarget) || 
    getAbsoluteDistance(humanGuess, secretTarget) === getAbsoluteDistance(computerGuess, secretTarget)) {
        return true;
    } else {
        return false;
    }
};
 const updateScore = (input) => {
   if (input === 'human') {
     humanScore ++;
   } else if (input === 'computer') {
     computerScore ++;
   }
 };
const advanceRound = () => {
    currentRoundNumber ++;
};