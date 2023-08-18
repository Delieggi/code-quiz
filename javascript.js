/*
1. Create a button element in HTML that is used to queue the first question and start a timer.
2. Create placeholder html elements for the question and possible answers.
3. Create a function that:
    - causes the question/answer elements to appear
    - causes the start button to dissapear
    - loads the questions content into the existing html elements
4. Create function with a conditional statement that:
    -validates if the user selects the right answer button
    -takes time off the timer if they chose wrong
    -if they answer correct, then run function 3?
5. Create a function that:
    -if time reaches 0, the quiz ends, "Try again!"
    - all correct answers have been clicked, the quiz ends "You did it!"
THEN I can save my initials and my score > need to create local storage save
*/

var questionEl = document.querySelector("#question");
var button1 = document.querySelector("#ans1");
var button2 = document.querySelector("#ans2");
var button3 = document.querySelector("#ans3");
var button4 = document.querySelector("#ans4");
//make the rest of the buttons as above
var currentQuestion = 0;
var startButton = document.querySelector(".start-button");
//structure array with objects

var count = 3; //keep track of correct number of right answers selected

// changed object questions to array with objects per advice of Lori (instructor)
var questions = [
    {
    questionTitle: "What does HTML stand for?",
    posAns: ["HyperText Markup Language", "HotMail Markup Language", "HyperText Markup Loop", "Any of the above"],
    correct: "HyperText Markup Language"
    },
    {
    questionTitle: "What can be stored in an array?",
    posAns: ["numbers", "booleans", "strings", "all of the above"],
    correct: "all of the above"
    }
]
    

// Event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);

//Page loads with question and answer elements hidden
document.getElementById("question-container").style.visibility = "hidden";

// Hides the start button, shows the question elements, starts the timer
function startQuiz() {
    document.getElementById("question-container").style.visibility = "visible";
    document.querySelector(".start-button").style.visibility = "hidden";
    //startTimer() -need to write this function
    loadQuestion(); 
}


button1.addEventListener("click", checkQuestion);
button2.addEventListener("click", checkQuestion);
button3.addEventListener("click", loadQuestion);
button4.addEventListener("click", loadQuestion);

// loops through questions array to render questions
function loadQuestion() {
    //for loop 
    for (let i = 0; i < questions[currentQuestion].posAns.length; i++) {
        button1.textContent = questions[currentQuestion].posAns[0];
        button2.textContent = questions[currentQuestion].posAns[1];
        button3.textContent = questions[currentQuestion].posAns[2]; 
        button4.textContent = questions[currentQuestion].posAns[3];
    }
    questionEl.textContent = questions[currentQuestion].questionTitle;
    currentQuestion += 1;

    
}
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
function checkQuestion(event) {
    //use this to validate user choice
    
    if (questions[currentQuestion].correct == event.target.value) {
        alert("That is correct!");
        console.log("Yes")
        loadQuestion();
    }
    // else {
    //     alert("Try again!") }
    };



