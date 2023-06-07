const btns = document.querySelectorAll('button')
const computerChoice = document.querySelector('.computerChoice')
const userChoice = document.querySelector('.userChoice')
const result = document.querySelector('.result')
const computerScore = document.querySelector('.computerScore')
const userScore = document.querySelector('.userScore')
const btnPlay = document.querySelector('.play')
const before = document.querySelector('.before')
const end = document.querySelector('.endGame')
const endText = document.querySelector('.endText')
const btnRestartGame = document.querySelector('.restartGame')
let computerNumberScore = 0
let userNumberScore = 0

btns.forEach(btn => btn.addEventListener('click', (e) => {
   userChoice.textContent = e.target.textContent
   computerChoiceDisplay()
   resultDisplay()
   scoreDisplay()
   color()
   endGame()
}))

const computerChoiceDisplay = () => {
    randomChoice = Math.floor((Math.random() * 9) + 1)
    if (randomChoice === 1 || randomChoice === 2 || randomChoice === 3) {
        computerChoice.textContent = '✋'
    } else if (randomChoice === 4 || randomChoice === 5 || randomChoice === 6) {
        computerChoice.textContent = '👊'
    } else if (randomChoice === 7 || randomChoice === 8 || randomChoice === 9) {
        computerChoice.textContent = '✌️'
    }
}

const resultDisplay = () => {
    if (computerChoice.textContent === '✋' && userChoice.textContent === '✋') {
        result.textContent = 'draw'
    } else if (computerChoice.textContent === '✋' && userChoice.textContent === '👊') {
        result.textContent = 'lost'
    } else if (computerChoice.textContent === '✋' && userChoice.textContent === '✌️') {
        result.textContent = 'win'
    } else if (computerChoice.textContent === '👊' && userChoice.textContent === '✋') {
        result.textContent = 'win'
    } else if (computerChoice.textContent === '👊' && userChoice.textContent === '👊') {
        result.textContent = 'draw'
    } else if (computerChoice.textContent === '👊' && userChoice.textContent === '✌️') {
        result.textContent = 'lost'
    } else if (computerChoice.textContent === '✌️' && userChoice.textContent === '✋') {
        result.textContent = 'lost'
    } else if (computerChoice.textContent === '✌️' && userChoice.textContent === '👊') {
        result.textContent = 'win'
    } else if (computerChoice.textContent === '✌️' && userChoice.textContent === '✌️') {
        result.textContent = 'draw'
    }

}


const scoreDisplay = () => {
    if(result.textContent === 'win') {
        userNumberScore++
        userScore.textContent = userNumberScore
    } else if (result.textContent === 'lost') {
        computerNumberScore++
        computerScore.textContent = computerNumberScore 
    } 

}

const color = () => {
    if (result.textContent === 'win') {
        result.style.color = 'lime'
    } else if (result.textContent === 'lost') {
        result.style.color = 'tomato'
    } else if (result.textContent === 'draw') {
        result.style.color = 'white'
    }
}

const beforeGame = () => {
    before.classList.add('hide')
}

const endGame = () => {
    if (userNumberScore === 10) {
        end.classList.add('show')
        endText.style.color = 'lime'
        endText.textContent = 'You Win'
    } else if (computerNumberScore === 10) {
        end.classList.add('show')
        endText.style.color = 'tomato'
        endText.textContent = 'You Lost'
    }
}


const newGame = () => {
    end.classList.remove('show')
    userNumberScore = 0
    computerNumberScore = 0
    result.textContent = ''
    computerChoice.textContent = ''
    userChoice.textContent = ''
    computerScore.textContent = ''
    userScore.textContent = ''
}



btnRestartGame.addEventListener('click', newGame)
btnPlay.addEventListener('click', beforeGame)


