window.onload = function(){

  var hashQuestionsAndAnswers = {};
    hashQuestionsAndAnswers["What's the best cat name?"] = ["Xiao Gui", "Clementine", "Kitten", "Gita"];
    hashQuestionsAndAnswers["What's the ideal number of kitties?"] = ["all the kitties", 1, 2, 3];
    hashQuestionsAndAnswers["What is the best part about kitties?"] = ["Their furry bellies", "Their jellybean paws", "Their silly meows", "Their twitchy tails"];
    
  var quiz = document.getElementById("quiz");
  var begin_button = document.getElementById("begin_button");
  var question_text = document.getElementById("question");
  var choices = document.getElementById("choices");
  // var answer = document.getElementById("answer").value;
  var submit_button = document.getElementById("submitter");
  var next_button = document.getElementById("next");
  var result = document.getElementById("total_result");
  var correct_answers = 0;
  var question_number = 0

 console.log("Adding event listener to begin_button...");
 begin_button.addEventListener("click", function(){
    console.log("Heard a 'click' on the begin_button!");

    begin_button.style.display = "none";
    quiz.style.display = "block";

    var hash_key = Object.keys(hashQuestionsAndAnswers)[question_number];
    console.log("hash_key is " + hash_key);

    question_text.innerHTML = hash_key;

    console.log("hashQuestionsAndAnswers[hash_key] is " + hashQuestionsAndAnswers[hash_key]);
    choices.innerHTML = hashQuestionsAndAnswers[hash_key]

  });

    console.log("Adding event listener for submit_button...");
    submit_button.addEventListener("click", function(){

      hash_key = Object.keys(hashQuestionsAndAnswers)[question_number];
      console.log("Heard a 'click' for on the submit_button!");
      var answer = document.getElementById("answer").value;

      if (answer == hashQuestionsAndAnswers[hash_key][0]){
          alert("You answered correctly");
          correct_answers += 1;
          question_number += 1;

          console.log("correct_answers is " + correct_answers);
          console.log("question_number is " + question_number);
      }

      else {
          console.log("hashQuestionsAndAnswers[hash_key][0] is " + hashQuestionsAndAnswers[hash_key][0]);
          alert("WRONG. The correct answer is " + hashQuestionsAndAnswers[hash_key][0]);
          question_number += 1;
          console.log("question_number is " + question_number);
      }

    });


  console.log("Adding event listenerfor next_button...");
  next_button.addEventListener("click", function(){
    console.log("Heard a 'click' on next_button!");

    var hash_key = Object.keys(hashQuestionsAndAnswers)[question_number];
    console.log("hash_key is " + hash_key);

        if (hash_key != undefined) {
          question_text.innerHTML = hash_key;

          console.log("hashQuestionsAndAnswers[hash_key] is " + hashQuestionsAndAnswers[hash_key]);
          choices.innerHTML = hashQuestionsAndAnswers[hash_key];
        }

          else if (hash_key == undefined) {

          result.innerHTML = ("You got" + correct_answers + "out of" + Object.keys(hashQuestionsAndAnswers).length + "answers correct");
            result.display = "block";

          }

   
  });

};




