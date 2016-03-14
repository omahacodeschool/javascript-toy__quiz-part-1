window.onload = function(){
  alert("Foo");

  var click_it    = document.getElementById("begin_button");
  var QuestionArr = [{"qOne": "Which is the superior 80's sequel?", 
                    "correct": "Aliens", "aB": "The Road Warrior", 
                      "aC": "The Empire Strikers Back", "aD": "Evil Dead II"},
                      
                    {"qTwo": "What is the best color?", "aA": "Red", "aB": "Blue", "correct": "Green", "aD": "Yellow"},
                      
                    {"qThree": "", "aA": "", "aB": "", "aC": "", "correct": ""}
                      
                    {"qFour": "What is the correct answer?", "aA": "A", "aB": "B", "correct": "C", "aD": "D"},
                    ]

  click_it.addEventListener("click", function(){
    // Create a prompt with a 4-answer multiple-choice question
    for (i = 0; i <= QuestionArr.length; i++) {
      var UserAnswer = prompt(QuestionArr[i](qOne \n correct \n aB \n aC \n aD))
    }
    // Create an alert for correct or incorrect
    // Repeat for 4 questions
    // Create alert for correct answer percentage
  });
};