let guessCounter = 0;
let answer = Math.floor(Math.random()*100);

const guessFunction = () => {
    userGuess = window.prompt('I am thinking of a number between 1 and 100');
    if (userGuess > answer) {
        window.alert('Too high. Try again.');
        guessCounter++;
        guessFunction();
    } else if (userGuess < answer) {
        window.alert('Too low. Try again.');
        guessCounter++;
        guessFunction();
    } else {
        guessCounter++;
        window.alert('Correct! It took ' + guessCounter + ' guesses to get the right number.')
    }
}

guessFunction();