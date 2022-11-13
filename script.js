// this code grabs the elements needed 
var startBtn = document.getElementById("quiz-button")
var quizQuestions = document.getElementById("quiz-questions")
var quizAnswers = document.getElementById("quiz-answers")
var quizResults = document.getElementById("quiz-results")
var quizScore = document.getElementById("quiz-score")
var quizTimer = document.getElementById("quiz-timer")

// this code holds the array of questions that will be asked
questionsArray = ['Is Javascript the same as Java?', 'Inside which HTML element do we put the JavaScript?', 'What is the correct syntax for referring to an external script called "xxx.js"?', 'The external JavaScript file must contain the <script> tag.', 'How do you write "Hello World" in an alert box?'];


// this code will run once start button is clicked
function beginTimer() {

}


// this code should be invoked once the timer starts 
for(i = 0; i < questionsArray.length; i++){
        quizQuestions.innerHTML = questionsArray[0]
    }

