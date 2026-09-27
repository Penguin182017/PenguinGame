console.log("JavaScript is Working!");

const button = document.getElementById('penguinButton')
const score = document.getElementById('score')
let scoreNumber = 0

button.addEventListener('click', function() {
    scoreNumber = scoreNumber + 1
    score.textContent = "Score: " + scoreNumber
});

