window.onload = function(){
  alert("Foo");

  var click_it    = document.getElementById("begin_button");
  var questionArr = [{"Which is the superior 80's sequel?": "qOne", 
                    "Aliens": "correct", "The Road Warrior": "B", 
                      "The Empire Strikers Back": "C", "Evil Dead II": "D"},
                      
                    {"What is the best color?": "qTwo", "Red": "A",
                      "Blue": "B", "Yellow": "C", "Green": "correct"},
                      
                    {"Which direction?": "qThree", "East": "A", "West": "B", "North": "correct", "South": "D"},
                      
                    {"What is the correct answer?": "qFour", "A": "A", 
                      "B": "correct", "C": "C", "D": "D"}
                    ]

Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}

  click_it.addEventListener("click", function(){
    // Create a prompt with a 4-answer multiple-choice question
    for (var i = 0; i <= questionArr.length; i++) {
      
      var UserAnswer = prompt(Object.keys(questionArr[i]));
// Must figure out how to access the key with the value of "correct" to compare with the UserAnswer
      if (UserAnswer === questionArr[i].getKeyByValue("correct")) {
        alert("Correct! " + UserAnswer + " is right!")
        console.log(UserAnswer)
      } else {
        alert("Try again...")
        console.log(UserAnswer)
      }
    }
    // Create an alert for correct or incorrect
    // Repeat for 4 questions
    // Create alert for correct answer percentage
  });
};