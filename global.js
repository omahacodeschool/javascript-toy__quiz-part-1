window.onload = function(){

  var correctAnswer = 0
  var numberOfQuestions = 3
  var button = document.getElementById("begin_button");

  button.addEventListener("click", function(){

    var questionOne = prompt("What weighs more? \n A)A feather \n B)An elephant \n C)The moon \n D)Nothing");

      if (questionOne == "c"){
        alert("That's correct!");
        correctAnswer++;
      }
      else {
        alert("Aww, better luck with the next one.");
      };

    var questionTwo = prompt("What weighs less? \n A)A bowling ball \n B)A neutron star \n C)A puppy \n D)Your conscience");

      if (questionTwo == "c") {
        alert("That's correct!");
        correctAnswer++;
      }
      else {
        alert("Aww, better luck with the next one.");
      };

    var questionThree = prompt("What weighs on you more? \n A)The atmosphere \n B)Debt \n C)Guilt \n D)Responsibility");

      if (questionTwo == "c") {
        alert("That's correct!");
        correctAnswer++;
      }
      else {
        alert("Aww, well, there are other quizzes.");
      };

      var percentageCorrect = ((correctAnswer/numberOfQuestions) * 100);

      alert("you got " + correctAnswer + " out of " + numberOfQuestions + " correct!  That's good for " + percentageCorrect + "%!");

    });

};
