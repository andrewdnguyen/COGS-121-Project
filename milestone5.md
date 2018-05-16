# Milestone 5

## UI Improvements

Our UI has improved both visually and functionally. The backend is all hooked up and shows 2 new user actions on top of our original text-input emotional analysis from last milestone. Visually, we chose a color palette and revamped some text and the structure so it's clear where to go. Next iteration, we'll have data visualizations and a more modern, sleek look.

![](/m5-screenshots/home-page.png)

## User Action 1

The quiz assesses the person's ability to correctly identify banter quotes from quotes that are deemed badmouthing. There would be a total of 10 quotes that the user would answer through and after that user has finished the quiz, the user would be notified of their score. That user can view their responses to see what choices they got correct/incorrect. The quiz is repeatable and can be quit at any time, as the user would simply press the 'Quit quiz and hide quotes.' button or the 'Take the quiz again!' button after they have fully completed the quiz. This is an improvement from our last quiz, which did not give a score or feedback and was poorly formatted. To take a quiz, simply go to the home page, click "start quiz", click "click here to start quiz", and select either "BadMouth" or "Banter" depending on the level of toxicity you believe is presented by the quote before clicking next quote to bring up the next quote. After 10 quotes, the quiz should end and your score will be displayed for review.

![](/m5-screenshots/quiz-example.png)
![](/m5-screenshots/6-correct.png)

## User Action 2

The speech-to-text aspect of the app is now functional. Users can upload audio clips (albeit short and no background noise) to our application, which will output a transcription. This transcription will be used to analyze it's toxicity score. It's similar to our last notable user action, which was inputting text to get it's emotional analysis. We decided to leave both in for a more accessible range of options. It's an improvement from the last milestone because this was not a complete user action before, and the speech-to-text API was not accepting audio nor outputting information to the frontend - it only took audio clips that were already hard coded into the project. Now, our server can handle audio transcription too. To do a speech to text analysis go to the home page and select "send audio". Click "choose file" and find a .mp3 audio file you would like to upload, click "submit" and the page should refresh. Once the page has refreshed click "start job" and wait for success message to appear. Once it does, you can select "get transcription" to see what text our app got from your audio file. Once you receive the transcription, you can select "analyze transcription" in order to get an emotional analysis. 

![](/m5-screenshots/get_transcription.png)
![](/m5-screenshots/analyze-audio.png)
