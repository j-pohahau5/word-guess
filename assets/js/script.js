var startButton = document.querySelector(".start");
var wordSpace = document.querySelector(".spaces");
var timeLeft = document.querySelector(".timeNum");
var userScore = document.querySelector(".scoreNum");
var timerInterval;
var seconds = 60;

startButton.addEventListener("click", setTimer)

function setTimer(){
    timerInterval = setInterval(function(){
        seconds--
        timeLeft.textContent = seconds
        if(seconds <= 0){
            clearInterval(timerInterval)
        }
        
       }, 1000) };