
//retrieve info from localStorage
//if data doesn't exist create new file
//if the user clicks on highscores pull data and display to user
//use the list items to display the top players
//if the user plays save the data in localstorage




var secondCounter = 0;
var titleText = document.getElementById("questionTitle")
var timepar = document.getElementById("timer");
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var optionList = document.getElementById("optionList");
var questionCount = 0;
var startQuizbtn = document.getElementById("startQuiz");
var answerDiv = document.getElementById("answerDiv");
var ScoreArray = [];
var contentDiv = document.getElementById("content");
var auxForm = document.createElement("form");
var scoreLink = document.getElementById("scoresLink");
var indScore = 0;


if (!localStorage.getItem("scoreBoard")) {
    localStorage.setItem("scoreBoard", JSON.stringify(ScoreArray));
} else {
    ScoreArray = JSON.parse(localStorage.getItem("scoreBoard"));
    console.log(JSON.parse(localStorage.getItem("scoreBoard")));

}



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
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    }
];


function renderOutro(str) {

    optionList.innerHTML = "";
    questionTitle.textContent = str;
    auxForm.innerHTML = ('<input class="form-control mb-3 form-control-lg" type="text" placeholder="Enter your name please"><button type="submit" id="submitBtn"  class="btn btn-primary mb-2">Confirm</button>');
    contentDiv.appendChild(auxForm);
    li.setAttribute("class", "list-group-item list-group-item-action");
}

function addScore(namestr, scorenum) {
    var newScore = { name: namestr, score: scorenum };
    ScoreArray.push(newScore);
    localStorage.setItem("scoreBoard", JSON.stringify(ScoreArray));

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

function renderQuestion(index) {
    optionList.innerHTML = "";
    questionTitle.textContent = questions[index].title;

    for (var i = 0; i < questions[index].choices.length; i++) {
        var li = document.createElement("li");
        li.textContent = questions[index].choices[i];
        li.setAttribute("class", "list-group-item list-group-item-action");
        optionList.appendChild(li);
    }

}

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

optionList.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("li")) {
        if (event.target.textContent === questions[questionCount].answer) {
            printAns(true);
            indScore += 20;
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

startQuizbtn.addEventListener("click", function (event) {
    event.preventDefault();
    questionCount = 0;
    renderQuestion(questionCount)
    secondCounter = 75;
    startQuizbtn.setAttribute("style", "display:none;");
    timer();
});


auxForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addScore(auxForm.querySelector("input").value, indScore)
    auxForm.innerHTML = "";
    titleText.textContent = "Welcome";
    startQuizbtn.setAttribute("style", "display:block;margin: 0 auto");
});

scoreLink.addEventListener("click", function () {

    if(!localStorage.getItem("scoreBoard")){
        
        console.log("no hay nada");
        return;
    } else {
        
    titleText.textContent = "Scoreboard";
        console.log("ya hay algo");
    }
});