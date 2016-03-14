window.onload = function(){

  var start_it     = document.getElementById("begin_button");
  var questionArr  = [{"Which is the superior 80's sequel?": "qOne", 
                      "Aliens": "correct", "The Road Warrior": "B", 
                      "The Empire Strikers Back": "C", "Evil Dead II": "D"},

                      {"What is the best color?": "qTwo", "Red": "A",
                      "Blue": "B", "Yellow": "C", "Green": "correct"},

                      {"Which direction?": "qThree", "East": "A", "West": "B", 
                      "North": "correct", "South": "D"},

                      {"What is the correct answer?": "qFour", "A": "A", 
                      "B": "correct", "C": "C", "D": "D"}
                     ];
  var quiz         = document.getElementById("quiz");
  var question     = document.getElementById("question");
  var choices      = document.getElementById("choices");
  var submit_it    = document.getElementById("submit_button");
  var q_result     = document.getElementById("question_result");
  var t_result     = document.getElementById("total_result");
  var next_it      = document.getElementById("next_button");
  var que_class    = document.getElementsByClassName("que");
  var result_class = document.getElementsByClassName("que_result");
  var winCount     = 0;
  var quizCount    = 0;

  Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
      if( this.hasOwnProperty( prop ) ) {
        if( this[ prop ] === value )
          return prop;
      }
    }
  }

  start_it.addEventListener("click", function() {

    start_it.style.display = "none";
    // quiz.style.display     = "block";
    
    for (var i = 0; i < que_class.length; i++) {
      que_class[i].style.display = "block";
    }

    var questionKeys = (Object.keys(questionArr[quizCount]));

    question.innerHTML = questionKeys[0];
    choices.innerHTML  = questionKeys.slice(1, 5).join("\n");
  });

  submit_it.addEventListener("click", function() {

    for (var i = 0; i < que_class.length; i++) {
      que_class[i].style.display = "none";
    }
    for (var i = 0; i < result_class.length; i++) {
      result_class[i].style.display = "block";
    }

    var userAnswer = document.getElementById("answer").value;

    if (userAnswer === questionArr[quizCount].getKeyByValue("correct")) {
      q_result.innerHTML = ("Correct! " + userAnswer + " is right!")
      winCount++
      quizCount++
      console.log("Correct: " + userAnswer);
    } else {
      q_result.innerHTML = ("Try again...")
      quizCount++
      console.log("Incorrect: " + userAnswer + " (correct: " + questionArr[quizCount].getKeyByValue("correct") + ")");
    }
  });

  next_it.addEventListener("click", function() {
    if (quizCount < 4) {

      for (var i = 0; i < que_class.length; i++) {
        que_class[i].style.display = "block";
      }
      for (var i = 0; i < result_class.length; i++) {
        result_class[i].style.display = "none";
      }

      var questionKeys     = (Object.keys(questionArr[quizCount]));

      question.innerHTML   = questionKeys[0];
      choices.innerHTML    = questionKeys.slice(1, 5).join("\n");
    } else {

      for (var i = 0; i < que_class.length; i++) {
        que_class[i].style.display = "none";
      }
      for (var i = 0; i < result_class.length; i++) {
        result_class[i].style.display = "none";
      }

      total_result.innerHTML     = ("You've answered " + ((winCount / 4) * 100) + "% correctly!");
      
      total_result.style.display = "block";
      console.log("Win Ratio: " + winCount + ":" + 4);
    }
  });
};