# JavaScript - Quiz (Part 1)
 
Your task in this assignment is to build a quiz game using JavaScript (and HTML).

We've defined a couple phases for building this game in a more structured/iterative fashion. If you're feeling a bit impatient with the progression, feel free to skip directly to Phase 2. But if you're not comfortable with JavaScript and DOM manipulation yet, we recommend going through Phase 1 first.

Please start out by creating a PR for this repo, and don't forget to push your code every 30-40 minutes just so we can see how its going.

---

## Phase 1

(As you read the instructions below, consider that this phase alone should probably have at least 6-10 commit messages for its features.)

### User Story

1. Your user loads the **index.html** page, which contains a button to begin the game.
2. They are presented with a `prompt()` asking them a multiple choice question.
3. Upon answer, they see an `alert()` telling them whether they answered correctly or incorrectly. They click "Okay" to move on.
4. Steps 2-3 repeat until there are no more questions.
5. Once they have answered all questions, they see an `alert()` telling them how many they answered correctly (out of however many questions there were), and something that looks like a percentage. E.g. **You answered 7 of 10 questions correctly, good for 70.0%**

### Clarifying the Assignment

1. Questions should be multiple choice. You'll have the stem (question), 4 answer choices, and only one of those answers should be correct. Every question should follow this format.
2. Don't worry about putting any content on the page -- we'll worry about DOM manipulation later.
3. Your game should contain at least 3 questions.

Build this however you can--don't worry about optimizing, refactoring, best practices, etc. Just think through the steps and implement whatever solution you can come up with.

This game can be built using a loop, which iterates over a collection of questions. But it does not have to use a loop. If you're struggling with the looping aspect of this game, try building it _without_ one.

It's true that you'll end up writing more lines of code, and you might be aware of the repetition (and violation of DRY), but--as the instructions above say--build this however you can.

---

## Phase 2

This phase of the game will abandon the use of prompts/alerts and instead use HTML elements. You'll use JavaScript to read/interact with those HTML elements (a.k.a. the "DOM").

This is comparable to when we went from the command-line to the Web. Much of your logic will remain the same, but your UX will change.

(This phase could easily have 20+ commits, if you're committing responsibly.)

### Instructions

First, update **index.html** by creating HTML elements that will contain the information that was previously displayed using prompts and alerts.

The **index.html** page should have the following HTML structure. (Note: The structure outlined below is just that--an _outline_. It's not real code. It's meant to serve as an outline for you to write the actual HTML.)

```
- `div#quiz` (This means make a `div` and give it an `id` of `quiz`.)
  - `div#question`
    - Empty for now. We'll use JavaScript to put question text into this.
  - `div#choices`
    - Empty for now. We'll use JavaScript to put question text into this.
  - `input[type=text]#answer` (This means make an `input` tag with attribute `type=text` and an `id` of `answer`.
  - `button#submitter` (This means make a `button` tag with an `id` of `submitter`.)
- `div#question_result`
  - Empty for now. We'll use JavaScript to put each question's result into this.
- `button#next`
  - This will eventually be the button that the user clicks after they see that a question was correct/wrong. It will load up the next question.
- `div#total_result`
  - Empty for now. We'll use JavaScript to put the quiz's final result into this.
```

Now, modify your JavaScript so that when the page loads, the first question's content is added into `div#question`. And do the same thing for the question's choices (into `div#choices`).

If it makes things easier, you can comment out large portions of **global.js**, as much of that code will be changing and/or be moved around.

Continue to add functionality that uses the elements on the page instead of prompts/alerts to conduct the quiz game:

- The user should type their answer for a question into `input[type=text]#answer`
- They should click `button#submitter` to submit that answer
- Whether they got the question correct/incorrect should be displayed in `div#question_result`
- Clicking `button#next` should replace the question and choices content with the next question. (It should also clear the user's answer to the previous question from the text field.)
- When the game is complete, the final quiz result information should be displayed in `div#total_result`

If you have trouble with this, consider taking a couple steps back and implementing the game with _just one question_ first. Don't worry about the functionality for `button#next` or even for `div#total_result` at all. Often, when a series of steps stumps us, it's best to focus in on just one step and then only zoom back out to the series after we succeed.

---

## Bonuses

This is just a set of extensions that some students might enjoy. They are entirely optional.

- The user chooses their answer by selecting from a group of radio buttons instead of typing in their answer value
- Don't let a user move on to the next question until they find the current question's correct answer
- `button#submitter` cannot be clicked (i.e. it's disabled) if no answer has been typed/chosen yet