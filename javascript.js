/*
1. Create a button element in HTML the queues the first question (maybe create a function that causes the first question to appear)
THEN a timer starts and I am presented with a question > timer (maybe make wrong answers in object and set conditional statement so if wrong answer is clicked then time is substracted) + HTML element divs that hold question
WHEN I answer a question (question, maybe make questions an object)
THEN I am presented with another question > need a clear condition, if user answers correctly, queue next question, make this a function
WHEN I answer a question incorrectly (i.e. wrong thing is selected from the object)
THEN time is subtracted from the clock > timer needs a conditional if wrong answer is clicked (event), then time is subtracted from clock
if the user clicks correct answer
WHEN all questions are answered or the timer reaches 0 > "win/end condition"
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score > need to create local storage save
*/


var startButton = document.querySelector(".start-button");
//structure array with objects

var question1 = {
    questionTitle: "What does HTML stand for?",
    questionAns1: "Hope to move last",
    questionAns2: "How to make link",
    questionAns3: "I dunno",
    questionAns4: "The right answer"};

var question2 = {
    questionTitle: "What can be stored in an array?",
    questionAns1: "numbers",
    questionAns2: "booleans",
    questionAns3: "strings",
    questionAns4: "all of the above"
};

document.getElementById("question-container").style.visibility = "hidden";

function startQuiz() {
    document.getElementById("question-container").style.visibility = "visible";
    // will need to start a timer
}

function loadQuestion() {
    //for loop replace
    document.getElementById("question").textContent = question1.questionTitle;
    document.getElementById("ans1").textContent = question1.questionAns1;
    document.getElementById("ans2").textContent = question1.questionAns2;
    document.getElementById("ans3").textContent = question1.questionAns3;
    document.getElementById("ans4").textContent = question1.questionAns4;
}

function nextQuestion() {
    
}

loadQuestion();
//startQuiz();
