# Milestone 5

## UI Improvements

Our UI has improved both visually and functionally. The backend is all hooked up, presenting data for our 

## User Action 1

The quiz assesses the person's ability to correctly identify banter quotes from quotes that are deemed badmouthing. There would be a total of 10 quotes that the user would answer through and after that user has finished the quiz, the user would be notified of their score. That user can view their responses to see what choices they got correct/incorrect. The quiz is repeatable and can be quit at any time, as the user would simply press the 'Quit quiz and hide quotes.' button or the 'Take the quiz again!' button after they have fully completed the quiz. This is an improvement from our last quiz, which did not give a score or feedback and was poorly formatted.

![](/m5-screenshots/quiz-example.png)
![](/m5-screenshots/6-correct.png)

## User Action 2

The speech-to-text aspect of the app is now functional. Users can upload audio clips (albeit short and no background noise) to our application, which will output a transcription. This transcription will be used to analyze it's toxicity score. It's similar to our last notable user action, which was inputting text to get it's emotional analysis. We decided to leave both in for a more accessible range of options. It's an improvement from the last milestone because this was not a complete user action before, and the speech-to-text API was not accepting audio nor outputting information to the frontend - it only took audio clips that were already hard coded into the project. Now, our server can handle audio transcription too.
