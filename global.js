window.onload = function(){

  var correctAnswer = 0
  var numberOfQuestions = 3
  var button = document.getElementById("begin_button");

  button.addEventListener("click", function(){

    var questionOne = prompt("What weighs more? \n A)A feather \n B)An elephant \n C)The moon");

      if (questionOne == "c"){
        alert("That's correct!");
        correctAnswer++;
      }
      else {
        alert("Aww, better luck with the next one.");
      };

    var questionTwo = prompt("What weighs less? \n A)A bowling ball \n B)A neutron star \n C)A puppy");

      if (questionTwo == "c") {
        alert("That's correct!");
        correctAnswer++;
      }
      else {
        alert("Aww, better luck with the next one.");
      };

    var questionThree = prompt("What weighs on you more? \n A)The atmosphere \n B)Debt \n C)Guilt");

      if (questionTwo == "c") {
        alert("That's correct!");
        correctAnswer++;
      }
      else {
        alert("Aww, well, there are other quizzes.");
      };

      alert(correctAnswer)

    });

  alert("Foo");
};

/*1. Your user loads the **index.html** page, which contains a button to begin the game.
2. They are presented with a `prompt()` asking them a multiple choice question.
3. Upon answer, they see an `alert()` telling them whether they answered correctly or incorrectly. They click "Okay" to move on.
4. Steps 2-3 repeat until there are no more questions.
5. Once they have answered all questions, they see an `alert()` telling them how many they answered correctly (out of however many questions there were), and something that looks like a percentage. E.g. **You answered 7 of 10 questions correctly, good for 70.0%**/