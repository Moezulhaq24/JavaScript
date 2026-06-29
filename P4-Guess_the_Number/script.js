
let randomNo = parseInt(Math.random() * 100 + 1)

const submit = document.getElementById("subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowerHigh = document.querySelector(".lowOrHi")
const startOvr = document.querySelector(".resultParas")
const p = document.createElement('p')

let previous = []
let attempts = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.")
    }
    else if (guess < 1) {
        alert("Please enter a number greater than 1.")
    }
    else if (guess > 100) {
        alert("Please enter a number less than 100.")
    }
    else {
        previous.push(guess)
        if (attempts === 5) {
            displayGuess(guess)
            displayMsg(`Game Over. Random no was ${randomNo}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNo) {
        displayMsg(`Your guessed it right`)
        endGame()
    }
    else if (guess < randomNo) {
        displayMsg(`Number is TOO low`)
    }

    else if (guess > randomNo) {
        displayMsg(`Number is TOO High`)
    }

}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    attempts++
    remaining.innerHTML = `${6 - attempts}`
}

function displayMsg(msg) {
    lowerHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start new Game</h2>`
    startOvr.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const ngbutton = document.querySelector("#newgame")
    ngbutton.addEventListener('click', function (e) {
        randomNo = parseInt(Math.random() * 100 + 1)
        previous = []
        attempts = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${6 - attempts}`
        userInput.removeAttribute('disabled')
        startOvr.removeChild(p)
        playGame = true
    });
}
