function rollDice() {
   
    const player1Roll = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    const player2Roll = Math.floor(Math.random() * 6) + 1;

    document.getElementById('player1Dice').textContent = getDiceEmoji(player1Roll);
    document.getElementById('player2Dice').textContent = getDiceEmoji(player2Roll);

    // Determine the winner
    let resultText;
    if (player1Roll > player2Roll) {
        resultText = "Player 1 Wins! 🎉";
    } else if (player2Roll > player1Roll) {
        resultText = "Player 2 Wins! 🎉";
    } else {
        resultText = "It's a Tie! 🤝";
    }

    
    document.getElementById('result').textContent = resultText;
}


function getDiceEmoji(number) {
    const diceEmojis = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return diceEmojis[number];
}