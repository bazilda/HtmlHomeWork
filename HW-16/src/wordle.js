// references to DOM elements
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElement = document.querySelector(".trials-remainder");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");
// variables required for JS logic
const wordsForGuess = ["pappy", "apple", "table", "gold", "silver", "index", "script", "peace", "picture"];
let trials;
let word;
let flGameOver = false;
// functions

// function switchReadonly()
// {
//     guessInputElement.readOnly = !guessInputElement.readOnly;
// }
 
function makeBodyGreen() {
    document.body.style.backgroundColor = "green";
}

function makeBodyRed() {
    document.body.style.backgroundColor = "red";
}

function startGame() {
    word = getWord();
    fillLettersDivs();
    flGameOver = false;
    trials = word.length + 1;
    playAgainElement.style.display = "none";
    gameResultElement.innerHTML = "Game started";
    trialsElement.innerHTML = `Trials left: ${trials}`;
    guessInputElement.value='';
}

function getWord() {
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
}
function fillLettersDivs() {
    const arrayWord = Array.from(word);
    guessLettersElement.innerHTML = arrayWord.reduce(function (res, cur) {
        res = res + '<div class="letter"></div>'
        return res;
    }, '');
    lettersDivs = document.querySelectorAll(".letter");
}
function onChange() {
    const trialWord = guessInputElement.value;
    
    if (flGameOver) {
        alert("game is over, press play-again");
        return;
    }
    else {
        trials--;
        trialsElement.innerHTML = `remained <b>trials</b> ${trials}`;
        if (trialWord.length != word.length) {
            alert("wrong number of letters");
        } else {
            coloringWord(trialWord);
        }
    }
    if(checkGameOver(trialWord)){
      finishGame();
    }
    function checkGameOver(trialWord){
        let res=true;
        let trialsUsed = word.length + 1 - trials;
        if (word===trialWord){
            finishMessage=`Congratulations, you have guessed the word using ${trialsUsed} trials`
        } else if (trials===0){
            finishMessage=`Sorry, but you have used all the given trials`

        } else {
            res=false;
        }
        return res;
    }
}
function coloringWord(trialWord) {
    const arWord = Array.from(trialWord);                               
    arWord.forEach(function(letter,index){
        lettersDivs[index].innerHTML=letter;
        lettersDivs[index].style.color=getColor(letter,index);
    })
}
function getColor(letter,index){
    let res="red";
    if (word.includes(letter)){
        res=word[index] == letter? "green" : "yellow";
    }
    return res;
}
function finishGame() {
    flGameOver=true;
    gameResultElement.innerHTML=finishMessage;
    playAgainElement.style.display = "flex";
}
//actions
startGame();
