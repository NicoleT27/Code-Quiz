var button1 = document.querySelector("#startBtn");
let header = document.querySelector("#header");
let subHeading = document.querySelector("#subHeading");

function startQuiz() {
  header.setAttribute(
    "style",
    "font-size: 30px; text-align: center; font-weight:bold; margin-top:200px;"
  );
  subHeading.setAttribute(
    "style",
    "font-size: 45px; text-align: center; font-weight:bold; margin-top:200px;"
  );

  button1.setAttribute("style", "display: none;");
  subHeading.innerText = null;
  startTime();
  showQuestion();
}

function startTime() {
  var minutesLeft = 20;
  var timer = setInterval(function () {
    document.querySelector("#timeId").innerHTML = minutesLeft;
    minutesLeft--;
    if (minutesLeft <= 0) {
      clearInterval(timer);
    }
  }, 60000);
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

  for (let i = 0; i < multiChoice.length; i++) {
    var questionsTitle = document.getElementById("#questionTitle");
    questionsTitle.innerHTML = showQuestion.title;

    if (questions === "hide") {
      questions.setAttribute("class", "show");
      questions = show;
    } else {
      questions = hide;
    }
  }
}
showQuestion();
