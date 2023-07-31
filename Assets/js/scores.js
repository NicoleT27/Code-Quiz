function submit() {
  
    var totalScore = {
      initals: initals.value,
      points: score,
    };
  var newScore = {
    initals: "",
    points: "",
  };
    localStorage.setItem("score", JSON.stringify(totalScore));
    JSON.parse(localStorage.getItem("totalScore"));
    localStorage.setItem("newScore", JSON.stringify(newScore));
    JSON.parse(localStorage.getItem("newScore"));

  var thankUser = document.createElement("div");
  thankUser.innerText = "Thank you";
  document.body.appendChild(div);

    var yourScore = document.getElementById("yourScore");
    yourScore.textContent = "Thank you for playing";

    var clearInput = document.getElementById("initals");
    clearInput.value = "";
}
