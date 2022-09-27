let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    deckId = data.deck_id
  })
  .catch(err =>{
    console.log(`error ${err}`)
  });
 

document.querySelector('.draw').addEventListener('click',drawTwo)
  
  

function drawTwo(){
const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    
    document.querySelector('#playerOne').src = data.cards[0].image
    document.querySelector('#playScore').innerText = data.cards[0].code
    let player1Val =convert2Num(data.cards[0].value)

    
    document.querySelector('#playerTwo').src = data.cards[1].image
    document.querySelector('#botScore').innerText = data.cards[1].code
    let player2Val = convert2Num(data.cards[1].value)


    if(player1Val > player2Val){
      document.querySelector('h3').innerText = 'Player One WINS'
    } else if (player1Val < player2Val) {
      document.querySelector('h3').innerText = "Player Two WINS"
    } else {
      document.querySelector('h3').innerText = 'Time for WAR!'
    }
  })
  .catch(err =>{
    console.log(`error ${err}`)
  });
 }


function convert2Num(val) {
  if (val === 'ACE'){
    return 14
  } else if (val === 'KING'){
    return 13
  } else if ( val === 'QUEEN'){
    return 12
  }else if (val === 'JACK'){
    return 11
  } else {
    return Number(val)
  }
}