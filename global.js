window.onload = function(){
  var points_count = 0

  var button = document.getElementById('begin_button')
  button.addEventListener("click", function() {

    var iceland = prompt("What's the capital of Iceland?\nOslo\nTorshavn\nReykjavik\nHelsinki")
      var correct_answer = "Reykjavik"

      if (correct_answer == iceland) {
        points_count++
        alert("You answered correctly! You have " + points_count + " points.")
      } else {
      alert("Sorry, that was incorrect. You have " + points_count + " points.")
    }


    var jordan = prompt("What's the capital of Jordan?\nJerusalem\nTel Aviv\nAmman\nCairo")
      var correct_answer = "Amman"

      if (correct_answer == jordan) {
        points_count++
        alert("You answered correctly! You have " + points_count + " points.")
      } else {
        alert("Sorry, that was incorrect. You have " + points_count + " points.")
      }

    var brazil = prompt("What's the capital of Brazil?\nSao Paolo\nBuenos Aires\nRio de Janeiro\nBrasilia")
      var correct_answer = "Brasilia"

      if (correct_answer == brazil) {
        points_count++
        alert("You answered correctly! You have " + points_count + " points.")
      } else {
        alert("Sorry, that was incorrect. You have " + points_count + " points.")
      }

    var albania = prompt("What's the capital of Albania?\nPristina\nTirana\nBelgrade\nSkopje")
      var correct_answer = "Tirana"

      if (correct_answer == albania) {
        points_count++
        alert("You answered correctly! You have " + points_count + " points.")
      } else {
        alert("Sorry, that was incorrect. You have " + points_count + " points.")
      }

    var turkey = prompt("What's the capital of Turkey?\nIstanbul\nIzmir\nSofia\nAnkara")
      var correct_answer = "Ankara"

      if (correct_answer == turkey) {
        points_count++
        alert("You answered correctly! You have " + points_count + " points.")
      } else {
        alert("Sorry, that was incorrect. You have " + points_count + " points.")
      }

    alert("That's all. You have " + points_count + "/5 points! That's " + (points_count/5)*100 + "%.")

  })
};