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


// //add content
// function question1 () {
// var answersArray1 = ["&lt javascript &gt", "&lt script &gt", "&lt style &gt", "&lt js &gt"];
// var quest1 = questionsArray[0]    

// //create elements
// var pTag = document.createElement("p");
// var ol = document.createElement("ol");
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li"); 
// var button1 = document.createElement("button");
// var button2 = document.createElement("button");
// var button3 = document.createElement("button");
// var button4 = document.createElement("button");

// //add content
// pTag.innerHTML = quest1;
// button1.innerHTML = answersArray1[0];
// button2.innerHTML = answersArray1[1];
// button3.innerHTML = answersArray1[2];
// button4.innerHTML = answersArray1[3];

// //append to document
// pTag.appendChild(ol);
// questionsLoop.appendChild(pTag);
// li1.appendChild(button1);
// li2.appendChild(button2);
// li3.appendChild(button3);
// li4.appendChild(button4);
// ol.appendChild(li1);
// ol.appendChild(li2);
// ol.appendChild(li3);
// ol.appendChild(li4);


// }

var questionsOpts = 
[
    {
        question: "Which HTML element do we use to reference our Javascript file?",
        choices: ["&lt javascript &gt", "&lt script &gt", "&lt style &gt", "&lt js &gt"],
        answer: "&lt script &gt",
     },
    
    {
        question: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction", "invoke myFunction()", "myFunction()", "console.log(myFunction())"],
        answer: 3
    },

    {
        question: "How do you add a comment in JavaScript?",
        choices: ["type 'add comment'","**//", "//", "!add comment!"],
        answer: 3
    },

    {
        question: "How do you declare a variable?",
        choices: ["var myVariable", "variable myVariable", "myVariable()", "v myVariable" ],
        answer: 1
    },

 ]

 var answersArray = ["var myVariable", "//", "myFunction()", "&lt script &gt"]
 
 
//  button.forEach(function(btn){
//     btn.addEventListener("click", function(){
//       if (answersArray) {
//           userNotify.innerText = "Correct!";
//       }
//       else {
//           userNotify.innerText = "Wrong!";
//       }
//     });
// })


//diplaying first question
 function quizQuestions () {
    questionsLoop.innerText = questionsOpts[currentQuestionIndex].question;
    console.log(questionsOpts[currentQuestionIndex]);
    for (i= 0; i < questionsOpts[currentQuestionIndex].choices.length; i++) {
        var button = document.createElement("button");
        button.innerText = questionsOpts[currentQuestionIndex].choices[i];
        btnsDiv.appendChild(button);
    };
    button.forEach(function(btn){
        btn.addEventListener("click", function(){
          if (answersArray) {
              userNotify.innerText = "Correct!";
          }
          else {
              userNotify.innerText = "Wrong!";
          }
        });
    })
}




function nextQuestion(){
    currentQuestionIndex++;
    questionsLoop.innerText = questionsOpts[currentQuestionIndex].question;
    console.log(questionsOpts[currentQuestionIndex]);
    for (i= 0; i < questionsOpts[currentQuestionIndex].choices.length; i++) {
    var button = document.createElement("button");
    button.innerText = questionsOpts[currentQuestionIndex].choices[i];
    btnsDiv.appendChild(button);
    }
    button.forEach(function(btn){
        btn.addEventListener("click", function(){
          if (answersArray) {
              userNotify.innerText = "Correct!";
          }
          else {
              userNotify.innerText = "Wrong!";
          }
        });
    })
}

// quizQuestions()



     

// function setHighScores () {
//     // store form input for user highscore 
//     //localStorage.setItem("highScores", user highscore)
// }


// function getHighScores () {
    
//     var storedHighScores = localStorage.getItem("highScores")
// }