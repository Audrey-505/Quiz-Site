
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
var index = 0
var bIndex = 0 

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
        question: 'The external JavaScript file must contain the <script> tag.',
        choices: 'A.True B.False',
        answer: 'B'
    }
]

// this code will hold the score
var score = 0
var n = 10

// this is the timer code 
function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('quiz-timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
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
    quizQuestions.innerHTML = questionHolder[index].question
    options.innerHTML = questionHolder[index].choices
    correctAnswer = questionHolder[index].answer
    quizScore.innerHTML = score
    //quizResults.innerHTML = ' '
    //testFirst()
}

function answerA(){
    if (btnOne.value === correctAnswer){
        quizResults.innerHTML = 'Correct!'
        score = score + n
    } else {
        quizResults.innerHTML = 'Incorrect!'
        if (score > 0){
            score = score - n
        }
    }
    beginQuiz(index++)
}

function answerB(){
    if (btnTwo.value === correctAnswer){
        quizResults.innerHTML = 'Correct!'
        score = score + n
    } else {
        quizResults.innerHTML = 'Incorrect!'
        if (score > 0){
            score = score - n
        }
    }
    beginQuiz(index++)
}

function answerC(){
    if (btnThree.value === correctAnswer){
        quizResults.innerHTML = 'Correct!'
        score = score + n
    } else {
        quizResults.innerHTML = 'Incorrect!'
        if (score > 0){
            score = score - n
        }
    }
    beginQuiz(index++)
}

function answerD(){
    if (btnFour.value === correctAnswer){
        quizResults.innerHTML = 'Correct!'
        score = score + n
    } else {
        quizResults.innerHTML = 'Incorrect!'
        if (score > 0){
            score = score - n
        }
    }
    beginQuiz(index++)
}

/*function testFirst() {
  //var btnArray = [btnOne, btnTwo, btnThree, btnFour]
  var correctAnswer = questionHolder[index].answer

 if (btnOne.click == true){
    if (btnOne.value === correctAnswer){
        quizResults.innerHTML = 'Correct!'
    }
 }  else if (btnTwo.click == true){
    if (btnTwo.value === correctAnswer){
        quizResults.innerHTML = 'Correct!'
    }
 } else if (btnThree.clicked == true){
    if (btnThree.value === correctAnswer){
        quizResults.innerHTML = 'Correct!'
    }
 } else if (btnFour.clicked == true){
    if (btnFour.value === correctAnswer){
        quizResults.innerHTML = 'Correct!'
    } 
 } else {
    quizResults.innerHTML = 'Incorrect!'
 }

 beginQuiz(index++)

} */


/* function beginQuiz() {
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

       
} */


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





