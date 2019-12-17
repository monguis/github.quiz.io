
var counter = 75;
var titleText = document.getElementById("questionTitle")
var timepar = document.getElementById("timer");
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var optionList = document.getElementById("optionList");

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
    questionTitle.textContent = questions[index].title;
    
    for (var i =0 ; i<questions[index].choices.length;i++){
        console.log("entro al for");
        var li =  document.createElement("li");
        li.textContent = questions[index].choices[i];
        optionList.appendChild(li);
    }
}
renderQuestion(0)



timer()

function timer() {
    console.log("entro")
    var countdownInterval = setInterval(function () {


        if (counter <= 0) {
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

optionList.addEventListener("click",function(event){
    event.preventDefault();
    if(event.target.matches("li")) {
        if(event.target.textContent === questions[0].answer){
            console.log("sigue jalando al cien");
        }else{
            counter+= -20;
            console.log(counter)
        }
    } 
});