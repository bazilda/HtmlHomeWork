// references to HTML elements
const questionElement=document.getElementById("question");
const wordInputElement=document.getElementById("word-input");
const remainedLettersElement=document.getElementById("letters-remained");
const letterInputElement=document.getElementById("letter-input");
const letterElement=document.querySelector(".letters");
const resultMessage=document.getElementById("result-message");
const playAgain=document.getElementById("play-again");
let wordLettersElement;
// global variables
const questionWords=[["Что можно видеть с закрытыми глазами?","сон"],["Что в огне не горит и в воде не тонет?","Лёд"], ["Чем оканчиваются день и ночь?","ь"],["Какое слово всегда звучит неверно?","неверно"],["Какими нотами можно измерить расстояние?","милями"]]
 let currentIndex=0;
 let currentQuestion;
 let currentAnswer;
 const maxAllowedTrials=Math.ceil(questionWords.length*0.3);
 let trials = maxAllowedTrials;
 let flGameOver=false;


//function
    function startGame(){
    flGameOver = false;
    currentQuestion = questionWords[currentIndex][0];
    currentAnswer = questionWords[currentIndex][1];
    wordInputElement.value='';
    wordInputElement.readOnly=true;
    questionElement.innerHTML=currentQuestion;
    playAgain.style.display='none';
    resultMessage.innerHTML='';
    letterElement.innerHTML=getWordDivs();
    currentIndex = (currentIndex+1) % questionWords.length;
    remainedLettersElement.innerHTML = `Trials left: ${trials}`;
}
function checkWord(){
    if (flGameOver) {
        alert("game is over, press play-again");
        return;
    }

    let guestedWord = wordInputElement.value;
    if (guestedWord.length != currentAnswer.length)
    {
        alert("wrong number of letters");
        return;
    }

    if (guestedWord == currentAnswer)
    {
       
       resultMessage.innerHTML="Correct";
    }
    else
    {
      
        resultMessage.innerHTML="Wrong";
    }
 
    flGameOver = true;

    //todo: show play again button
}

function processLetter() {
    const trialLetter = letterInputElement.value;

    if (flGameOver) {
        alert("game is over, press play-again");
        return;
    }

    trials--;
        remainedLettersElement.innerHTML = `Trials left: ${trials}`;

    if (trials == 0) {
        takeChance();
        return;
    }
    else {
        letterInputElement.value = '';
    }
}

function takeChance() {
    wordInputElement.value='';
    wordInputElement.placeholder = "Enter word";
    wordInputElement.readOnly=false;
    letterInputElement.value = '';
    letterInputElement.placeholder='X';
    letterInputElement.readOnly = true;
}

function finishGame() {
    flGameOver=true;
    resultMessage.innerHTML=finishMessage;
    playAgain.style.display = "flex";
}
function getWordDivs() {
   const arrayWord = Array.from(currentAnswer);
   let divs = arrayWord.reduce(function (res, cur) {
        res = res + '<div class="letter"></div>'
        return res;
    }, '');
    return divs;
}

// actions
startGame();