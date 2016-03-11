window.onload = function(){

var hashQuestionsAndAnswers = {};
  hashQuestionsAndAnswers["What's the best cat name?"] = ["Xiao Gui", "Clementine", "Kitten", "Gita"];
  hashQuestionsAndAnswers["What's the ideal number of kitties?"] = ["all the kitties", 1, 2, 3];
  hashQuestionsAndAnswers["What is the best part about kitties?"] = ["Their furry bellies", "Their jellybean paws", "Their silly meows", "Their twitchy tails"];
  
var quiz = document.getElementById("quiz");
var begin_button = document.getElementById("begin_button");
var question_text = document.getElementById("question");
var choices = document.getElementById("choices");
var answer = document.getElementById("answer");
var submit_button = document.getElementById("submitter");
var next_button = document.getElementById("next");
var result = document.getElementById("total_result");


	begin_button.addEventListener("click", function(){

		begin_button.style.display = "none";
		quiz.style.display = "block";

		for (var key in hashQuestionsAndAnswers){
				question_text.innerHTML = key;
				choices.innerHTML = hashQuestionsAndAnswers[key];
				var correct_answers = 0;

			submit_button.addEventListener("click", function(){

				if (answer == hashQuestionsAndAnswers[key][0]){
					next_button.display = "block";
					next_button.addEventListener("click", function(){
						alert("You answered correctly");
						correct_answers ++ ;
					});
				};

				else {
					next_button.display = "block";
					next_button.addEventListener("click", function(){
						alert("WRONG. The correct answer is " + hashQuestionsAndAnswers[key][0]);
						)};
				};

			});
			
		});

		result.innerHTML = ("You got" + correct_answers + "out of" + Object.keys(hashQuestionsAndAnswers).length + "answers correct");
		result.display = "block";
	});
};



