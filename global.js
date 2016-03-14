window.onload = function(){
 
  var firstQuestionAns = "New York City"
  var secondQuestionAns = "Stomach"
  var thirdQuestionAns = "Lake Ontario"
  var fourthQuestionAns = "Thirty Helens"

  var button = document.getElementById("begin_button");

  button.addEventListener("click", function(){

    var alert_to_show = alert("Quiz time!");

    var firstQuestion = prompt("What was the first city to be illuminated with electric street lamps in 1882? \n\n Tokyo \n London \n New York City \n Buenos Aires");
    if (firstQuestion === firstQuestionAns){ 
      alert("That's correct! Click OK to continue.");
    };
    if (firstQuestion != firstQuestionAns){
      alert("Sorry, that's incorrect. Click OK to continue.");
    };
    var secondQuestion = prompt("What part of a rat's body can detect a bitter taste? \n\n Feet \n Stomach \n Tongue \n Nose");
    if (secondQuestion === secondQuestionAns){ 
      alert("That's correct! Click OK to continue.");
    };
    if (secondQuestion != secondQuestionAns){
      alert("Sorry, that's incorrect. Click OK to continue.");
    };
    var thirdQuestion = prompt("What name did the British restore to Lake Frontenac, after the French surrendered it in 1763? \n\n Windermere \n Bassenthwaite Lake \n Lake Victoria \n Lake Ontario");
    if (thirdQuestion === thirdQuestionAns){ 
      alert("That's correct! Click OK to continue.");
    };
    if (thirdQuestion != thirdQuestionAns){
      alert("Sorry, that's incorrect. Click OK to continue.");
    };
    var fourthQuestion = prompt("How many Helens agreed on a variety of opinions in the Kids in the Hall sketch? \n\n Thirty Helens \n Ten Helens \n One Hundred Helens \n Twenty Helens");
    if (fourthQuestion === fourthQuestionAns){ 
      alert("That's correct! Click OK to continue.");
    };
    if (fourthQuestion != fourthQuestionAns){
      alert("Sorry, that's incorrect. Click OK to continue.");
    };
  });
};