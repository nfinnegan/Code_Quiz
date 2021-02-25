var timer = document.getElementById("timer");
var startQuiz = document.getElementById("strtbtn");
var userNotify = document.getElementById("user-alert");
var currentQuestionIndex = 0
var questionsLoop = document.getElementById("questions");
var btnsDiv = document.getElementById("buttons")
var seconds = 75;
var liItems = document.getElementsByTagName("li");

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
questionsLoop.style.display = "block";
btnsDiv.style.display = "block";

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
    console.log(questionsOpts[currentQuestionIndex]);
    let buttonArray = [];
    for (i= 0; i < questionsOpts[currentQuestionIndex].choices.length; i++) {
        var button = document.createElement("button");
        button.innerText = questionsOpts[currentQuestionIndex].choices[i];
        btnsDiv.appendChild(button);
        buttonArray.push(button);
        // console.log(button);
    };

     buttonArray.forEach(function(btn){
        // console.log(btn);
         btn.addEventListener("click", function(){
             console.log(event.target);
        //     if (button.innerText === questionsOpts[currentQuestionIndex].answer) {
        //         userNotify.innerText = "Correct!";
        //  }
        //     else {
        //         userNotify.innerText = "Wrong!";
        //  }
        // });
     })

 }


function nextQuestion(){
    currentQuestionIndex++;
    questionsLoop.innerText = questionsOpts[currentQuestionIndex].question;
    console.log(questionsOpts[currentQuestionIndex]);
    let buttonArray = [];

    for (i= 0; i < questionsOpts[currentQuestionIndex].choices.length; i++) {
        var button = document.createElement("button");
        button.innerText = questionsOpts[currentQuestionIndex].choices[i];
        btnsDiv.appendChild(button);
        buttonArray.push(button)
    
    }
    
}


     

// function setHighScores () {
//     // store form input for user highscore 
//     //localStorage.setItem("highScores", user highscore)
// }


// function getHighScores () {
    
//     var storedHighScores = localStorage.getItem("highScores")
// }

  //getQuestions()