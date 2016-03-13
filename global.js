//hopefully this will 'check' the radio buttons
function check(choicevalue) {
  document.getElementById("answer").value = document.getElementById(choicevalue).innerHTML
};

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
    };
  };
  //hide_class_elements hides elements 
  //input class either "q_stuff"(question elements) or "a_stuff"(answer elements)
  function hide_class_elements(class_name) {
    var array = document.getElementsByClassName(class_name)
    for (var i = array.length - 1; i >= 0; i--) {
      array[i].style.display = "none"
    };
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
  //set_up_questions()
    all_questions = []
    var question1 = new Object();
    question1["question"] = "Which of the following holidays does NOT have a specialty shaped Reese's candy?";
    var answer = "4th of July";
    question1["answer"] = answer;
    //notanswers is an array that will make up the other choices
    var notanswers = ["Christmas","Easter","Valentine's Day"];
    notanswers.push(answer)
    fischer_yates_shuffle(notanswers)
    question1["answer_choices"] = notanswers
  
    all_questions.push(question1) 

    var question2 = new Object();
    question2["question"] = "What is the shape of specialty Halloween Reese's?";
    var answer = "pumpkin";
    question2["answer"] = answer;
    //notanswers is an array that will make up the other choices
    var notanswers = ["ghost","witch hat","coffin full of feelings"];
    notanswers.push(answer)
    fischer_yates_shuffle(notanswers)
    question2["answer_choices"] = notanswers

    all_questions.push(question2)

    var question3 = new Object();
    question3["question"] = "Which candy 'starts' the Reese's season?";
    var answer = "Reese's Pumpkins";
    question3["answer"] = answer;
    //notanswers is an array that will make up the other choices
    var notanswers = ["Reese's Hearts","Reese's Arbor Day Maple Trees","Reese's Chinese New Year Monkeys(2016)"];
    notanswers.push(answer)
    fischer_yates_shuffle(notanswers)
    question3["answer_choices"] = notanswers

    all_questions.push(question3)

    var question4 = new Object();
    question4["question"] = "While all of these are true, which of these facts about Reese's Ice Cream Easter Eggs makes the LEAST sense?";
    var answer = "They're available ALL YEAR ROUND";
    question4["answer"] = answer;
    //notanswers is an array that will make up the other choices
    var notanswers = ["They're only available at Walmart","Serving size is '1 bar' when they are and egg","That they say 'limited edition' event though they were released in 2013"];
    notanswers.push(answer)
    fischer_yates_shuffle(notanswers)
    question4["answer_choices"] = notanswers

    all_questions.push(question4)

    fischer_yates_shuffle(all_questions)
  function set_question(q){
    document.getElementById("question").innerHTML = all_questions[q]["question"];
    var choiceInputs = document.querySelectorAll(".choices input");  
    for (var i = choiceInputs.length - 1; i >= 0; i--) {
      document.querySelectorAll("#label"+(i+1))[0].innerHTML = all_questions[q]["answer_choices"][i];
      choiceInputs[i].value = all_questions[q]["answer_choices"][i];
    };   
  };
  // return all_questions
  //}
  var q = 0;
  set_question(q);
  hide_class_elements("a_stuff");
  show_class_elements("q_stuff");
  //they guess (text input)
  //if they input the correct answer it tells them they are right
  var submit_guess = document.getElementById("submitter")
  submit_guess.addEventListener("click", function() {
    guess = document.getElementById("answer").value;
    if (guess === all_questions[q]["answer"]) {
      right_answers++;
      console.log("right_answers = " + right_answers);
      document.getElementById("question_result").innerHTML = "CORRECT!";
    } else {
      document.getElementById("question_result").innerHTML = "SORRY! That is INCORRECT!";
    };
    hide_class_elements("q_stuff");
    show_class_elements("a_stuff");
  });
  //clicking on to the next question resets everything    
  var next = document.getElementById("next");
  next.addEventListener("click", function() {
    hide_class_elements("a_stuff")
    show_class_elements("q_stuff")
    document.getElementById("answer").value = ""
    q++
    console.log("value of q is " + q)
    if(q === all_questions.length){
      hide_class_elements("q_stuff");
      hide_class_elements("a_stuff");
      document.getElementById("total_result").textContent = "You answered all the questions! You got " + right_answers + "/4 right! That's a score of " + (right_answers/all_questions.length)*100 + "%!";
    } else {
      set_question(q)
    };
  });
};