window.onload = function(){

  // when the page loads, the first question's content is added into div#question
  var click_to_begin = document.getElementById("button_begin");
  click_to_begin.addEventListener("click", function() {
    var show_quiz = document.getElementById("quiz");
    show_quiz.style.display = "block";
    click_to_begin.style.display = "none";
  });

  


};