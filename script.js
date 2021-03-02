var timer = document.getElementById("timer");
var startQuiz = document.getElementById("strtbtn");
var goBack = document.getElementById("go_backBtn");
var clearScores = document.getElementById("clearScores");
var userNotify = document.getElementById("user-alert");
var currentQuestionIndex = 0
var submitBtn = document.getElementById("submit");
var questionsLoop = document.getElementById("questions");
var btnsDiv = document.getElementById("buttons")
var userScore = document.getElementById("finalScore");
var seconds = 75;
var userInitials = document.getElementById("initials");
var form = document.getElementById("finished");
var time = '';
var getScores = JSON.parse(localStorage.getItem("scoreCombo"))== null ?[]:JSON.parse(localStorage.getItem("scoreCombo"));
var userInfo = [];
//var user = document.getElementById("initials").value;


//start button event listener to get the timer & questions kicked off
startQuiz.addEventListener("click",countDown)

//start timer & displaying first question to user
function countDown() {
time = setInterval(function(){
 seconds--;
 timer.textContent = "Time: " + seconds;
if (seconds <= 0){
    clearInterval(time)
}
},1000)
var element = document.getElementById("hide-section");
element.style.display = "none";
if ($(".container").hide()){
    $(".container").show();
}
quizQuestions();


};


//questions, options & answers for quiz
var questionsOpts = 
[
    {
        question: "Which HTML element do we use to reference our Javascript file?",
        choices: ["< javascript >", "< script >", "< style >", "< js >"],
        answer: "< script >",
     },
    
    {
        question: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction", "invoke myFunction()", "myFunction()", "console.log(myFunction())"],
        answer: "myFunction()",
    },

    {
        question: "How do you add a comment in JavaScript?",
        choices: ["type 'add comment'","**//", "//", "!add comment!"],
        answer: "//",
    },

    {
        question: "How do you declare a variable?",
        choices: ["var myVariable", "variable myVariable", "myVariable()", "v myVariable" ],
        answer: "var myVariable",
    },

 ]
 
 //Go Back Btn 
goBack.addEventListener("click",function(){
var element = document.getElementById("hide-section");
element.style.display = "block";
$("#highScores").hide();
$("#timer").text("Time: 0")
seconds =75; 
currentQuestionIndex = 0;
$("#buttons").empty();
$("#timer").show();
});
 
//clear scores Btn
clearScores.addEventListener("click",function(){
    window.localStorage.setItem("scoreCombo",JSON.stringify([]));
})



//diplaying first question
 function quizQuestions () {
    questionsLoop.innerText = questionsOpts[currentQuestionIndex].question;
    //console.log(questionsOpts[currentQuestionIndex]);
    let buttonArray = [];
    for (i= 0; i < questionsOpts[currentQuestionIndex].choices.length; i++) {
        var button = document.createElement("button");
        button.innerText = questionsOpts[currentQuestionIndex].choices[i];
        //console.log("answer key on buttons " + questionsOpts[currentQuestionIndex].choices[i])
        btnsDiv.appendChild(button);
        buttonArray.push(button);
        $("button").addClass("allButtons");
       // console.log(button);
    };

     buttonArray.forEach(function(btn){
        // console.log(btn);
         btn.addEventListener("click", function(event){
             console.log(event.target);
            if (event.target.innerText === questionsOpts[currentQuestionIndex].answer) {
                userNotify.innerText = "Correct!";
                nextQuestion();
         }
            else {
                userNotify.innerText = "Wrong!";
                seconds= seconds-10;
                nextQuestion();
         }
        });
     })

 }
 
 
//disply & iterate through questions 2-4
function nextQuestion(){
    currentQuestionIndex++;
        if (currentQuestionIndex >= questionsOpts.length) endGame();
    questionsLoop.innerText = questionsOpts[currentQuestionIndex].question;
    //console.log(questionsOpts[currentQuestionIndex]);
   $("#buttons").empty();
    let buttonArray = [];
    console.log(currentQuestionIndex);
    for (i= 0; i < questionsOpts[currentQuestionIndex].choices.length; i++) {
        var button = document.createElement("button");
        button.innerText = questionsOpts[currentQuestionIndex].choices[i];
       // console.log("answer key on buttons " + questionsOpts[currentQuestionIndex].choices[i])
        btnsDiv.appendChild(button);
        buttonArray.push(button);
        $("button").addClass("allButtons");
  
              
    };
        buttonArray.forEach(function(btn){
         btn.addEventListener("click", function(event){
             console.log(event.target);
             
            if (event.target.innerText === questionsOpts[currentQuestionIndex].answer) {
                userNotify.innerText = "Correct!";
                nextQuestion();
            }
            else {
                userNotify.innerText = "Wrong!";
                seconds= seconds-10;
                nextQuestion();
            } 
        });
     })

}


//end game
function endGame(){
   $(".container").hide();
   form.style.display = "block";
   userScore.innerText = "Your final score is " + seconds;
   $("#timer").hide();
   clearInterval(time);
   userNotify.innerText = "";   
}   



//store Highscores locally
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var scoreCombo = {
        initials: userInitials.value,
        secondsLeft: seconds,
    }

    let oldScores = JSON.parse(window.localStorage.getItem("scoreCombo")) || [];
    oldScores.push(scoreCombo);
    window.localStorage.setItem("scoreCombo", JSON.stringify(oldScores));
    console.log(oldScores);
    $("#finished").hide();
    $("#highScores").show();
    setHighScores();
})


//set Highscores on page 
function setHighScores() {
   let scores = JSON.parse(window.localStorage.getItem("scoreCombo")) || [];

    for (let s of scores){
        console.log(scores.initials, scores.secondsLeft);
        $(".hsList").empty();
        $(".hsList").append(`<p>${s.initials} ${s.secondsLeft}</p>`)
    }
   
}

 //view highscores on page
$("a").click(function(){
  console.log(getScores);
    $("#highScores").show();
        if ($(".strt-quiz").show()) {
            $(".strt-quiz").hide();
    };
        if ($(".container").show()) {
            $(".container").hide();
    };
        if ($(".finished").show()) {
            $(".finished").hide();
};
    setHighScores();
})  
