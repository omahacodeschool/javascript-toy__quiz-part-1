window.onload = function(){
  alert("Foo");

  var click_it    = document.getElementById("begin_button");
  var questionArr = [{"Which is the superior 80's sequel?": "qOne", 
                    "Aliens": "correct", "The Road Warrior": "aB", 
                      "The Empire Strikers Back": "aC", "Evil Dead II": "aD"},
                      
                    {"What is the best color?": "qTwo", "Red": "aA",
                      "Blue": "aB", "Yellow": "aC", "Green": "correct"},
                      
                    {"Which direction?": "qThree", "East": "aA", "West": "aB", "North": "correct", "South": "aD"},
                      
                    {"What is the correct answer?": "qFour", "A": "aA", 
                      "B": "correct", "C": "aC", "D": "aD"}
                    ]

  click_it.addEventListener("click", function(){
    // Create a prompt with a 4-answer multiple-choice question
    for (var i = 0; i <= questionArr.length; i++) {
      
      var UserAnswer = prompt(Object.keys(questionArr[i]));

      if (UserAnswer === () {
        alert("Correct! " + UserAnswer + " is right!")
        console.log(UserAnswer,)
      } else {
        alert("Try again...")
      }
    }
    // Create an alert for correct or incorrect
    // Repeat for 4 questions
    // Create alert for correct answer percentage
  });
};