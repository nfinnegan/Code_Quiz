var timer = document.getElementById("timer");
var startQuiz = document.getElementById("strtbtn");
console.log(startQuiz)


startQuiz.addEventListener("click",countDown)

function countDown() {
 var seconds = 75;
 setInterval(function(){
 seconds--;
 timer.textContent = "Time: " + seconds;
 },1000)
if (seconds === 0){
    clearInterval(seconds)
} 
}

