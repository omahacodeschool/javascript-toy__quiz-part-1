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

    // var iceland = prompt("What's the capital of Iceland?\nOslo\nTorshavn\nReykjavik\nHelsinki")
    //   var correct_answer = "Reykjavik"

    //   if (correct_answer == iceland) {
    //     points_count++
    //     alert("You answered correctly! You have " + points_count + " points.")
    //   } else {
    //   alert("Sorry, that was incorrect. You have " + points_count + " points.")
    // }


    // var jordan = prompt("What's the capital of Jordan?\nJerusalem\nTel Aviv\nAmman\nCairo")
    //   var correct_answer = "Amman"

    //   if (correct_answer == jordan) {
    //     points_count++
    //     alert("You answered correctly! You have " + points_count + " points.")
    //   } else {
    //     alert("Sorry, that was incorrect. You have " + points_count + " points.")
    //   }

    // var brazil = prompt("What's the capital of Brazil?\nSao Paolo\nBuenos Aires\nRio de Janeiro\nBrasilia")
    //   var correct_answer = "Brasilia"

    //   if (correct_answer == brazil) {
    //     points_count++
    //     alert("You answered correctly! You have " + points_count + " points.")
    //   } else {
    //     alert("Sorry, that was incorrect. You have " + points_count + " points.")
    //   }

    // var albania = prompt("What's the capital of Albania?\nPristina\nTirana\nBelgrade\nSkopje")
    //   var correct_answer = "Tirana"

    //   if (correct_answer == albania) {
    //     points_count++
    //     alert("You answered correctly! You have " + points_count + " points.")
    //   } else {
    //     alert("Sorry, that was incorrect. You have " + points_count + " points.")
    //   }

    // var turkey = prompt("What's the capital of Turkey?\nIstanbul\nIzmir\nSofia\nAnkara")
    //   var correct_answer = "Ankara"

    //   if (correct_answer == turkey) {
    //     points_count++
    //     alert("You answered correctly! You have " + points_count + " points.")
    //   } else {
    //     alert("Sorry, that was incorrect. You have " + points_count + " points.")
    //   }

  //   alert("That's all. You have " + points_count + "/5 points! That's " + (points_count/5)*100 + "%.")

};