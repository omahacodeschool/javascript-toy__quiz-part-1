window.onload = function(){
  var questOneAnswer = "Cat"
  var questTwoAnswer = "My Chemical Romance" 
  var questThreeAnswer = "Fresca"
  var questFourAnswer = "Scott Pilgrim vs The World"
  var questFiveAnswer = "Sing"
  var click_it = document.getElementById("begin_button");
  var correctAnswers = 0
  click_it.addEventListener("click", function(){

    var alert_to_show = alert("Welcome to the Quiz!");

    var questOne = prompt("Question 1! What's the best pet to have? Dog, Cat, Ferret, or Mouse?");
    if (questOne === questOneAnswer){ 
      alert("Correct! Press OK to continue to question 2.");
     correctAnswers++;
    };
    if (questOne != questOneAnswer){
      alert("That's incorrect. Please click OK to continue to question 2.");
    };

    var questTwo = prompt("Question 2! What band do I consider the most influential? My Chemical Romance, 30 Seconds to Mars, Motley Crue, or Nirvana?");
    if (questTwo === questTwoAnswer){ 
      alert("Correct! Press OK to continue to question 3.");
      correctAnswers++;
    };
    if (questTwo != questTwoAnswer){
      alert("That's incorrect. Please click OK to continue to question 3.");
    };

    var questThree = prompt("Question 3! Pick what you think is my favorite beverage. Your choices are Snapple, 7uP, Fresca, or Mountain Dew.");
    if (questThree === questThreeAnswer){ 
      alert("Correct! Press OK to continue to question 4.");
      correctAnswers++;
    };
    if (questThree != questThreeAnswer){
      alert("That's incorrect. Please click OK to continue to question 4.");
    };

    var questFour = prompt("Question 4! What is my favorite movie? Scott Pilgrim vs The World, Big Hero 6, 22 Jump Street, or Spy?");
    if (questFour === questFourAnswer){ 
      alert("Correct! Press OK to continue to question 5.");
      correctAnswers++;
    };
    if (questFour != questFourAnswer){
      alert("That's incorrect. Please click OK to continue to question 5.");
    };
    var questFive = prompt("Last Question! I was in a band at one time. What do you think I did in that band? Your choices are: Sing, Guitar, Drums, or Bass.");
    if (questFive === questFiveAnswer){ 
      alert("Correct! The quiz has ended.");
      correctAnswers++;
      alert("You got" + " " + correctAnswers + " " + "out of 5 answers correct!");
    };
    
    if (questFive != questFiveAnswer){
      alert("That's incorrect. The quiz has ended. You got" + " " + correctAnswers + " " + "out of 5 answers correct!");
    };
    if (correctAnswers > 3){
      alert("Nicely done!")
    };
      correctAnswers = 0
    
  });
};