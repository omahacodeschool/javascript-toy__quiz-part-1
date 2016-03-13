window.onload = function(){
  var points_count = 0;
  var quiz = document.getElementById('quiz');
  var question = document.getElementById('question');
  var choices = document.getElementById('choices');
  var answer = document.getElementById('answer');
  var question_result = document.getElementById('question_result');
  var total = document.getElementById('result');
  var button = document.getElementById('begin_button');
  var enter = document.getElementById('response');
  var next = document.getElementById('next');

  var icelandHash = new Object();
    icelandHash["question"] = "What's the capital of Iceland?";
    icelandHash["choices"] = ["Oslo", "Torshavn", "Reykjavik", "Helsinki"];
    icelandHash["capital"] = "Reykjavik";

  var jordanHash = new Object();
    jordanHash["question"] = "What's the capital of Jordan?";
    jordanHash["choices"] = ["Jerusalem", "Tel Aviv", "Amman", "Cairo"];
    jordanHash["capital"] = "Amman";

  var brazilHash = new Object();
    brazilHash["question"] = "What's the capital of Brazil?";
    brazilHash["choices"] = ["Sao Paolo", "Buenos Aires", "Rio de Janeiro", "Brasilia"];
    brazilHash["capital"] = "Brasilia";

  var albaniaHash = new Object();
    albaniaHash["question"] = "What's the capital of Albania?";
    albaniaHash["choices"] = ["Pristina", "Tirana", "Belgrade", "Skopje"];
    albaniaHash["capital"] = "Tirana";

  var turkeyHash = new Object();
    turkeyHash["question"] = "What's the capital of Turkey?";
    turkeyHash["choices"] = ["Istanbul", "Izmir", "Sofia", "Ankara"];
    turkeyHash["capital"] = "Ankara";

  var array_of_countries = [];
  array_of_countries.push(icelandHash);
  array_of_countries.push(jordanHash);
  array_of_countries.push(brazilHash);
  array_of_countries.push(albaniaHash);
  array_of_countries.push(turkeyHash);
  var current_question = 0;

  button.addEventListener("click", function() {
    button.style.display = "none";
    question.innerHTML = array_of_countries[current_question]["question"];

    choices.innerHTML = array_of_countries[current_question]["choices"];

    answer.value = "";
    quiz.style.display = "block";
    enter.style.display = "block";
    total.innerHTML = "You have " + points_count + " points.";

  }); //ends 'start game click' event

  enter.addEventListener("click", function() {
    var params = answer.value;
    // console.log("params is " + params);
    question_result.style.display = "block";
    // console.log("i capital is " + i["capital"]);
    if (params == array_of_countries[current_question]["capital"]) {
      points_count++;
      question_result.innerHTML = ("Correct!");
      total.innerHTML = "You have " + points_count + " point(s).";
    } else {
      question_result.innerHTML = ("Sorry, wrong answer.");
    } //ends if loop
    enter.style.display = "none";
    next.style.display = "block";
    if (current_question >= array_of_countries.length-1) {
      total.innerHTML = "That's all. You have " + points_count + "/5 points! That's " + (points_count/5)*100 + "%.";
      next.style.display = "none";
    }
  }); //ends 'when next is clicked' event

    next.addEventListener("click", function() {
      enter.style.display = "block";
      next.style.display = "none";
      quiz.style.display = "block";
      question_result.style.display = "none";
      current_question++
      question.innerHTML = array_of_countries[current_question]["question"];

      choices.innerHTML = array_of_countries[current_question]["choices"];
      
      answer.value = "";
      total.innerHTML = "You have " + points_count + " point(s).";

    }); //ends 'click enter on question' event

};