# Milestone 4

##Differences from Last Milestone

##### One of the first differences we implemented was that we started working on a speech-to-text transcription which is displayed when you first run the server. At the moment, we haven’t hooked it up to the front-end yet and it only takes in default audio files that we have included in our files, but the idea for it is that it will transcribe audio data provided by our users of their voice communications in game. This transcription will then be sent to a separate natural language processing API which will evaluate their speech. 

##### However, an API that we did generate and implement was the Watson’s Natural Language Processing API, derived from the IBM Cloud service platform. Our functionality for this API would be to take a user’s text input, have the API analyze the speech for specific parameters related to emotion, and relay the parameters back to the user. So far, we are not able to refresh the database and return different responses from the first user input. Yet, we are still capable of returning such parameters, including user text input, sentiment scores, ratings for five emotions (sadness, joy, disgust, fear, and anger), positivity response, and relevance rating. We have yet to dive into refreshing the database such that it can analyze any input any number of times after the user pushes the “Analyze Text” button.

![](/m4-screenshots/upload-new.PNG)


##### Overall, we are certain that our UI has drastically improved, thanks to just a couple of hours of CSS handling and converting some of our hyperlinks. First, we decided on a basic color scheme of two colors while we made quick, yet prudent decisions on our typefaces as well. Medium-dark green for the background color and white for the general text were the general colors that we tested instead of the browser’s previous default black text and white background. Besides choosing these colors on the basis of associating toxicity (hence our website title, Toxicon) with the corresponding green color, we wanted to really test our website’s general layout and readability of the text, input fields, radio buttons, and buttons. We figured that a change in typographic choice (Averia Sans Libre for the web page titles and Ninuto for smaller body text) and high contrast between the colors would be a good starting point to make the user input fields as simple and readable as possible. We reinforced the branding of the website by comparing the different hyperlinks and buttons that were used and converted these hyperlinks into the existing buttons, so oddly blue underlined text would be no more. All of the CSS handled so far for all websites is used under a single CSS file for simple code management and size consistency of the HTML/UI components.

| Old Homepage (index.html) | New Homepage (index.html) |
| :------------------------ | :-----------------------  |
| ![](/m4-screenshots/index-old.PNG) | ![](/m4-screenshots/index-new-1.PNG) |


| Old profile.html | New profile.html |
| :--------------- | :--------------- |
| ![](/m4-screenshots/profile-old.PNG) | ![](/m4-screenshots/profile-new-1.PNG) |

Privacy Issues
##### When working with data APIs and user data, it is important to take concerns of privacy into priority to ensure that our app maintains a trustworthy relationship with our users. Our app at the moment takes in text data and aims to eventually take in audio data from our users in the future. All of this data can reveal personal information about our users and their online personas which may be something they don’t want others to know about. To ensure anonymity for our users, we can do things like not attach their data to their account/personal information and provide users the option to give data but not enforce that they do. At the current moment, we plan to use generic samples that we create ourselves in terms of text and audio to show to the TAs for grading feedback as to ensure that the information we have affects nobody besides ourselves. Should any other concerns of privacy come up during our development, our first course of action will be to consult the TAs or Professor Guo as soon as possible.

##APIs that we have chosen (so far)

#### [IBM Watson Speech to Text API] (https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/)

##### We decided to go with this API because we thought that information that many gaming companies have on in-game dialogue (e.g. Riot Games for League of Legends gameplay chat) would not be as readily accessible within the scope of the milestone. Our alternative idea would be to have the user be able to consciously upload a recording of their games so that audio recordings could be automatically transcribed into text. Hence, it would be another, more obvious reason how this API fits into what we want to do: to help improve our user’s existing and future behavior through the continuous analysis of audio recordings of the user during games.
Full URL: https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/

#### [IBM Watson Natural Language Understanding API] (https://www.ibm.com/watson/developercloud/natural-language-understanding/api/v1/)

##### As another IBM Cloud API, this goes in hand how it takes the speech, analyzes the words of the speech for emotional context, and returns the specific parameters of sentiments, emotions, and other relevant factors. We thought that this API would be essential for showing the user with useful text data about how their emotions were during a game as well as leveraging both quantitative and qualitative data to make these findings more intuitive and easier for users to understand.
Full URL: https://www.ibm.com/watson/developercloud/natural-language-understanding/api/v1/
