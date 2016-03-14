window.onload = function(){

  var click_it    = document.getElementById("begin_button");
  var questionArr = [{"Which is the superior 80's sequel?": "qOne", 
                    "Aliens": "correct", "The Road Warrior": "B", 
                      "The Empire Strikers Back": "C", "Evil Dead II": "D"},
                      
                    {"What is the best color?": "qTwo", "Red": "A",
                      "Blue": "B", "Yellow": "C", "Green": "correct"},
                      
                    {"Which direction?": "qThree", "East": "A", "West": "B", "North": "correct", "South": "D"},
                      
                    {"What is the correct answer?": "qFour", "A": "A", 
                      "B": "correct", "C": "C", "D": "D"}
                    ];

  Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
      if( this.hasOwnProperty( prop ) ) {
        if( this[ prop ] === value )
          return prop;
      }
    }
  }

  click_it.addEventListener("click", function(){
    var winCount = 0;

    for (var i = 0; i < questionArr.length; i++) {
      
      var UserAnswer = prompt(Object.keys(questionArr[i]));

      if (UserAnswer === questionArr[i].getKeyByValue("correct")) {
        alert("Correct! " + UserAnswer + " is right!")
        winCount++
        console.log("Correct: " + UserAnswer);
      } else {
        alert("Try again...")
        console.log("Incorrect: " + UserAnswer);
      }
    }
    alert("You've answered " + ((winCount / 4) * 100) + "% correctly!")
    console.log("Win Ratio: " + winCount + ":" + 4);
  });
};