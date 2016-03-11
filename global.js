window.onload = function(){
  //function for shuffling array, NOT MINE
  function fischer_yates_shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  }
  // let's count how many answers they get correct. starts at 0 obvs 
  right_answers = 0
  //set up test question and choices, randomizes choices array
  var question1 = "How great is pizza?";
  var answer = "SUPER GREAT";
  var notanswers = ["great","fine","i've never had pizza"];
  notanswers.push(answer)
  fischer_yates_shuffle(notanswers)
  //when "next" is clicked it replaces question and answers
  var next = document.getElementById("next");
  next.addEventListener("click", function() {
    document.getElementById("question").innerHTML = question1;
    var choices = document.querySelectorAll(".choices li");
    for (var i = choices.length - 1; i >= 0; i--) {
      choices[i].innerHTML = notanswers[i]
    }
  });
  //if they input the correct answer it tells them they are right
  var submit_guess = document.getElementById("submitter")
  submit_guess.addEventListener("click", function() {
    guess = document.getElementById("answer").value;
    if (guess === answer) {
      right_answers++;
      console.log("right_answers = " + right_answers);
      document.getElementById("question_result").innerHTML = "CORRECT!";
    };
  });
};






