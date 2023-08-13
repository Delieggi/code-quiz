/*
WHEN I click the start button > need to create a button element in HTML the queues the first question (maybe create a function that causes the first question to appear)
THEN a timer starts and I am presented with a question > timer (maybe make wrong answers in object and set conditional statement so if wrong answer is clicked then time is substracted) + HTML element divs that hold question
WHEN I answer a question (question, maybe make questions an object)
THEN I am presented with another question > need a clear condition, if user answers correctly, queue next question, make this a function
WHEN I answer a question incorrectly (i.e. wrong thing is selected from the object)
THEN time is subtracted from the clock > timer needs a conditional if wrong answer is clicked (event), then time is subtracted from clock
WHEN all questions are answered or the timer reaches 0 > "win/end condition"
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score > need to create local storage save
*/


var startButton = document.querySelector(".start-button");
