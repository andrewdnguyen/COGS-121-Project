# Milestone 6

## UI Improvements

Our UI, in terms of HTML and CSS is relatively the same as it was before. We made some minor changes to it, however, in order to improve on the user experience. One change we made, for example, was changing the text input box into a text area as to allow for larger text inputs to be read and scrolled through. Another change we made was to enlarge some of the text in our quiz, which we found to be quite small for laptop and desktop users. Other than that we made a few minor additions including a Google login button which we may utilize and implement in the future. Other than that the rest of our changes were made in regards to data visualization and displaying the data which we were receiving from the IBM Watson Natural Language Understanding API.

## Data Visualization

We originally thought of just implementing bar charts, visualizing an emotion's relevancy score out of 10 with a full bar being 10. However, a relevance score is an unintuitive way to understand the data. The user wants to understand how much of a particular emotion makes up their speech. By creating a visual pie chart, we show more prevalent emotions with larger sections. This way, the user easily understands the emotional makeup of their words.

![](/m6-screenshots/emotion-pie-chart.png)

We generated this using Plotly.js because of how simple it was to implement. Then we did some simple math, which goes like this:
- Add up all relevance scores to get a total score (e.g. 1.5)
- Anger has a relevancy score of 0.76, so divide it by the total
  - 0.76/1.5 = 0.5 -> 50%
- On pie chart, Anger makes up 50% of it
- Now the user knows that the majority of the transcript was angry.
