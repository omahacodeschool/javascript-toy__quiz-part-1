window.onload = function(){
  // let's count how many answers they get correct. starts at 0 obvs 
  right_answers = 0
  //shuffle function for shuffling array, NOT MINE. input array to randomize.
  function fischer_yates_shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  }
  //hide_class_elements hides elements 
  //input class either "q_stuff"(question elements) or "a_stuff"(answer elements)
  function hide_class_elements(class_name){
    var array = document.getElementsByClassName(class_name)
    for (var i = array.length - 1; i >= 0; i--) {
      array[i].style.display = "none"
    }
  };
  //show_class_elements = shows elements that were hidden 
  //input class either "q_stuff"(question elements) or "a_stuff"(answer elements)
  function show_class_elements(class_name){
    var array = document.getElementsByClassName(class_name)
    for (var i = array.length - 1; i >= 0; i--) {
      array[i].style.display = "block"
    }
  };
  //
  //set up test question and choices, randomizes choices array
  var question1 = "How great is pizza?";
  var answer = "SUPER GREAT";
  var notanswers = ["great","fine","i've never had pizza"];
  notanswers.push(answer)
  fischer_yates_shuffle(notanswers)
  //
  //when "next" is clicked it replaces question and answers
  var next = document.getElementById("next");
  next.addEventListener("click", function() {
    hide_class_elements("a_stuff")
    show_class_elements("q_stuff")
    //next line doesn't work how i want it to...but needs to happen.
    //document.getElementById("answer") = ""
    document.getElementById("question").innerHTML = question1;
    var choices = document.querySelectorAll("choices li");
    for (var i = choices.length - 1; i >= 0; i--) {
      choices[i].innerHTML = notanswers[i]
    }
  });
  //
  //if they input the correct answer it tells them they are right
  var submit_guess = document.getElementById("submitter")
  submit_guess.addEventListener("click", function() {
    guess = document.getElementById("answer").value;
    if (guess === answer) {
      right_answers++;
      console.log("right_answers = " + right_answers);
      document.getElementById("question_result").innerHTML = "CORRECT!";
    } else {
      document.getElementById("question_result").innerHTML = "NO! WHY WOULD YOU EVER THINK THAT??";
    };
    hide_class_elements("q_stuff")
    show_class_elements("a_stuff")
  });
};






