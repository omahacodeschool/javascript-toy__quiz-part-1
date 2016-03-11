window.onload = function(){
  var points_count = 0;
  var quiz = document.getElementById('quiz');
  var question = document.getElementById('question');
  var choices = document.getElementById('choices');
  var answer = document.getElementById('answer');
  var question_result = document.getElementById('question_result');
  var total = document.getElementById('total_result');
  var button = document.getElementById('begin_button');
  var enter = document.getElementById('response');
  var next = document.getElementById('next');

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

  var array_of_countries = []
  array_of_countries.push(icelandHash, jordanHash, brazilHash, albaniaHash, turkeyHash)

  button.addEventListener("click", function() {

    array_of_countries.forEach(function(i) {

      button.style.display = "none";
      question.innerHTML = i["question"];
      choices.innerHTML = i["choices"];
      answer.value = "";
      quiz.style.display = "block";
      enter.style.display = "block";
      total.innerHTML = "You have " + points_count + " points."

      enter.addEventListener("click", function() {
        var params = answer.value;
        question_result.style.display = "block";
        if (params == i["capital"]) {
          points_count++;
          question_result.innerHTML = ("Correct!");
          total.innerHTML = "You have " + points_count + " point(s)."
        } else {
          question_result.innerHTML = ("Sorry, wrong answer.");
        } //ends if loop
      enter.style.display = "none";
      next.style.display = "block";

        next.addEventListener("click", function() {
          enter.style.display = "block";
          next.style.display = "none";
          question_result.style.display = "none";

        }); //ends 'when next is clicked' event
      }); //ends 'click enter on question' event

    });//ends loop through countries array

  }); //ends 'start game click' event

  //   alert("That's all. You have " + points_count + "/5 points! That's " + (points_count/5)*100 + "%.")

};