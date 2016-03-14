window.onload = function(){
 
  var firstQuestionAns = "3"
  var secondQuestionAns = "2"
  var thirdQuestionAns = "4"
  var fourthQuestionAns = "1"
  var correctAns = 0

  var button = document.getElementById("begin_button");

  button.addEventListener("click", function(){

    var alert_to_show = alert("Quiz time!");

    var firstQuestion = prompt("What was the first city to be illuminated with electric street lamps in 1882? \n\n1. Tokyo \n2. London \n3. New York City \n4. Buenos Aires");
    if (firstQuestion == firstQuestionAns){ 
      alert("That's correct! Click OK to continue."); correctAns++;
    };
    if (firstQuestion != firstQuestionAns){
      alert("Sorry, that's incorrect. Click OK to continue.");
    };
    var secondQuestion = prompt("What part of a rat's body can detect a bitter taste? \n\n1. Feet \n2. Stomach \n3. Tongue \n4. Nose");
    if (secondQuestion == secondQuestionAns){ 
      alert("That's correct! Click OK to continue."); correctAns++;
    };
    if (secondQuestion != secondQuestionAns){
      alert("Sorry, that's incorrect. Click OK to continue.");
    };
    var thirdQuestion = prompt("What name did the British restore to Lake Frontenac, after the French surrendered it in 1763? \n\n1. Windermere \n2. Bassenthwaite Lake \n3. Lake Victoria \n4. Lake Ontario");
    if (thirdQuestion == thirdQuestionAns){ 
      alert("That's correct! Click OK to continue."); correctAns++;
    };
    if (thirdQuestion != thirdQuestionAns){
      alert("Sorry, that's incorrect. Click OK to continue.");
    };
    var fourthQuestion = prompt("How many Helens agree on a variety of opinions in the Kids in the Hall sketch? \n\n1. Thirty Helens \n2. Ten Helens \n3. One Hundred Helens \n4. Twenty Helens");
    if (fourthQuestion == fourthQuestionAns){ 
      alert("That's correct! Click OK to continue."); correctAns++;
    };
    if (fourthQuestion != fourthQuestionAns){
      alert("Sorry, that's incorrect. Click OK to continue.");
    };

    var average = correctAns/4

    alert("You answered " + average * 100 + "% of the questions correctly! " + "(" + correctAns + " out of 4)");
  });
};