# GameFormatics - Toxicon

## Helen Cheng
<li>Implemented functionality for uploading text onto website.</li>
<li>Wrote code using IBM Watson Text-to-Emotion API for generating sentiment and emotion breakdown data for transcripts.</li>
<li>Made some significant UI improvements, such as color theme and formatting.</li>
<li>Included a navigation bar.</li>
<li>Implemented Plotly graphs for audio and text emotional results.</li>
<li>Created POST and GET requests for the initial text upload function.</li>
<li>Created new database tables for emotional data.</li>
<li>Did video capture and voice over for demo video.</li>

## Andrew Nguyen
<li>Implemented functionality for uploading files onto the website</li>
<li>Wrote the code for interfacing with the IBM Text-to-Speech API </li>
<li>Made basic html improvements like the textarea for text upload</li>
<li>Created some potential user scenarios for the final product </li>
<li>Created most of the elements and interactions on the audio page</li>
<li>Worked on code for cleaning/parsing JSON data from APIs used</li>
<li>Wrote the code for generating the SQLite database and populating its chart</li>
<li>Wrote the code for initializing the node.js backend and starting a server on localhost</li>
<li>Fixed bugs and technical issues with the API</li>

## Wayne Phung
<li>Implemented earlier stages of account login and CSS stylings.</li>
<li>Integrated the Google Sign-In button for authenticating user login on the login page.</li>
<li>Performed, tested, implemented, and iterated on code for the quiz functionality.</li>
<li>Showed the recorded responses and Plotly graph of the user's correct responses within the quiz page.</li>
<li>Oversaw the production of footage and editing related to the final video.</li>

## Source Code Files

### The Server File
#### server.js

This file is where most if not all of our backend code lies.
Most of our site interactions with outside APIs occur here as well
as the code for starting the server.

### The Database File
#### database.js

This file contains the SQL code that generates a data.db file that acts as the SQLite database which stores primarily text information for use on our server.

### Login JavaScript File
#### login.js

This javascript file runs the Google Sign-In button functionality.
and may discreetly show information in the console about basic
profile information about a person, such as their profile name
and email. There is a sign-out button below it to truly sign
out the person from their Google account on the website.

This file would be used for the index.html login screen.

### Quiz JavaScript File
#### quizQuestions.js

This file is used for quiz.html webpage.

This javascript file ensures that the essential interactions within 
the buttons and responses from the user are collected to provide 
scores and reviews of their responses. A data visualization bar chart 
is provided after the user fully completes the quiz.

### Audio Upload Page
#### audio.html
This is the page for users to upload any audio of their in-game interactions for emotional analysis. This page holds the front-end for a combination of our file upload, speech-to-text, and natural language understanding code. By interacting with the page, users can view a transcript of what they said in their audio clip as well as the returned analysis displayed both in text and in a pie chart form.

### Home Page
#### home.html

This is the main menu of the Toxicon website, which has the navigation bar.
This page shows options for the user to input text for toxicity, upload an audio file
for analyzing emotional factors of speech, and even take a quiz to assess the person
to correctly identify toxic phrases.

### Login Page
#### index.html

This is the main screen that the user would first see.
Although the native account login and sign-up functionalities
have remained stagnant and unusable, both the login and the
Google Sign-In button can be used to sign in (the login
button can be redirected for the sake of user testing).

### CSS Page
#### main.css

Style sheet for every page.
Used to improve visuals, visibility, and usability.

### Profile Page
#### profile.html

This is the user's profile page used to store an user's profile information, such as name, in game
usernames, and scores over time. The user should evaluate their toxicity using the text/audio 
options or taking a quiz, and the average and most recent should show up here. Unfortunately, 
this is all currently hard coded, though we finally have Google Sign In working, so hopefully we 
can store data for each person through Google.

### Quiz Page
#### quiz.html

This web page serves as the third key element to the Toxicon website as it
allows the user to take a short, 10 question quiz. This quiz assesses
how well the user can identify harmful in-game phrases from non-harmful
ones. After the quiz, the user will be shown the amount of answers correct
and that user can choose to view their responses as well as their data
visualization of their performance against the average scores of others
that have taken the quiz (the average score shown is arbitrarily hard-coded).

### Resources Page
#### resources.html

A basic compilation of resources for toxic people to look over and
improve their behavior. Currently fairly sparse, but it's a start.
Ideally we would recommend resources based on their score level
and games they play.

### Results Page
#### results.html

This is a static screen, which was meant to show user's current percentile 
of toxicity, relative to other users/players. This also has a button that
refers you to external resources to improve the user's toxic behavior...
or go back to the main menu page.

### Trend / Report History Page
#### trend.html

Ideally, the user's data would show up on this page so they
can review their past evaluations - has their toxicity gone down?
They can evaluate this by looking at how much anger their text or
audio submissions tend to make up their words, and if their quiz
scores are especially low compared to the average. We would like
to eventually use this page to store all information, unique to
each user, which we started with the Google Sign In.

### Text Upload Page
#### upload.html

If the user can't record audio of just themselves playing (or they
want to rewrite what was shown in the chat log), he or she has the
option to type in those words directly. This way, our users are
not restrained to just uploading audio. We give the same kind of
results than we would for audio - a sentiment score, emotional score
for 5 emotions, and a useful pie chart that breaks down how much
emotion there is in the text relative to each other. The numbers
indicate relevance - how likely it is between 0 and 1 
(0 meaning no correlation, 1 meaning high correlation) that the 
words have that emotion.

Because we use AJAX, there are separate buttons to start analyzing
text and then getting the scores. Ideally we could merge these
two buttons in the future, but for now they are simply POST and GET
requests.

## Video Link
[Replace with Real Link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
