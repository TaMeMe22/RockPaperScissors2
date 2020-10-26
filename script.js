let playerScore = 0;
let computerScore = 0;
const playerScore_p = document.getElementById("player-score");
const computerScore_p = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const bomb = document.getElementById("bomb");
const reset = document.getElementById("reset");

function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = (Math.floor(Math.random()*3));
  return choices[randomNumber];
}


function win(playerChoice, computerChoice){
  playerScore++;
  playerScore_p.innerHTML = playerScore;
  computerScore_p.innerHTML = computerScore;
  const smallPlayerWord = "play".fontsize(2).sup();
  const smallComputerWord = "comp".fontsize(2).sup();
  result_p.innerHTML = `${playerChoice}${smallPlayerWord} beats  ${computerChoice}${smallComputerWord}. You Win!`;
  document.getElementById(playerChoice).classList.add('green-glow');
  setTimeout(function() {document.getElementById(playerChoice).classList.remove('green-glow')}, 1000);
}

function lose(playerChoice, computerChoice){
  computerScore++;
  playerScore_p.innerHTML = playerScore;
  computerScore_p.innerHTML = computerScore;
  const smallPlayerWord = "play".fontsize(2).sup();
  const smallComputerWord = "comp".fontsize(2).sup();
  result_p.innerHTML = `${playerChoice}${smallPlayerWord} loses to  ${computerChoice}${smallComputerWord}. You Lost!`;
  document.getElementById(playerChoice).classList.add('red-glow');
  setTimeout(function() {document.getElementById(playerChoice).classList.remove('red-glow')}, 1000);
}

function tie(playerChoice, computerChoice){
const smallPlayerWord = "play".fontsize(2).sup();
  const smallComputerWord = "comp".fontsize(2).sup();
  result_p.innerHTML = `${playerChoice}${smallPlayerWord} equals  ${computerChoice}${smallComputerWord}. It's a Draw!`;
  document.getElementById(playerChoice).classList.add('yellow-glow');
  setTimeout(function() {document.getElementById(playerChoice).classList.remove('yellow-glow')}, 1000);
}



function game(playerChoice) {
  const computerChoice = getComputerChoice();
  const getWinner = (playerChoice, computerChoice)
    if (playerChoice === 'rock'){
        if (computerChoice === 'scissors'){
           win(playerChoice, computerChoice);
        }if (computerChoice === 'paper') {
            lose(playerChoice, computerChoice);
        }else if(computerChoice === 'rock') {
          tie(playerChoice, computerChoice);  
        }
    }



    if (playerChoice === 'paper'){
        if (computerChoice === 'rock'){
            win(playerChoice, computerChoice);
        }if (computerChoice === 'scissors'){
            lose(playerChoice, computerChoice);
        }else if(computerChoice === 'paper'){
            tie(playerChoice, computerChoice);
        }
    }

    if (playerChoice === 'scissors'){
        if (computerChoice === 'paper'){
            win(playerChoice, computerChoice);
        }if (computerChoice === 'rock'){
            lose(playerChoice, computerChoice);
       }else if(computerChoice === 'scissors'){
            tie(playerChoice, computerChoice);
       }
    }

    if (playerChoice === 'bomb'){
        win (playerChoice, computerChoice);
    }
    };


function main(){
  rock.addEventListener('click', function(){
    game("rock");
  })

  paper.addEventListener('click', function(){
    game("paper");
  })

  scissors.addEventListener('click', function(){
    game("scissors");
  })

  bomb.addEventListener('click', function(){
    game("bomb");
  })
}

main();


function resetGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  scoreboard.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}
reset.addEventListener('click', resetGame);
