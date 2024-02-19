

                                                                        /*object storing questions from the quiz*/ 

var Questions = {

Q1: {
    prompt:"Commonly used data types DO NOT Include:",
    options: ["strings","booleans", "alerts", "numbers"],
    answer: "alerts"
},

Q2: {

    prompt:"The condition in an if / else statement is enclosed within",
    options: ["quotes", "curlybrackets", "parenthesis", "squarebrackets"],
    answer: "parenthesis"

},

Q3: {

    prompt:"Arrays in JavaScript can be used to store:",
    options: ["numbers and strings","other arrays","booleans","all of the above"],
    answer: "all of the above"

},

Q4: {

    prompt:"Q4: String values must be enclosed within when being assigned to variables.",
    options: ["commas","curly brackets","quotes","parenthesis"],
    answer: "quotes"

},

Q5: {

    prompt:"Q5: A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript","terminal/bash","for loop","console.log"],
    answer: "console.log"

},

}


                                                                                    /*web API's variables*/ 

var QuizQuestions = document.querySelector('#Questions'); // selecting question section from html

var myTimer = document.querySelector("#timer");

var choicesEl = document.querySelector("#answer-options");

var submit = document.querySelector( "#Submit-button");

var start = document.querySelector("#Start-Quiz");

var initials = document.querySelector("#Enter-Initials");

var reStartQuiz = document.querySelector("#restartQuiz");

                                                                                    /*quiz state*/ 

var currentQuestionIndex = 0; //position of questions object

var timePerQuestion = Questions.length * 15; // duration time per question

var timerInterval; // variable useful for setting our timer between questions



                                                                                    /*start Quiz*/ 

function StartingQuiz() {

    timerInterval = setInterval(TimeCounter, 1000);

    myTimer.textContent = timePerQuestion; // returning text content of element

    var displayingScreen = document.getElementById("quiz-screen");

    landingScreenEl.setAttribute("class","hide"); //

    QuizQuestions.removeAttribute("class");

    oneByOneQuestionQuestion();
}


function oneByOneQuestion() {

    let currentQuestion = Questions[currentQuestionIndex]; //indicating position of the Questions object

}

function clickingQuestions() {
    
  
}

function EndingQuiz() {
   
    
}

function TimeCounter() { // declaring a function to make the quiz timer working properly



}

function storingHighestScore() {



}

