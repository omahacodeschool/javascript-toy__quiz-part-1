window.onload = function(){
 
  var firstQuestionAns = "New York City"

  var button = document.getElementById("begin_button");

  button.addEventListener("click", function(){

    var alert_to_show = alert("Quiz time!");

    var firstQuestion = prompt("What was the first city to be illuminated with electric street lamps in 1882?");
    if (firstQuestion === firstQuestionAns){ 
      alert("That's correct! Click OK to continue.");
    };
    if (firstQuestion != firstQuestionAns){
      alert("Sorry, that's incorrect. Click OK to continue.");
    };
  });
};