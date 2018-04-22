// Prerequisites - first run:
//   npm install
//
// which will look in package.json and install all dependencies
// (e.g., express)
//
// To start the server, run node server.js in Git Bash
// and open the frontend webpage at http://localhost:3000/index.html/

const express = require('express');
const app = express();

// put all of your static files (e.g., HTML, CSS, JS, JPG) in the static_files/

app.use(express.static('static_files'));

const data =
/*
{
  'Philip': {job: 'professor', pet: 'cat.jpg'},
  'John': {job: 'student',   pet: 'dog.jpg'},
  'Carol': {job: 'engineer',  pet: 'bear.jpg'}
};
*/
{
  "1": {number: "1", content: "Swearing"},
  "2": {number: "2", content: "Profanity"},
  "3": {number: "3", content: "Sarcasm"},
  "4": {number: "4", content: "Emphasis"},
  "5": {number: "5", content: "Anger"},
  "6": {number: "6", content: "Disappointment"},
  "7": {number: "7", content: "Sadness"},
  "8": {number: "8", content: "Sexual"},
  "9": {number: "9", content: "Violent"},
  "10": {number: "10", content: "Threat"}
};

app.get('/quiz/:number', (req, res) => {
  const nameToLookup = req.params.number; // matches ':number' above
  const val = data[nameToLookup];
  console.log(nameToLookup, '->', val); // for debugging
  if (val) {
    res.send(val);
  } else {
    console.log("Something's gone wrong!")
    res.send({}); // failed, so return an empty object instead of undefined
  }
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/index.html');
});
