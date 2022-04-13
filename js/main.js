// DOM Elements
var randomNum = Math.floor(Math.random() * 10)+1;
var palpiteField = document.querySelector('.palpiteField');
var palpiteSend = document.querySelector('.palpiteSend');
var paragraphs = document.querySelector('.paragraphs');
var palpites = document.querySelector('.palpites');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');
var palpitesCounter = 1;
palpiteField.focus();

// Check palpite
function checkPalpite(){
    var userPalpite = Number(palpiteField.value);
    if(palpitesCounter === 1){
        palpites.textContent = 'Palpites: ';
    }
    palpites.textContent += userPalpite + ' ';
    if(userPalpite === randomNum){
        lastResult.textContent = 'Winner!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        configEndGame();
    } else if(palpitesCounter === 10){
        lastResult = 'Game Over! Try Again!';
        lastResult.style.backgroundColor = 'red';
        lowOrHigh.textContent = '';
        configEndGame();
    } else {
        lastResult.textContent = 'Noy yet!';
        if(userPalpite < randomNum){
            lowOrHigh.textContent = 'You choose a low number!';
        } else if(userPalpite > randomNum){
            lowOrHigh = 'You choose a high number!';
        }
    }
    palpiteField.value = '';
    palpitesCounter++;
    palpiteField.focus();
}

palpiteSend.addEventListener('click', checkPalpite);

// End game
function configEndGame(){
    palpiteField.disabled = true;
    palpiteSend.disabled = true;

    buttonRestart = document.createElement('button');
    buttonRestart.textContent = 'Restart Game';
    document.body.appendChild(buttonRestart);
    buttonRestart.addEventListener('click', restartGame);
}

// Restart game
function restartGame(){
    palpitesCounter = 1;
    var paragraphs = document.querySelector('.paragraphs');
    for(var i = 0; i < paragraphs.length; i++){
        paragraphs[i].textContent = '';
    }
    buttonRestart.parentNode.removeChild(buttonRestart);
    palpiteField.disabled = false;
    palpiteSend.disabled = false;

    palpiteField.value = '';
    palpiteField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNum = Math.floor(Math.random() * 10)+1;
}