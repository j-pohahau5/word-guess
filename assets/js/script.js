var startButton = document.querySelector(".start");
var wordSpace = document.querySelector(".spaces");
var timeLeft = document.querySelector(".timeNum");
var userWins = document.querySelector(".winNum");
var userLosses = document.querySelector(".lossNum");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timerInterval;
var seconds = 60;
var wordBank = [ "there", "back", "again"];

var lettersInWord = [];
var blanksLetters = [];

function init(){
    getWins();
    getlosses();
}
  

function winGame() {
    wordSpace.textContent = "You Won"
    winCounter++
    startButton.disabled = false;
    setWins()
}

function loseGame() {
    wordSpace.textContent = "You Lose"
    loseCounter++
    startButton.disabled = false;
    setLosses()
}

function setTimer(){
    clearInterval(timerInterval)
    seconds = 60
    timerInterval = setInterval(function(){
        seconds--;
        timeLeft.textContent = seconds;

        if(seconds <= 0){
            clearInterval(timerInterval);
            loseGame()
        }

        if(isWin && seconds > 0) {
            clearInterval(timerInterval)
            winGame()
        }        
       }, 1000) };

       function displaySpaces() {
        isWin = false
       chosenWord = wordBank[Math.floor(wordBank.length * Math.random())];
       lettersInWord = chosenWord.split("")
       numBlanks = lettersInWord.length
       blanksLetters = []
       for (var i = 0; i < numBlanks; i++){
        blanksLetters.push("_")
       }
       wordSpace.textContent = blanksLetters.join(" ");
       }

       function setWins() {
        userWins.textContent = winCounter;
        localStorage.setItem("winCount", winCounter);
      }
      
      function setLosses() {
        userLosses.textContent = loseCounter;
        localStorage.setItem("loseCount", loseCounter);
      }

      function getWins() {
        var storedWins = localStorage.getItem("winCount");
        if (storedWins === null) {
          winCounter = 0;
        } else {
          winCounter = storedWins;
        }
        userWins.textContent = winCounter;
      }

      function getlosses() {
        var storedLosses = localStorage.getItem("loseCount");
        if (storedLosses === null) {
          loseCounter = 0;
        } else {
          loseCounter = storedLosses;
        }
        userLosses.textContent = loseCounter;
      }

      function checkWin() {
        if (chosenWord === blanksLetters.join("")) {
          isWin = true;
        }
      }

      function checkLetters(letter) {
        var letterInWord = false;
        for (var i = 0; i < numBlanks; i++) {
          if (chosenWord[i] === letter) {
            letterInWord = true;
          }
        }
        if (letterInWord) {
          for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
              blanksLetters[j] = letter;
            }
          }
          wordSpace.textContent = blanksLetters.join(" ");
        }
      }


      document.addEventListener("keydown", function(event) {
        if (seconds === 0) {
          return;
        }
        var key = event.key.toLowerCase();
        var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
        if (alphabetNumericCharacters.includes(key)) {
          var letterGuessed = event.key;
          checkLetters(letterGuessed)
          checkWin();
         
        } console.log(event)
      })
      

      init()
      

       startButton.addEventListener("click", setTimer)
       startButton.addEventListener("click",displaySpaces)




    