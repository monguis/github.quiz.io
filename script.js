
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

renderIntro();


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
    questionTitle.textContent = str;
    optionList.innerHTML = "";
    auxForm.innerHTML = ('<input class="form-control col mb-3 form-control-lg" type="text" placeholder="Enter your name please"><button type="submit" id="submitBtn"  class="btn btn-primary mb-2">Confirm</button>');
    auxForm.setAttribute("class", "col-12");
    contentDiv.appendChild(auxForm);
}

function renderIntro(){

    titleText.textContent = "Welcome";
    startQuizbtn.setAttribute("style", "display:block;margin: 0 auto");
}


function addScore(namestr, scorenum) {
    var newScore = { name: namestr, score: scorenum };
    ScoreArray.push(newScore);
    localStorage.setItem("scoreBoard", JSON.stringify(ScoreArray));

}



function timer() {
    var countdownInterval = setInterval(function () {

        if (secondCounter <= 0) {
            renderOutro("That was your last Second")
            timepar.textContent = "Time's Up";
            clearInterval(countdownInterval);

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
    if (event.target.matches("li") && event.target.getAttribute("class") !== "list-group-item score" ) {
        if (event.target.textContent === questions[questionCount].answer) {
            printAns(true);
            indScore += 20;
        } else {
            printAns(false);
            secondCounter += -20;
        }

    questionCount++;
    if (questionCount < questions.length) {
        renderQuestion(questionCount)
    } else {
        secondCounter = 0;
        renderOutro("All Done");
    }
} else {
    return;
}

});

startQuizbtn.addEventListener("click", function (event) {
    event.preventDefault();
    questionCount = 0;
    renderQuestion(questionCount);
    secondCounter = questions.length * 15;
    startQuizbtn.setAttribute("style", "display:none;");
    timer();
});


auxForm.addEventListener("submit", function (event) {

    event.preventDefault();
    if (auxForm.querySelector("input").value !== "") {
        addScore(auxForm.querySelector("input").value, indScore)
        auxForm.innerHTML = "";
        renderIntro();
        indScore = 0;
    }
});

scoreLink.addEventListener("click", function () {

    if (!localStorage.getItem("scoreBoard")) {

        return;

    } else {


        titleText.textContent = "Scoreboard";
        startQuizbtn.setAttribute("style", "display:none;");

        var auxArray = JSON.parse(localStorage.getItem("scoreBoard"));
        optionList.innerHTML = "";
        for (var i = 0; i < auxArray.length; i++) {
            var li = document.createElement("li");
            li.textContent = `Name: ${auxArray[i].name} Score: ${auxArray[i].score} points`;
            li.setAttribute("class", "list-group-item score");
            optionList.appendChild(li);
        }
    }
});