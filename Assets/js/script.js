var button1 = document.querySelector("#startBtn");
var header = document.querySelector("#header");
var subHeading = document.querySelector("#subHeading");
var countdown = document.getElementById("countdown");
var hr = document.createElement("hr");
var result = document.getElementById("result");
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
  //   {
  //     title:
  //       "Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified?",
  //     choices: ["If-Else", "For", "While", "If"],
  //     correctA: "For",
  //   },
  //   {
  //     title: "A loop that never ends is referred to as a(n)_________.?",
  //     choices: ["While loop", "Infinite loop", "Recursive loop", "For loop"],
  //     correctA: "Infinite loop",
  //   },
  //   {
  //     title:
  //       "What is the term used for a block of code that is executed repeatedly until a certain condition is met?",
  //     choices: ["Function", "Loop", "Condition", "Variable"],
  //     correctA: "Loop",
  //   },
  //   {
  //     title:
  //       "Which data structure is used for storing a collection of elements in a non-linear fashion?",
  //     choices: ["Array", "Stack", "Queue", "Tree"],
  //     correctA: "Tree",
  //   },
  //   {
  //     title: "Which of the following is not a web browser?",
  //     choices: ["Chrome", "Safari", "Firefox", "Photoshop"],
  //     correctA: "Photoshop",
  //   },
  //   {
  //     title: "Which of the following is not a programming language?",
  //     choices: ["HTML", "CSS", "MySQL", "JavaScript"],
  //     correctA: "MySQL",
  //   },
  //   {
  //     title: "Which of the following is a type of computer network?",
  //     choices: [
  //       "Local Area Network (LAN)",
  //       "Wide Area Network (WAN)",
  //       "Metropolitan Area Network (MAN)",
  //       "All of the above",
  //     ],
  //     correctA: "All of the above",
  //   },
  //   {
  //     title: "During program development, software requirements specify?",
  //     choices: [
  //       " How the program will accomplish the task",
  //       "What the task is that the program will perform.",
  //       "How to divide the task into subtasks",
  //       "How to test the program when it is done",
  //     ],
  //     correctA: "What the task is that the program will perform.",
  //   },
  //   {
  //     title: "What does HTML stand for?",
  //     choices: [
  //       "Hyper Trainer Marking Language",
  //       "Hyper Text Marketing Language",
  //       "Hyper Text Markup Language",
  //       "Hyper Text Markup Leveler",
  //     ],
  //     correctA: "Hyper Text Markup Language",
  //   },
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
          result.textContent = " Correct";
        }, 50);
        score++;
        // setTimeout(() => {
        //   counter++;
        //   result.textContent = "";
        //   showQuestion();
        // }, 1000);
      } else {
        setTimeout(() => {
          result.textContent = "Incorrect";
        }, 50);
        score--;
        // setTimeout(() => {
        //   counter++;
        //   showQuestion();
        //   result.textContent = "";
        // }, 1000);

        time = time - 10;
      }
    });
  }
}
var initals = document.getElementById("initals");

var totalScore = {
  initals: initals.value,
  points: score.value,
};

localStorage.setItem("score", JSON.stringify(totalScore));
