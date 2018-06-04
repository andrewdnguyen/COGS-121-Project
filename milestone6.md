# Milestone 6

## UI Improvements

Our UI in terms of HTML and CSS is relatively the same as it was before. We made some minor changes to it, however, in order to improve on the user experience. For exmaple, we changed the text input box into a text area as to allow for larger text inputs to be read and scrolled through. 

![](/m6-screenshots/larger-text-area.png)

Another change we made was to enlarge some of the text in our quiz, which we found to be quite small for laptop and desktop users. 

![](/m6-screenshots/larger-text-quiz.PNG)

We also implemented a Resources tab last week and added a bit to it. Here, users can find ways to improve their behavior and become less toxic.

![](/m6-screenshots/resources.png)

Other than that we made a few minor additions including a Google login button which we may utilize and implement in the future. We decided to get rid of our "Login" and "Make Account" buttons after reviewing the security slides - it's better to use Google's system instead. Other than that the rest of our changes were made in regards to data visualization and displaying the data which we were receiving from the IBM Watson Natural Language Understanding API.

![](/m6-screenshots/google-sign-in.png)

## Data Visualization

We originally thought of just implementing bar charts, visualizing an emotion's relevancy score out of 10 with a full bar being 10. However, a relevance score is an unintuitive way to understand the data. The user wants to understand how much of a particular emotion makes up their speech. By creating a visual pie chart, we show more prevalent emotions with larger sections. This way, the user easily understands the emotional makeup of their words.

Audio Input (large mp3 file)

![](/m6-screenshots/emotion-pie-chart.png)

Text Input ("I love oranges")

![](/m6-screenshots/text-visualization.png)

We generated this using Plotly.js because of how simple it was to implement. Then we did some simple math, which goes like this:
- Add up all relevance scores to get a total score (e.g. 1.5)
- Anger has a relevancy score of 0.76, so divide it by the total
  - 0.76/1.5 = 0.5 -> 50%
- On pie chart, Anger makes up 50% of it
- Now the user knows that the majority of the transcript was angry.

As for quiz.html, at first we thought we could only fake the data visualization part for the results. But, as it turns out, implementing the bar chart was as simple as the emotion pie chart demonstrated. There is an accurate representation of the number of responses shown relative to the average score of other users (which we have arbitrarily set to 8).

![](/m6-screenshots/quiz-results-visualization.PNG)

There really is not much math involved, just using the number of correct responses as data for the bar chart and some simple numerical conversions to percentage.
