# GameFormatics Project Proposal
#### Wayne Phung, Helen Cheng, and Andrew Nguyen

## For our project, we came up with several ideas related to video games and video game data:

### #1 An app for assessing player/gaming behavior.
Using chat logs and audio recordings, we can evaluate players’ emotion by running what they say (in chat versus in real life) through a natural language processing API. Then we give each player a “toxicity” score - how negative were they during the match? How do they compare to others? May be interesting to objectively see how negative someone is on a scale. Some concerns may be the ease of data collection, particularly sorting and consent.

### #2 An app for surveying key-binding for games, for performance assessment and comparison.
Another idea we had was an app that would collect data on the keybindings of our users in various games. With this data, we could compare the individual users’ keybindings to various groups including but not limited to: other users, professional players, and popular online personalities. We could then match our users’ keybinding data to their rank of play using an online API either provided by the games’ developers or by a third-party game tracking API. With this new data set, we can see trends in preferred keybindings, hand positions, and the performance related to these factors. This can help users optimize their finger positioning and solve then numerous debates held through many of these games as to which key/button is better for what. This data could potentially be displayed in a sort of heatmap format based on keys and what our users bind to them.

### #3 An app that takes data, analyzes the meta. Helps to compare the trend of how champions/in-game items are played and changes to builds.
We show the champion/character’s stats, correspond them to recommended items, view item builds, and explain to the user how each of the items affect the champion’s factors of performance (defense, attack power, movement speed, etc.). Numbers will be important in order to keep track of stat changes, but we will also use the game API to make qualitative assessments of each item based on how the numbers of each stat correspond to averages across the champions and other champions of similar roles. Typical item builds will be compared against a corresponding champion with a respective item build. This will not only assess which champion is comparable, but also explain in detail why the opposing champion may win/lose against the player’s chosen champion.

This tracker would also use the history of API to track items and their frequency of usage based on patch updates that affect a specific timeframe of the set of items.


### #4 Seeing how much you are improving your gameplay (in a cumulative fashion over the course of time).
Using a game API, we will gather play data of a convenience sample of players of League of Legends and analyze their in-game tendencies: which champion they choose, which maps they play on, how they play on those maps, their KDA ratio, their win rate and their recent streaks, and other pertinent data. We will use those numbers to form a metric of the trends (z-scores) in their game performance over time, and analyze these same tendencies over a period of time (the last several days, for example) and calculate z-scores for that period of time. We will analyze the players’ performances by comparing the historical z-scores and the recent z-scores to determine if the players are improving their play, and by how much.

### #5 Hearthstone Card Ranker
Another idea is to create a website that would present various cards from the Blizzard card game Hearthstone and ask users to rate the card on some sort of scale. We could then compare this data to perhaps data taken from Hearthpwn or another card tracking site and perhaps make connections between a card’s perceived value and it’s true impact on the overall game itself.

## Thanks for the feedback, sorry for the long proposal we had lots of ideas :P
