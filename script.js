
// this code grabs the elements needed 
var startBtn = document.getElementById("quiz-button")
var quizQuestions = document.getElementById("quiz-questions")
var quizAnswer = document.getElementById("quiz-answer")
var options = document.getElementById("op")
var btnOne = document.getElementById("op1")
var btnTwo = document.getElementById("op2")
var btnThree = document.getElementById("op3")
var btnFour = document.getElementById("op4")
var quizResults = document.getElementById("quiz-results")
var correctAnswer = document.getElementById("answerHolder")
var quizScore = document.getElementById("quiz-score")
var quizTimer = document.getElementById("quiz-timer")
var buttonHolder = document.getElementById("buttonHolder")
var gameEnd = document.getElementById("game-over")
var index = 0


// this code holds the array of questions that will be asked
var questionHolder = [
    {
        question: 'Is Javascript the same as Java?',
        choices: 'A. Yes B. No',
        answer: 'B'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices: 'A.script name="xxx.js" B.script href="xxx.js" C.script src="xxx.js"',
        answer: 'C'
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: 'A.javascript B.script C.scripting D.js',
        answer: 'B'
    },
    {
        question: 'The external JavaScript file must contain the script tag.',
        choices: 'A.True B.False',
        answer: 'B'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        choices: 'A.alert("Hello World"); B.msg("Hello World"); C.alertBox("Hello World");',
        answer: 'A'
    },
    {
        question: 'How do you create a function in JavaScript?',
        choices: 'A.function=myFunction() B.function myFunction() C.function:myFunction();',
        answer: 'A'
    }
    
]

// this code will hold the inital score values 
var score = 0
var oldScore = score
var n = 10

// this is where the seconds to start with are stored
var sec = 60

// this is the timer code 
function timer() {
    var countdown = setInterval(function () {
        quizTimer.innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(countdown);
            gameOver()
        }
    }, 1000);
}

// this code will run once start button is clicked
// going to call the beginQuiz() at the end of this function as the beginTimer function should start timer and display quiz
function beginTimer() {
    timer()
    beginQuiz()
}


// this code should be invoked once the timer starts
function beginQuiz() {
       quizScore.innerHTML = `Current score ${score}` 
    if (index < questionHolder.length) {
        quizQuestions.innerHTML = questionHolder[index].question
        options.innerHTML = questionHolder[index].choices
        correctAnswer = questionHolder[index].answer 
    } else {
        gameOver()
    }
}

function answerA() {
    if (btnOne.value === correctAnswer) {
        quizResults.innerHTML = 'Correct!'
        score = score + n
    } else {
        quizResults.innerHTML = 'Incorrect!'
        if (score > 0) {
            score = score - n
        }
        if (!(oldScore < score)){
            sec = sec - 10
            quizTimer.innerHTML = `00: ${sec}`
            sec--
        }
    }
    beginQuiz(index++)
}
    

function answerB() {
    if (btnTwo.value === correctAnswer) {
        quizResults.innerHTML = 'Correct!'
        score = score + n
    } else {
        quizResults.innerHTML = 'Incorrect!'
        if (score > 0) {
            score = score - n
        }
        if (!(oldScore < score)){
            sec = sec - 10
            quizTimer.innerHTML = `00: ${sec}`
            sec--
        }
    }
    beginQuiz(index++)
}
        

function answerC() {
    if (btnThree.value === correctAnswer) {
        quizResults.innerHTML = 'Correct!'
        score = score + n
    } else {
        quizResults.innerHTML = 'Incorrect!'
        if (score > 0) {
            score = score - n
        }
        if (!(oldScore < score)){
            sec = sec - 10
            quizTimer.innerHTML = `00: ${sec}`
            sec--
        }
    }
    beginQuiz(index++)
}
        

function answerD() {
    if (btnFour.value === correctAnswer) {
        quizResults.innerHTML = 'Correct!'
        score = score + n
    } else {
        quizResults.innerHTML = 'Incorrect!'
        if (score > 0) {
            score = score - n
        }
        if (!(oldScore < score)){
            sec = sec - 10
            quizTimer.innerHTML = `00: ${sec}`
            sec--
        }
    }
    beginQuiz(index++)
}

function gameOver(){
    gameEnd.innerHTML = ('GAME OVER')
    startBtn.setAttribute('class', 'hide')
    quizQuestions.setAttribute('class', 'hide')
    options.setAttribute('class', 'hide')
    buttonHolder.setAttribute('class', 'hide')
    quizResults.setAttribute('class', 'hide')
    quizScore.setAttribute('class', 'hide')
    quizTimer.setAttribute('class', 'hide')
    var btnEnd = document.createElement("button")
    btnEnd.innerHTML = 'Save Score'
    document.body.appendChild(btnEnd)
    btnEnd.setAttribute('onclick', 'saveScore()')

}

function saveScore(){
    var initals = prompt('Please enter initals ex (John Doe > JD)')
    if (initals == null){
        alert('Input not valid please enter 2 alphabetical letters')
        return
    }
    var scoreReport = document.createElement("h4")
    document.body.appendChild(scoreReport)
    scoreReport.innerHTML = `${initals} your score is ${score}`
    localStorage.setItem('score', score)
    localStorage.setItem('initials', initals)
}






