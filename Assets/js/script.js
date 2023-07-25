var button1 = document.querySelector("#startBtn");
let questions = document.querySelector("#questions");
let answers = document.querySelector("#answers");

function startQuiz() {
  questions.setAttribute(
    "style",
    "font-size: 45px; text-align: center; font-weight:bold; margin-top:200px;"
  );
  answers.setAttribute(
    "style",
    "font-size: 45px; text-align: center; font-weight:bold; margin-top:200px;"
  );

  button1.setAttribute("style", "display: none;");
  questions.innerText = "What does CSS stand for?";
  answers.innerText = null;
}

startBtn.addEventListener("click", startQuiz);

function question1() {
  let button2 = document.createElement("button2");
  button2.innerText = "Can you click me?";
  document.querySelector("button2").setAttribute("style", "margin-left:550px;");
  document.body.appendChild(button2);

  if (button2.style.display === "none") {
    button2.setAttribute("style", "display:block;");
  } else {
    button2.setAttribute("style", "display:none;");
  }
}
