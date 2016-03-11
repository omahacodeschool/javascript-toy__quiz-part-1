window.onload = function(){
  // let's count how many answers they get correct. starts at 0 obvs 
  var right_answers = 0
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
  //set_up_questions() {
    all_questions = []
    var question1 = new Object();
    question1["question"] = "How great is pizza?";
    var answer = "SUPER GREAT";
    question1["answer"] = answer;
    //notanswers is an array that will make up the other choices
    var notanswers = ["great","fine","i've never had pizza"];
    notanswers.push(answer)
    fischer_yates_shuffle(notanswers)
    question1["answer_choices"] = notanswers
  
    all_questions.push(question1) 

    var question2 = new Object();
    question2["question"] = "How do you feel about nachos?";
    var answer = "ALSO GREAT";
    question2["answer"] = answer;
    //notanswers is an array that will make up the other choices
    var notanswers = ["too much cheese!","waste of chips.","i've never had nachos"];
    notanswers.push(answer)
    fischer_yates_shuffle(notanswers)
    question2["answer_choices"] = notanswers

    all_questions.push(question2)

    var question3 = new Object();
    question3["question"] = "Donuts?";
    var answer = "SURE OKAY";
    question3["answer"] = answer;
    //notanswers is an array that will make up the other choices
    var notanswers = ["no thank you","too sweet!","gross."];
    notanswers.push(answer)
    fischer_yates_shuffle(notanswers)
    question3["answer_choices"] = notanswers

    all_questions.push(question4)

    var question4 = new Object();
    question4["question"] = "Do you like brownies?";
    var answer = "KRYPTONITE";
    question4["answer"] = answer;
    //notanswers is an array that will make up the other choices
    var notanswers = ["they hurt my tummy","i don't like chocolate","i really prefer pie"];
    notanswers.push(answer)
    fischer_yates_shuffle(notanswers)
    question4["answer_choices"] = notanswers

    all_questions.push(question4)

    fischer_yates_shuffle(all_questions)

  // return all_questions
  //}

  //questions_array = set_up_questions
  //keeps track of the questions asked
  q = 0
  document.getElementById("question").innerHTML = all_questions[q]["question"];
  var choices = document.querySelectorAll(".choices li");  
  for (var i = choices.length - 1; i >= 0; i--) {
    choices[i].innerHTML = all_questions[q]["answer_choices"][i]
  }  
  //
  //when "next" is clicked it replaces question and answers
  q++
  //while(q <= all_questions.length) {    
    var next = document.getElementById("next");
    next.addEventListener("click", function() {
      hide_class_elements("a_stuff")
      show_class_elements("q_stuff")
      q++
      document.getElementById("answer").value = ""
      document.getElementById("question").innerHTML = all_questions[q]["question" ];
      var choices = document.querySelectorAll(".choices li");  
      for (var i = choices.length - 1; i >= 0; i--) {
        choices[i].innerHTML = all_questions[q]["answer_choices"][i]
      }
    });
    //
    //if they input the correct answer it tells them they are right
    var submit_guess = document.getElementById("submitter")
    submit_guess.addEventListener("click", function() {
      guess = document.getElementById("answer").value;
      if (guess === all_questions[q]["answer"]) {
        right_answers++;
        console.log("right_answers = " + right_answers);
        document.getElementById("question_result").innerHTML = "CORRECT!";
      } else {
        document.getElementById("question_result").innerHTML = "NO! WHY WOULD   YOU EVER THINK THAT??";
      };
      hide_class_elements("q_stuff");
      show_class_elements("a_stuff");
    });
  //};
  alert("YOU DID IT!");
};