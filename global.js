window.onload = function(){
  var points_count = 0;
  var quiz = document.getElementById('quiz');
  var question = document.getElementById('question');
  var choices = document.getElementById('choices');
  var answer = document.getElementById('answer');
  var enter = document.getElementById('response');
  var question_result = document.getElementById('question_result');
  var next = document.getElementById('next');
  var total = document.getElementById('total_result');

  var icelandHash = new Object();
    icelandHash["question"] = "What's the capital of Iceland?";
    icelandHash["choices"] = ["Oslo, Torshavn, Reykjavik, Helsinki"];
    icelandHash["capital"] = "Reykjavik";

  var jordanHash = new Object();
    jordanHash["question"] = "What's the capital of Jordan?";
    jordanHash["choices"] = ["Jerusalem, Tel Aviv, Amman, Cairo"];
    jordanHash["capital"] = "Amman";

  var brazilHash = new Object();
    jordanHash["question"] = "What's the capital of Brazil?";
    jordanHash["choices"] = ["Sao Paolo, Buenos Aires, Rio de Janeiro, Brasilia"];
    jordanHash["capital"] = "Brasilia";

  var albaniaHash = new Object();
    jordanHash["question"] = "What's the capital of Albania?";
    jordanHash["choices"] = ["Pristina, Tirana, Belgrade, Skopje"];
    jordanHash["capital"] = "Tirana";

  var turkeyHash = new Object();
    jordanHash["question"] = "What's the capital of Turkey?";
    jordanHash["choices"] = ["Istanbul, Izmir, Sofia, Ankara"];
    jordanHash["capital"] = "Ankara";


  var button = document.getElementById('begin_button');
  button.addEventListener("click", function() {

    button.style.display = "none";
    question.innerHTML = icelandHash["question"];
    choices.innerHTML = icelandHash["choices"];
    answer.value = "";
    quiz.style.display = "block";
    enter.style.display = "block";


    enter.addEventListener("click", function() {
      var params = answer.value
      if (params == icelandHash["capital"]) {
        points_count++
        console.log("YAAAAAAAY! points_count is " + points_count)
      } else {
        console.log("Incorrect answer.")
      }
    });

  });

  //   alert("That's all. You have " + points_count + "/5 points! That's " + (points_count/5)*100 + "%.")

};