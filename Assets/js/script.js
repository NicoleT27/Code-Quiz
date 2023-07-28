var button1 = document.querySelector("#startBtn");
let header = document.querySelector("#header");
let subHeading = document.querySelector("#subHeading");
var counter = 0;

function startQuiz() {
  button1.setAttribute("style", "display: none;");
  header.innerText = null;
  subHeading.innerText = null;
  startTime();
  showQuestion();
}

function startTime() {
  console.log("start time is running");
  var secondsLeft = 20;
  var timer = setInterval(function () {
    document.querySelector("#timeId").innerHTML = secondsLeft;
    secondsLeft--;
    console.log("timer is running");
    if (secondsLeft <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

startBtn.addEventListener("click", startQuiz);

function showQuestion() {
  var multiChoice = [
    {
      title: "How many letters in JS?",
      choices: ["1", "2", "3", "4"],
      correctA: "2",
    },
    {
      title: "How many letters in CSS?",
      choices: ["1", "2", "3", "4"],
      correctA: "3",
    },
    {
      title: "How many letters in HTML?",
      choices: ["1", "2", "3", "4"],
      correctA: "4",
    },
  ];
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
  }
  button.addEventListener("click", function () {
    alert("I have been clicked");
  });
}
