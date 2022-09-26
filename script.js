if(!localStorage.getItem('botScore')){
  localStorage.setItem('botScore', 0)
  localStorage.setItem('playerScore', 0)
}

document.querySelector('#bot').addEventListener('click',addAnothaOne)
document.querySelector('#player').addEventListener('click',addAnothaOneP)
  
  

function addAnothaOne(){
  let botScoreValue = Number(localStorage.getItem('botScore'))
  botScoreValue += 1
  localStorage.setItem('botScore',botScoreValue)
  document.querySelector('#botScore').innerText = botScoreValue
}

function addAnothaOneP(){
  let playerScoreValue = Number(localStorage.getItem('playerScore'))
  playerScoreValue += 1
  localStorage.setItem('playerScore',playerScoreValue)
  document.querySelector('#playScore').innerText = playerScoreValue
}