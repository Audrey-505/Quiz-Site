
// this code grabs the elements needed 
var startBtn = document.getElementById("quiz-button")
var quizQuestions = document.getElementById("quiz-questions")
var quizAnswer = document.getElementById("quiz-answer")
var options = document.getElementById("op")
var optionOne = document.getElementById("op1")
var optionTwo = document.getElementById("op2")
var optionThree = document.getElementById("op3")
var optionFour = document.getElementById("op4")
var quizResults = document.getElementById("quiz-results")
var quizScore = document.getElementById("quiz-score")
var quizTimer = document.getElementById("quiz-timer")
var index = 0
var bIndex = 0 

// this code holds the array of questions that will be asked
var questionHolder = [
    {
        question: 'Is Javascript the same as Java?',
        choices: ['A. Yes B. No'],
        answer: 1
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices: ['A. <script name="xxx.js">  B. <script href="xxx.js">  C. <script src="xxx.js">'],
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

// this code will hold the score
var score = 0

// this code will run once start button is clicked
function beginTimer() {

}


// this code should be invoked once the timer starts
/* function beginQuiz(){
    for (i = 0; i < questionHolder.length; i++){
        quizQuestions.innerHTML = questionHolder[i].question
    }
 
} */


    /* function beginQuiz(){
    quizQuestions.innerHTML = questionHolder[index].question
    optionOne.innerHTML = questionHolder[index].choices[0]
    optionTwo.innerHTML = questionHolder[index].choices[1]
    
    optionOne.addEventListener('click', questionTwoCorrect)
    optionTwo.addEventListener('click', questionTwoIncorrect)

    function questionTwoCorrect(){
      quizResults.innerHTML = 'Wrong!'
      beginQuiz(index++)
    }

    function questionTwoIncorrect(){
        quizResults.innerHTML = 'Correct!'
        beginQuiz(index++) 
    }   
        
} */

function beginQuiz() {
    quizQuestions.innerHTML = questionHolder[index].question
    options.innerHTML = questionHolder[index].choices[bIndex]
    
    var btnOne = document.createElement("button")
    btnOne.innerHTML = 'A.'
    document.getElementById('buttonHolder').appendChild(btnOne)
    btnOne.addEventListener('click', optionA)

    function optionA() {
        quizResults.innerHTML = 'Wrong!';
        beginQuiz(index++)
        }

    var btnTwo = document.createElement("button")
    btnTwo.innerHTML = 'B.'
    document.getElementById('buttonHolder').appendChild(btnTwo)
    btnTwo.addEventListener('click', optionB)

    function optionB() {
        quizResults.innerHTML = 'Correct!';
        beginQuiz(index++)
    }

    var btnThree = document.createElement("button")
    btnThree.innerHTML = 'C.'
    document.getElementById('buttonHolder').appendChild(btnThree)

    var btnFour = document.createElement("button")
    btnFour.innerHTML = 'D.'
    document.getElementById('buttonHolder').appendChild(btnFour)

       
}





