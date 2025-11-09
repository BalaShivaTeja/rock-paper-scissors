function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const TejaChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = '';
    
    if (userChoice === TejaChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && TejaChoice === 'scissors') ||
        (userChoice === 'paper' && TejaChoice === 'rock') ||
        (userChoice === 'scissors' && TejaChoice === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    
    document.getElementById('result').innerText = `Teja chose ${TejaChoice}. ${result}`;
}
