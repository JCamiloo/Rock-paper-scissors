let userScore = 0;
let compScore = 0;
let sets = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const sets_span = document.getElementById("sets-played");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scisssors_div = document.getElementById("scissors");

const getComputerChoice = () => {
    const choices = ['rock','paper','scissors'];
    const position = Math.floor(Math.random() * choices.length);
    return choices[position];
};

const removeGlow = (userChoice, computerChoice) => {
    document.getElementById(userChoice).classList.remove('green-glow');
    document.getElementById(computerChoice).classList.remove('red-glow');
}

const userWins = (userChoice, computerChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice[0].toUpperCase() + userChoice.substring(1) + " beats " + computerChoice + ". You win!"
    setTimeout(() => removeGlow(userChoice,computerChoice),2000);
};

const userLoses = (userChoice, computerChoice) => {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = userChoice[0].toUpperCase() + userChoice.substring(1) + " defeats " + computerChoice + ". You lose!"
    setTimeout(() => removeGlow(userChoice,computerChoice),2000);
};

const draw = (userChoice, computerChoice) => {
    result_p.innerHTML = userChoice[0].toUpperCase() + userChoice.substring(1) + " draws " + computerChoice + "."
    setTimeout(() => removeGlow(userChoice,computerChoice),2000);
};

const game = (userChoice) => {
    sets++;
    sets_span.innerHTML = sets;
    document.getElementById(userChoice).classList.add('green-glow');
    const computerChoice = getComputerChoice();
    document.getElementById(computerChoice).classList.add('red-glow');
    switch(userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            userWins(userChoice, computerChoice);
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            userLoses(userChoice, computerChoice);
            break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw(userChoice, computerChoice);
            break;
    };
};

const main = () => {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scisssors_div.addEventListener('click', () => game('scissors'));
};

main();
