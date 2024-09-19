'use strict'

let rand_num1 = 0
let rand_num2 = 0

const getRandomIntNumberRange = (min, max) => {
    return Math.floor(Math.random()*max) + min
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberRange(1, 10)
    rand_num2 = getRandomIntNumberRange(1, 10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});

let oikeatvastaukset = 0
let vaaratvastaukset = 0

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    const oikeat = document.querySelector('#oikeat')
    const vaarat = document.querySelector('#vaarat')

    if (answer === correctAnswer) {
        oikeatvastaukset +=1
        oikeat.innerHTML = oikeatvastaukset
        alert('Correct!')
    }
    else {
        vaaratvastaukset +=1
        vaarat.innerHTML = vaaratvastaukset
        alert('Incorrect!')
    }
    randomizeNumbers()
    document.querySelector('input').value = ''
})