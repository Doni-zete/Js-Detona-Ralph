const state = {
 view: {
  squares: document.querySelectorAll('.square'),
  enemy: document.querySelector('.enemy'),
  timeLeft: document.querySelector('#time-left'),
  score: document.querySelector('#score'),
 },

    values: {
        timerId: null,
        velocity: 1000
        
 },
}

function moveEnemy() {
    state.values.timerId = setInterval(randomSquare, state.values.velocity)
}

function randomSquare() {
 state.view.squares.forEach((square) => {
  square.classList.remove('enemy')
 })

 let randomNumber = Math.floor(Math.random() * 9)
 let randomSquare = state.view.squares[randomNumber]
 randomSquare.classList.add('enemy')
}

function addListenerHitBox() {
 state.view.squares.forEach((square) => {})
}

function inicio() {
 moveEnemy()
}

inicio()
