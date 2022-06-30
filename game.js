// game.js

// Complete logic of game inside this function
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	// Function to start game
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
        const lizardBtn = document.querySelector('.lizard');
        const spockBtn = document.querySelector('.spock');
		const playerOptions = [rockBtn,paperBtn,scissorBtn,lizardBtn,spockBtn];
		const computerOptions = ['rock','paper','scissors','lizard','spock']
		
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 10 moves
				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();

        //if comp and user choose same result
		if(player === computer){
			result.textContent = 'Tie'
		}
        //scissors cuts paper
		else if(player == 'scissors'){
            if(computer == 'paper'){
                result.textContent = 'Tough Luck Computer, player won this one';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            } else{
                result.textContent = 'Computer won!'
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            }
        }
        //paper covers rock
        else if(player == 'paper'){
            if(computer =='rock'){
                result.textContent = 'Player won again! Go cry to the code gods , computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer has won again! Technology really is the future hehe';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        //rock crushes lizard
        else if(player == 'rock'){
            if(computer == 'lizard'){
                result.textContent = 'Player won again! Go cry to the code gods , computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer has won again! Technology really is the future hehe';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        //lizard poisons spock
        else if(player == 'lizard'){
            if(computer == 'spock'){
                result.textContent = 'Player won again! Go cry to the code gods , computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer has won again! Technology really is the future hehe';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        //spock smashes scissors
        else if(player == 'spock'){
            if(computer == 'scissors'){
                result.textContent = 'Player won again! Go cry to the code gods , computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer has won again! Technology really is the future hehe';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        //scissors decapitates lizard
        else if(player == 'scissors'){
            if(computer == 'lizard'){
                result.textContent = 'Player won again! Go cry to the code gods , computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer has won again! Technology really is the future hehe';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        //lizard eats paper
        else if(player == 'lizard'){
            if(computer == 'paper'){
                result.textContent = 'Player won again! Go cry to the code gods , computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer has won again! Technology really is the future hehe';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        //paper disproves spock
        else if(player == 'paper'){
            if(computer == 'spock'){
                result.textContent = 'Player won again! Go cry to the code gods , computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer has won again! Technology really is the future hehe';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        //spock vapourizes rock
        else if(player == 'spock'){
            if(computer == 'rock'){
                result.textContent = 'Player won again! Go cry to the code gods , computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer has won again! Technology really is the future hehe';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        //as it always has...rock crushes scissors
        else if(player == 'rock'){
            if(computer == 'scissors'){
                result.textContent = 'Player won again! Go cry to the code gods , computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer has won again! Technology really is the future hehe';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        
	}

	// Function to run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}


	// Calling playGame function inside game
	playGame();
	
}

// Calling the game function
game();
