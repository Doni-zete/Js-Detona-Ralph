const state = {
 view: {
  squares: document.querySelectorAll('.square'),
  enemy: document.querySelector('.enemy'),
  score: document.querySelector('#score'),
  timeLeft: document.querySelector('#time-left'),
  lives: document.querySelector('.menu-lives h2'),
  
 },

 values: {
  velocity: 1000,
  hitPosition: 0,
  result: 0,
  currentTime: 30,
  lives: 3,
 },
 actions: {
  timerId: setInterval(randomSquare, 1000),
  countDownTimerId: setInterval(countDown, 1000),
 },
}

function playSound() {
 let audio = new Audio('../audios/yahoo.m4a')
 audio.play()
}

function countDown() {
 state.values.currentTime--
 state.view.timeLeft.textContent = state.values.currentTime

 if (state.values.currentTime <= 0) {
  state.values.lives-- 
  state.view.lives.textContent = 'x' + state.values.lives 

  if (state.values.lives <= 0) {
   clearInterval(state.actions.countDownTimerId)
   clearInterval(state.actions.timerId)
   alert('Game Over! O seu resultado foi: ' + state.values.result)
  } else {
   state.values.currentTime = 30
  }
 }
}

function randomSquare() {
 state.view.squares.forEach((square) => {
  square.classList.remove('enemy')
 })

 let randomNumber = Math.floor(Math.random() * 9)
 let randomSquare = state.view.squares[randomNumber]
 randomSquare.classList.add('enemy')
 state.values.hitPosition = randomSquare.id
}

function addListenerHitBox() {
 state.view.squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
   if (square.id === state.values.hitPosition) {
    state.values.result++
    state.view.score.textContent = state.values.result
    state.values.hitPosition = null
    playSound()
   }
  })
 })
}

function inicio() {
 addListenerHitBox()
}

inicio()
