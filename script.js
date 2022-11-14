// this code grabs the elements needed 
var startBtn = document.getElementById("quiz-button")
var quizQuestions = document.getElementById("quiz-questions")
var quizAnswer = document.getElementById("quiz-answer")
var optionOne = document.getElementById("op1")
var optionTwo = document.getElementById("op2")
var optionThree = document.getElementById("op3")
var optionFour = document.getElementById("op4")
var quizResults = document.getElementById("quiz-results")
var quizScore = document.getElementById("quiz-score")
var quizTimer = document.getElementById("quiz-timer")

// this code holds the array of questions that will be asked
var questionHolder = [
    {
        question: 'Is Javascript the same as Java?',
        choices: ['a. Yes', 'b. No'],
        answer: 1
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices: ['a. <script name="xxx.js">','b. <script href="xxx.js">','c. <script src="xxx.js">'],
        answer: 2
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['<javascript>', '<script>', '<scripting>', '<js>'],
        answer: 1
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        choices: ['True', 'False'],
        answer: 1
    }
]


// this code will run once start button is clicked
function beginTimer() {

}


// this code should be invoked once the timer starts
questionHolder.forEach(beginQuiz)

function beginQuiz(){
    quizQuestions.innerHTML = questionHolder[0].question
    //quizAnswer.innerHTML = questionHolder[0].choices.join(' ')
    optionOne.innerHTML = questionHolder[0].choices[0]
    optionTwo.innerHTML = questionHolder[0].choices[1]
    optionThree = document.getElementById('op3').disabled = true
    optionFour = document.getElementById('op4').disabled = true

    
    optionOne.addEventListener('click', selectedA )
    optionTwo.addEventListener('click', selectedB)

    function selectedA(){
        quizResults.innerHTML = 'Wrong!'
    }
    function selectedB(){
        quizResults.innerHTML = 'Correct!'
    }

}