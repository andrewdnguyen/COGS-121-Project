# Toxicon - An App for Analyzing Toxicity in Online Gaming Communication
### Made by Andrew Nguyen, Helen Cheng, and Wayne Phung

## Repository Description
The latest version of Toxicon can be found in the "121-project" directory. Writeups describing our development process can be found in the other .md files in the root folder and images can be found in the screenshots, prototype, and skeleton-images directories. 

## Setup Instructions
To run the app, proceed through the following directions:

1. Make sure that the latest version of Node.js is installed on your device.
2. Open your terminal and cd to the COGS-121-Project directory and then cd to the 121-project directory.
3. In your terminal input the following commands in order: **(Note: using just npm install is NOT recommended for this project)**
  - npm install watson-developer-cloud
  - npm install https://github.com/mapbox/node-sqlite3/tarball/master
  - npm install express-fileupload
  - npm install express
  - npm install body-parser
  - npm install plotly.js
  -npm install plotly
  - node database.js
  - node server.js
4. The app should now be running and can be accessed through your browser at [http://localhost:3000](http://localhost:3000).

## Troubleshooting
- Note that this version is a demo and therefore the app can be accessed simply by clicking on the login button on the login screen.
- All audio uploads must be in .mp3 format.
- If the app fails in any other case it is likely due to the API quota being reached. You will need to create an IBM Watson account and get   a new username and password for the TextToSpeech and NaturalLanguageUnderstanding APIs.
