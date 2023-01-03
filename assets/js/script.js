var startButton = document.querySelector(".start");
var wordSpace = document.querySelector(".spaces");
var timeLeft = document.querySelector(".timeNum");
var userScore = document.querySelector(".scoreNum");
var timerInterval;
var seconds = 60;
var wordBank = [ 
    ["t", "h", "e", "r", "e"],
    ["b", "a", "c", "k"],
    ["a", "g", "a", "i", "n"]
];
console.log(wordBank[0])


function setTimer(){
    clearInterval(timerInterval)
    seconds = 60
    timerInterval = setInterval(function(){
        seconds--;
        timeLeft.textContent = seconds;
        if(seconds <= 0){
            clearInterval(timerInterval);
        }
        
       }, 1000) };

       function displaySpaces() {
       var randomVal = wordBank[Math.floor(wordBank.length * Math.random())];
       wordSpace.textContent = randomVal;
       }
       startButton.addEventListener("click", setTimer)
       startButton.addEventListener("click",displaySpaces)