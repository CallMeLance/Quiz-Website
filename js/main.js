/* 
    This is an IIFE - Immediately Invoked Function Expression.
    IIFE's run as soon as their defined. IIFE's are commonly used to keep variables and functions outside of the globalscope, and they tend to work better if you're running multiple scripts

    */

// This variable exists in the global scope, which it means it's less secure and can be accessed by anything

var global;

(function() {
    // Because this variable is inside of a IIFE, it is not in the globalscope
    var variable = 10;

    // Make references to our elements that we're going to interact with
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitContainer = document.getElementById("submit");
    var resetContainer = document.getElementById("reset");

    var myQuestions = [],

    // What does a quiz question consist of?
    // Question text, answer choices, correct answer

    var question1 = {
        question: "What color is the sky?",
        answers: {
            a: "Blue",
            b: "Brown",
            c: "Green"
        },
        correctAnswer: "a"
    }

    console.log(question1.question); // Get the question text
    console.log(question.answers.b); // Get answer b

    var question2 = {
        question: "How many seconds in 5 minutes",
        answers: {
            a: "60",
            b: "300",
            c: "600"
        },
        correctAnswer: "b"
        
    }

    console.log(question2.question);
    console.log(question.answers.c);

    var question3 = {
        question: "What is the country just south of the United States?",
        answers: {
            a: "Canada",
            b: "Mexico",
            c: "Oklahoma"
        },
        correctAnswer: "b"
    }
    // Add the question objects to our array of questions
    myQuestions.push(question1,question2, question3);

    // Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz() {

    }
    // Function to show the results of the quiz
    function showResults() {

    }
    // Function to reset the quiz
    function resetQuiz() {
        
    }
})();