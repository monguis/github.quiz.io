
var secondCounter = 0;
var titleText = document.getElementById("questionTitle")
var timepar = document.getElementById("timer");
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var optionList = document.getElementById("optionList");
var questionCount = 0;
var startQuizbtn = document.getElementById("startQuiz");
var answerDiv = document.getElementById("answerDiv");

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
    },{
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },{
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },{
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
];

function renderQuestion(index) {
    optionList.innerHTML = "";
    questionTitle.textContent = questions[index].title;

    for (var i = 0; i < questions[index].choices.length; i++) {
        console.log("entro al for");
        var li = document.createElement("li");
        li.textContent = questions[index].choices[i];
        li.setAttribute("class", "list-group-item list-group-item-action");
        optionList.appendChild(li);
    }

}

function renderOutro(str) {

    optionList.innerHTML = "";
    questionTitle.textContent = str;




}

function timer() {
    var countdownInterval = setInterval(function () {

        if (secondCounter <= 0) {

            timepar.textContent = "Time's Up";
            clearInterval(countdownInterval);
            renderOutro("That was your last Second")

        } else if (secondCounter === 1) {

            timepar.textContent = `${secondCounter} Second Left`;
            secondCounter--;

        } else {

            timepar.textContent = `${secondCounter} Seconds Left`;
            secondCounter--;

        }
    }, 1000);
}

optionList.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("li")) {
        if (event.target.textContent === questions[questionCount].answer) {
            printAns(true);
        } else {
            printAns(false);
            secondCounter += -20;
        }
    }

    questionCount++;
    if (questionCount < questions.length) {
        renderQuestion(questionCount)
    } else {
        renderOutro("All Done");
    }


});

function printAns(bool) {
    auxClass = "alert alert-danger";
    str = "Wrong 20 seconds less";
    if (bool) {
        auxClass = "alert alert-success";
        str = "Correct";
    }
    answerDiv.setAttribute("style", "display:block;");
    answerDiv.textContent = str;
    answerDiv.setAttribute("class", auxClass);
    setTimeout(function () {
        answerDiv.setAttribute("style", "display:none;");
    }, 500);
}




startQuizbtn.addEventListener("click", function () {
    event.preventDefault();
    questionCount = 0;
    renderQuestion(questionCount)
    secondCounter = 75;
    startQuizbtn.setAttribute("style", "display:none;");
    timer();
});
