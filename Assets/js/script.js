var startBtn = document.querySelector("#startBtn");
var heading = document.querySelector("#heading");
var subHeading = document.querySelector("#subHeading");
var countdown = document.getElementById("countdown");
var result = document.getElementById("result");
var initals = document.getElementById("initals");
var points = document.getElementById("points");
var highScoreEl = document.getElementById("highscores");
var leaderboardEl = document.getElementById("leaderboard");
var yourScore = document.getElementById("yourScore");
var scoreLink = document.getElementById("scoreLink");
var button = document.createElement("button");
var endPage = document.getElementById("endPage");
var counter = 0;
var score = 0;
var timerEnd;

function startQuiz() {
  startBtn.setAttribute("style", "display: none;");
  heading.innerText = null;
  subHeading.innerText = null;
  timerEnd = setInterval(startTime, 1000);
  showQuestion();
}

var startingMinutes = 5;
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
  {
    title:
      "What is the term used for a block of code that is executed repeatedly until a certain condition is met?",
    choices: ["Function", "Loop", "Condition", "Variable"],
    correctA: "Loop",
  },
  {
    title:
      "Which data structure is used for storing a collection of elements in a non-linear fashion?",
    choices: ["Array", "Stack", "Queue", "Tree"],
    correctA: "Tree",
  },
  {
    title: "Which of the following is not a web browser?",
    choices: ["Chrome", "Safari", "Firefox", "Photoshop"],
    correctA: "Photoshop",
  },
  {
    title: "Which of the following is not a programming language?",
    choices: ["HTML", "CSS", "MySQL", "JavaScript"],
    correctA: "MySQL",
  },
  {
    title: "Which of the following is a type of computer network?",
    choices: [
      "Local Area Network (LAN)",
      "Wide Area Network (WAN)",
      "Metropolitan Area Network (MAN)",
      "All of the above",
    ],
    correctA: "All of the above",
  },
  {
    title: "During program development, software requirements specify?",
    choices: [
      " How the program will accomplish the task",
      "What the task is that the program will perform.",
      "How to divide the task into subtasks",
      "How to test the program when it is done",
    ],
    correctA: "What the task is that the program will perform.",
  },
  {
    title: "What does HTML stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler",
    ],
    correctA: "Hyper Text Markup Language",
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

function showQuestion() {
  document.getElementById("choices").textContent = "";
  if (counter == multiChoice.length) {
    endQuiz();
    return;
  }

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
        setTimeout(() => {
          result.textContent = "";
        }, 700);
      } else {
        setTimeout(() => {
          result.textContent = "Incorrect";
        }, 50);
        setTimeout(() => {
          result.textContent = "";
        }, 700);

        time = time - 10;
      }
      setTimeout(() => {
        counter++;
        showQuestion();
      }, 450);
    });
  }
}

function endQuiz() {
  clearInterval(timerEnd);
  if (score < 0) {
    score = 0;
  }
  var questionsTitle = document.getElementById("questionTitle");
  questionsTitle.setAttribute("style", "display:none");
  setTimeout(() => {
    result.textContent = "";
  }, 0);

  yourScore.classList.remove("hide");
  yourScore.classList.add("show");
  yourScore.textContent = "Yourscore is" + " " + [score];
  initals.classList.remove("hide");
  initals.classList.add("show");

  button.innerText = "Submit";
  button.setAttribute("id", "submit");
  document.body.appendChild(button);

  button.addEventListener("click", submit);

  var a = document.createElement("a");
  var link = document.createTextNode("Back to Homepage");
  a.appendChild(link);
  a.setAttribute("style", "font-size:30px; margin-left: 525px;");
  a.href = "index.html";
  document.body.appendChild(a);
}

function submit() {
  button.setAttribute("style", "display:none;");
  yourScore.classList.remove("show");
  yourScore.classList.add("hide");
  var endPage = document.getElementById("endPage");
  endPage.removeAttribute("class");
  initals.classList.remove("show");
  initals.classList.add("hide");
  button = document.getElementById("clear");
  button.setAttribute("style", "display:block");
  var scoreBoard = JSON.parse(localStorage.getItem("totalScore")) || [];
  var totalScore = {
    initals: initals.value,
    points: score,
  };

  scoreBoard.push(totalScore);

  localStorage.setItem("totalScore", JSON.stringify(scoreBoard));

  var clear = document.getElementById("clear");
  clear.addEventListener("click", function () {
    window.localStorage.clear();
    highScoreEl.setAttribute("style", "display:none");
  });

  leaderDisplay(scoreBoard);
}

function leaderDisplay(scoreBoard) {
  scoreLink.setAttribute("style", "display:none");
  var scoreBoard = JSON.parse(localStorage.getItem("totalScore")) || [];

  for (let i = 0; i < scoreBoard.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = scoreBoard[i].initals + scoreBoard[i].points;
    highScoreEl.appendChild(liEl);
  }
}

scoreLink.addEventListener("click", function () {
  heading.classList.add("hide");
  subHeading.classList.add("hide");
  startBtn.setAttribute("style", "display:none;");
  leaderboard.setAttribute("style", "margin-top:100px;");
  submit();
  var aLink = document.createElement("a");
  var homeLink = document.createTextNode("Back to Homepage");
  aLink.appendChild(homeLink);
  aLink.setAttribute("style", "font-size:30px; margin-left:500px;");
  aLink.href = "index.html";
  document.body.appendChild(aLink);
});
