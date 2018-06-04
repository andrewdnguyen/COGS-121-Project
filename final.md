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
<li></li>

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

### Quiz JavaScript File
#### quizQuestions.js

### Audio Upload Page
#### audio.html
This is the page for users to upload any audio of their in-game interactions for emotional analysis. This page holds the front-end for a combination of our file upload, speech-to-text, and natural language understanding code. By interacting with the page, users can view a transcript of what they said in their audio clip as well as the returned analysis displayed both in text and in a pie chart form.

### Home Page
#### home.html

### Login Page
#### index.html

### CSS Page
#### main.css

Style sheet for every page.
Used to improve visuals, visibility, and usability.

### Profile Page
#### profile.html


### Quiz Page
#### quiz.html


### Resources Page
#### resources.html

A basic compilation of resources for toxic people to look over and
improve their behavior. Currently fairly sparse, but it's a start.
Ideally we would recommend resources based on their score level
and games they play.

### Results Page
#### results.html


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
indicate relevance - how likely it is between 0 and 1 (0 meaning no correlation, 1 meaning high correlation) that the words have that emotion.

Because we use AJAX, there are separate buttons to start analyzing
text and then getting the scores. Ideally we could merge these
two buttons in the future, but for now they are simply POST and GET
requests.

## Video Link
[Replace with Real Link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
