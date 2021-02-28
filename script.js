var timer = document.getElementById("timer");
var startQuiz = document.getElementById("strtbtn");
var userNotify = document.getElementById("user-alert");
var currentQuestionIndex = 0
var submitBtn = document.getElementById("submit");
var questionsLoop = document.getElementById("questions");
var btnsDiv = document.getElementById("buttons")
var userScore = document.getElementById("finalScore");
var seconds = 75;
var userInitials = document.getElementById("initials");
var form = document.getElementById("finished");
//var user = document.getElementById("initials").value;


//start button event listener to get the timer & questions kicked off
startQuiz.addEventListener("click",countDown)

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
quizQuestions();

};



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
 
 


//diplaying first question
 function quizQuestions () {
    questionsLoop.innerText = questionsOpts[currentQuestionIndex].question;
    //console.log(questionsOpts[currentQuestionIndex]);
    let buttonArray = [];
    for (i= 0; i < questionsOpts[currentQuestionIndex].choices.length; i++) {
        var button = document.createElement("button");
        button.innerText = questionsOpts[currentQuestionIndex].choices[i];
        console.log("answer key on buttons " + questionsOpts[currentQuestionIndex].choices[i])
        btnsDiv.appendChild(button);
        buttonArray.push(button);
        $("button").addClass("controlBtns");
        console.log(button);
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
    if (currentQuestionIndex > questionsOpts.length){
        endGame();
    }
    else {
        nextQuestion();
    }
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

//if(currentQuestionIndex >= questionsOpts.length){
   // endGame();
//}

// if (currentQuestionIndex > questionsOpts.length){
//     setTimeout(endGame(),1000)
// }
// else {
//     return;
// }

//end game
function endGame(){
   $(".container").hide();
   form.style.display = "block";
   userScore.innerText = "Your final score is " + seconds;
   $("#timer").hide();

    
}   



//display form


//store high scores

// function setHighScores(event) {
//     console.log(event);

// }

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var user = document.getElementById("initials").value;
    var secondsLeft = seconds;//not pausing time pauses at submit
    localStorage.setItem("userName",user);
    localStorage.setItem("score", secondsLeft);
    $("#finished").hide();
    $("#highScores").show();
    setHighScores();
})

function setHighScores() {
    var element = $("<li>");
    element.text(function(){
        user + "- " + seconds;
    })
}

// function getHighScores () {
    
//     var storedHighScores = localStorage.getItem("highScores")
// }

  //getQuestions()