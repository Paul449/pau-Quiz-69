

                                                                        /*object storing questions from the quiz*/ 

var Questions = {

Q1: {                                                                          // Question 1 with the answer options stored
    prompt:"Commonly used data types DO NOT Include:",
    options: ["strings","booleans", "alerts", "numbers"],
    answer: "alerts"
},

Q2: {                                                                          // Question 2 with the answer options stored

    prompt:"The condition in an if / else statement is enclosed within",
    options: ["quotes", "curlybrackets", "parenthesis", "squarebrackets"],
    answer: "parenthesis"

},

Q3: {                                                                          // Question 3 with the answer options stored

    prompt:"Arrays in JavaScript can be used to store:",
    options: ["numbers and strings","other arrays","booleans","all of the above"],
    answer: "all of the above"

},

Q4: {                                                                          // Question 4 with the answer options stored

    prompt:"Q4: String values must be enclosed within when being assigned to variables.",
    options: ["commas","curly brackets","quotes","parenthesis"],
    answer: "quotes"

},

Q5: {                                                                          // Question 5 with the answer options stored

    prompt:"Q5: A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript","terminal/bash","for loop","console.log"],
    answer: "console.log"

},

}

                                                                                /*web API's variables from HTML elements*/ 


var QuizQuestions = document.querySelector("#questions"); //targeting questions section from HTML document

var mytimer = document.querySelector("#counter"); // targeting counter from HTML

var possibleAnswers = document.querySelector("#answer-options"); //targeting answers from each question

var submit = document.querySelector("#submit"); //targeting submit button

var startQuiz = document.querySelector("#start-button"); // targeting start quiz button

var student = document.querySelector("#student-initials"); // targeting input box at the end of quiz by putting the initials

var feedbackMessage = document.querySelector("#feedback"); // targeting feedback element from HTML

var reStartBtn = document.querySelector("#go-back");

var currentQuestionIndex = 0; // index position of Questions object for futher access

var timePerQuestions = Questions.length;

var timerIntervalQuiz;


/*Function 1: starting quiz */

function quizStart() {

    timerIntervalQuiz = setInterval(timerCounter,1000);

    mytimer.textContent = timePerQuestions;

    var DisplayingScreen = document.getElementById("quiz-screen"); 

    DisplayingScreen.setAttribute( "class","hide"); // adding a class atttribute with a value of hide

    QuizQuestions.removeAttribute("class");

    promptQuestion(); // calling promptQuestion function to display questions
}

/*function 2: display questions */

function promptQuestion() {

    var currentQuestion = questions[currentQuestionIndex]; // targeting index position from questions in the question object

    var promptingQuestions = document.getElementById("questions");

    promptingQuestions.textContent = currentQuestion.prompt;

    possibleAnswers.innerHTML = "";

    currentQuestion.options.forEach(function (selection, i) {

            var selectAnswerBtn = document.createElement("button");

            choiceBtn.setAttribute("value", selection);

            selectAnswerBtn.textContent = i + 1 + ". " + selection;

            selectAnswerBtn.onclick = questionClick;

            possibleAnswers.appendChild(selectAnswerBtn);
        }
    );
}


/* function 3: click answers */

function clickingAnswer() {

    if (this.value !== Questions[currentQuestionIndex].answer) {

        timePerQuestions -= 10;

        if (timePerQuestions < 0) {

            timePerQuestions = 0;
        }

        mytimer.textContent = timePerQuestions;

        feedbackMessage.textContent = `Incorrect! The correct answer was ${Questions[currentQuestionIndex].answer}.`; //

        feedbackMessage.style.color = "red"; // displaying incorrect answers in red using css properties in the DOM manipulated by Javascript

    } else {

        feedbackMessage.textContent = "Your answer is Correct!"; // displaying feedback saying correct

        feedbackMessage.style.color = "green"; // displaying correct answers in red using css properties in the DOM manipulated by Javascript
    }

    feedbackMessage.setAttribute("class","feedback");

    setTimeout(function () {
        feedbackMessage.setAttribute("class","feedback hide");}, 2000);

    currentQuestionIndex++;

    if ( currentQuestionIndex === Questions.length) {

        endingQuiz();

    } else {

        promptQuestion();
    }
}


/* function 4: endingQuiz */

function endingQuiz() {

    clearInterval(timerIntervalQuiz); // cancels the repeater time once it hits zero from our set interval function

    var endScreenEl = document.getElementById( "quiz-end"); //

    endScreenEl.removeAttribute("class"); //

    var finalScoreEl = document.getElementById("score-final"); //

    finalScoreEl.textContent = timePerQuestions; //

    questionsEl.setAttribute( "class","hide"); //
}
 



/*function 5: QuizCounter */

function timerCounter() { // function

    timePerQuestions--; // decreasing time from counter

    mytimer.textContent = timePerQuestions; //

    if (time <= 0) {   //

        endingQuiz();
    }
}


/*function 6: storing highscores from quiz */

startQuiz.addEventListener("click",quizStart);