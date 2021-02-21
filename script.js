var timer = document.getElementById("timer");
var startQuiz = document.getElementById("strtbtn");
var li01 = document.querySelectorAll(".wrong")
var answerTextAlert = document.querySelectorAll(".addText");
// var btns = document.querySelectorAll(".wrong");

startQuiz.addEventListener("click",countDown)

function countDown() {
 var seconds = 75;
 setInterval(function(){
 seconds--;
 timer.textContent = "Time: " + seconds;
if (seconds <= 0){
    clearInterval(seconds)//doesn't work, goes into negative numbers
}
},1000)
var element = document.getElementById("hide-section");
element.style.display = "none";
var quest1 = document.getElementById("question01")
quest1.style.display = "block";
};



li01.forEach(function(btn){
    btn.addEventListener("click", () => {
            answerTextAlert.textContent = "Wrong!";
        })
});
      
    //   }
    //    else {
    //        answerTextAlert.textContent = "Correct!"
     


