const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
 let userChoice
 let computerChoice
 let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

 function generateComputerChoice()
 {
    const randomNumber = Math.floor(Math.random() * 3)+1 //Also use possibleChoice.length
    
    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice

 }

 function getResult(){
    if(computerChoice === userChoice){
        result = "its a Draw"
    }
    if(computerChoice === 'Rock'&& userChoice === "Paper"){
        result = "You Won!"
    }
    if(computerChoice === 'Rock' && userChoice === "Scissors"){
        result ="You lost!"
    }
    if(computerChoice === 'Paper' && userChoice === "Scissors"){
        result = "You Won!"
    }
    if(computerChoice === 'Paper' && userChoice === "Rock"){
        result ="You lost!"
    }
    if(computerChoice === 'Scissors' && userChoice === "Paper"){
        result ="You lost!"
    }
    if(computerChoice === 'Scissors' && userChoice === "Rock"){
        result = "You Won!"
    }
    resultDisplay.innerHTML = result
 }