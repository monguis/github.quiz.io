
var counter = 75;
var titleText = document.getElementById("questionTitle")
var timepar = document.getElementById("timer");

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
];

function renderQuestion(index) {


    questions[index].title;
}




timer()

function timer() {
    console.log("entro")
    var counter = 10;
    var countdownInterval = setInterval(function () {


        if (counter === 0) {
            console.log(counter)
            timepar.textContent = "Time's Up";
            clearInterval(countdownInterval);

        } else if (counter === 1) {
            console.log(counter)
            timepar.textContent = `${counter} Second Left`;
            counter--;
        } else {
            console.log(counter)
            timepar.textContent = `${counter} Seconds Left`;
            counter--;
        }
    }, 1000);
}