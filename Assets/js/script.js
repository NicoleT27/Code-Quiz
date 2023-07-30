var button1 = document.querySelector("#startBtn");
var header = document.querySelector("#header");
var subHeading = document.querySelector("#subHeading");
var countdown = document.getElementById("countdown");
var hr = document.createElement("hr");
var counter = 0;
var timerEnd;
function startQuiz() {
  button1.setAttribute("style", "display: none;");
  header.innerText = null;
  subHeading.innerText = null;
  timerEnd = setInterval(startTime, 1000);
  showQuestion();
}

var startingMinutes = 10;
var time = startingMinutes * 60;
var multiChoice = [
  {
    title:
      "_______ is the process of finding errors and fixing them within a program.",
    choices: ["Compiling", "Executing", "Debugging", "Scanning"],
    correctA: "Debugging",
  },
  {
    title:
      "Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified?",
    choices: ["If-Else", "For", "While", "If"],
    correctA: "For",
  },
  {
    title: "A loop that never ends is referred to as a(n)_________.?",
    choices: ["While loop", "Infinite loop", "Recursive loop", "For loop"],
    correctA: "Infinite loop",
  },
];

function startTime() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdown.innerHTML = ` ${minutes} : ${seconds}`;
  time--;
  if (time < 0) {
    clearInterval(timerEnd);
  }
}

startBtn.addEventListener("click", startQuiz);
var score = 0;
function showQuestion() {
  document.getElementById("choices").textContent = "";

  var questions = document.getElementById("questions");
  questions.classList.remove("hide");
  var currentQuestion = multiChoice[counter];
  questions.classList.add("show");
  var questionsTitle = document.getElementById("questionTitle");
  questionsTitle.innerHTML = currentQuestion.title;

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var currentChoice = currentQuestion.choices[i];
    var button = document.createElement("button");
    button.innerText = currentChoice;
    button.setAttribute("class", "options");

    document.getElementById("choices").appendChild(button);

    button.addEventListener("click", function (event) {
      var buttonResult = event.target.innerText;

      if (buttonResult === currentQuestion.correctA) {
        setTimeout(() => {
          document.getElementById("result").textContent = " Correct";
        }, 50);
        document.getElementById("result").textContent = "";
       
        score++;
        counter++;
        showQuestion();
      } else {
        setTimeout(() => {
          document.getElementById("result").textContent = "Incorrect";
        }, 50);
        document.getElementById("result").textContent = "";
        event.preventDefault;
        score--;
        counter++;
        time = time - 10;
        showQuestion();
      }
    });
  }
}
