window.onload = function(){

  var start_it    = document.getElementById("begin_button");
  var questionArr = [{"Which is the superior 80's sequel?": "qOne", 
                    "Aliens": "correct", "The Road Warrior": "B", 
                    "The Empire Strikers Back": "C", "Evil Dead II": "D"},

                    {"What is the best color?": "qTwo", "Red": "A",
                    "Blue": "B", "Yellow": "C", "Green": "correct"},

                    {"Which direction?": "qThree", "East": "A", "West": "B", 
                    "North": "correct", "South": "D"},

                    {"What is the correct answer?": "qFour", "A": "A", 
                    "B": "correct", "C": "C", "D": "D"}
                    ];
  var quiz        = document.getElementById("quiz");
  var question    = document.getElementById("question");
  var choices     = document.getElementById("choices");
  var submit_it   = document.getElementById("submit_button");
  var result      = document.getElementById("question_result");
  var next_it     = document.getElementById("next_button");
  var winCount    = 0;
  var quizCount   = 0;

  Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
      if( this.hasOwnProperty( prop ) ) {
        if( this[ prop ] === value )
          return prop;
      }
    }
  }

  start_it.addEventListener("click", function(){

    start_it.style.display = "none";
    quiz.style.display = "block"

    var questionKeys = (Object.keys(questionArr[quizCount]));

    question.innerHTML = questionKeys[0]
    choices.innerHTML  = questionKeys.slice(1, -1)
  });

      // var userAnswer = document.getElementById("answer").value;

      // if (UserAnswer === questionArr[i].getKeyByValue("correct")) {
      //   alert("Correct! " + UserAnswer + " is right!")
      //   winCount++
      //   console.log("Correct: " + UserAnswer);
      // } else {
      //   alert("Try again...")
      //   console.log("Incorrect: " + UserAnswer + " (correct: " + questionArr[i].getKeyByValue("correct") + ")");
      // }
      //   alert("You've answered " + ((winCount / 4) * 100) + "% correctly!")
      //   console.log("Win Ratio: " + winCount + ":" + 4);

};