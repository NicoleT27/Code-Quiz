var button1 = document.querySelector("#startBtn");
var header = document.querySelector("#header");
var subHeading = document.querySelector("#subHeading");
var countdown = document.getElementById("countdown");
var hr = document.createElement("hr");
var counter = 0;

function startQuiz() {
  button1.setAttribute("style", "display: none;");
  header.innerText = null;
  subHeading.innerText = null;
  setInterval(startTime, 1000);
  showQuestion();
}

var startingMinutes = 10;
var time = startingMinutes * 60;

function startTime() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdown.innerHTML = ` ${minutes} : ${seconds}`;
  time--;
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

    button.addEventListener("click", function (event) {
      var buttonResult = event.target.innerText;

      if (buttonResult === currentQuestion.correctA) {
        document.getElementById("choices").appendChild(hr);
        var textNode = document.createTextNode("Correct!");
        document.body.appendChild(textNode);
      } else {
        document.getElementById("choices").appendChild(hr);
        var textNode = document.createTextNode("Incorrect");
        document.body.appendChild(textNode);
        event.preventDefault;
      }
    });
  }
}
