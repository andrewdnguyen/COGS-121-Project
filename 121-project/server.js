// Prerequisites - first run:
//   npm install
//
// which will look in package.json and install all dependencies
// (e.g., express)
//
// To start the server, run node server.js in Git Bash
// and open the frontend webpage at http://localhost:3000/index.html/

//Here's some things you may need to import for the server to work,
//use the following commands:
//npm install
//npm install watson-developer-cloud
//npm install https://github.com/mapbox/node-sqlite3/tarball/master
//npm install express-fileupload

//To load database use node database.js
//Run server with node server.js


const express = require('express');
const app = express();
var upload = require('express-fileupload');

// use this library to interface with SQLite databases: https://github.com/mapbox/node-sqlite3
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('data.db');

const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1'); //Import Watson TTS Service
const fs = require('fs'); //For writing text to files
const speech_to_text = new SpeechToTextV1 ({ //All necessary api verification data
  username: 'c51d6149-2c60-41d7-ae78-4e824772aa0a',
  password: 'M3auuesFSoXu',
  headers: {
  'X-Watson-Learning-Opt-Out': 'true'
  }
});

app.use(upload()); //configure middleware for fileupload

// put all of your static files (e.g., HTML, CSS, JS, JPG) in the static_files/
app.use(express.static('static_files'));

/**
  The text transcription code for the server. It takes in the sample.mp3 file
  and transcribes it onto a file labled "test".
*/
/** Older guaranteed working code.
var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var speech_to_text = new SpeechToTextV1 ({
  username: 'c51d6149-2c60-41d7-ae78-4e824772aa0a',
  password: 'M3auuesFSoXu',
  headers: {
  'X-Watson-Learning-Opt-Out': 'true'
  }
});
var files = ['sample.mp3'];
var params = {
    content_type: 'audio/mp3',
    audio: fs.createReadStream('sample.mp3'),
    'user_token': 'job25',
    timestamps: true
  };

  speech_to_text.createJob(params, function(error, job) {
    if (error)
      console.log('Error:', error);
    else
      console.log('No problems!');
  });

  let latestJobID = undefined;
  speech_to_text.checkJobs(null, (latestJobID = function(error, jobs) {
    if (error)
      console.log('Error:', error);
    else
      //console.log(JSON.stringify(jobs, null, 2));
      console.log('No problems!')
      let idVal = jobs.recognitions[0].id;
      params2 = {};
      params2['id'] = idVal;
      console.log(params2);
      speech_to_text.checkJob(params2, function(error, job) {
        if (error)
          console.log('Error:', error);
        else
          var string = (JSON.stringify(job.results[0].results[0].alternatives[0].transcript, null, 2))
          console.log(string);
          var fs = require('fs');
          fs.writeFile("test", string, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("The file was saved!");
          speech_to_text.deleteJob(params2, function(error) {
            if (error)
              console.log('Error:', error);
            else {
              console.log('Job Deleted, if errors should occur please remove deleteJob.')
            }
          });
      });
      });
  }));
*/

app.post('/upload',function(req,res){
  console.log(req.files);
  if(req.files.upfile){
    var file = req.files.upfile,
      name = file.name,
      type = file.mimetype;
    var uploadpath = __dirname + '/uploads/' + name;
    file.mv(uploadpath,function(err){
      if(err){
        console.log("File Upload Failed",name,err);
        res.send("Error Occured!")
      }
      else {
        console.log("File Uploaded",name);
        console.log("Adding " + "uploads/" + name + " to the database...");
        db.run(
          'INSERT INTO audio VALUES ($audiofiles)', //Insert transcript into the Transcripts table in data.db
          // parameters to SQL query:
          {
            $audiofiles: "uploads/" + name
          },
          // callback function to run when the query finishes:
          (err) => {
            if (err) {
              res.send({message: 'error in app.post(/text)'});
            } else {
                res.redirect('audio.html');
            }
          }
        );

      }
    });
  }
  else {
    res.send("No File selected !");
    res.end();
  };
})

  //ISSUE: CURRENTLY THE MOST RECENT JOB DISPLAYED IS ONE BEHIND IF ISSUES OCCUR RUN SERVER AGAIN!
  app.get('/encode', (req, res) => {
    db.all('SELECT audiofiles FROM audio', (err, rows) => {

      console.log(rows);
      const allFiles = rows.map(e => e.audiofiles);
      console.log(allFiles);

      var x = (allFiles.length - 1);
      let route = allFiles[x];
      console.log(route);

      var file = route;
      var params = { //Data about the audio file
          content_type: 'audio/flac', //filetype CHANGE TO MP3 if using mp3 files to test
          audio: fs.createReadStream(file), //Creates a stream to read the mp3 file
          //'user_token': 'job25',
          timestamps: true //Provides timestamp info
        };

        speech_to_text.createJob(params, function(error, job) { //Creates a job to read the audio file mentioned above
          if (error)
            console.log('Error:', error);
          else
            console.log('No problems!');
            res.send({message: 'Successfully created job!'});
          });
        });
      });

  app.get('/transcribe', (req, res) => {
      speech_to_text.checkJobs(null, function(error, jobs) { //Generates the list of all jobs created so far
        if (error)
          console.log('Error:', error);
        else
          console.log('No problems!')
          console.log(JSON.stringify(jobs, null, 2));
          let idVal = jobs.recognitions[0].id; //Extracts id from specific job info
          let params2 = {};
          params2['id'] = idVal;
          console.log(params2);
          speech_to_text.checkJob(params2, function(error, job) { //Usus prior job id to get transcript from job
            if (error)
              console.log('Error:', error);
            else
              var string = (JSON.stringify(job.results[0].results[0].alternatives[0].transcript, null, 2)); //Clean data to only show transcript
              console.log(string);
              db.run(
                'INSERT INTO transcripts VALUES ($transcript)', //Insert transcript into the Transcripts table in data.db
                // parameters to SQL query:
                {
                  $transcript: string
                },
                db.each("SELECT transcript FROM transcripts", (err, row) => { //Prints transcripts table for debugging
                    console.log("Inserted: " + row.transcript);
                }));

              var fs = require('fs'); //fs is used to write transcript to file
              fs.writeFile("test.txt", string, function(err) {
              if(err) {
                  return console.log(err);
              }
              res.send(string);
            });
          });
        });
      });


    /**
    var files = ['uploads/audio-file1.flac']; //Audio file to be transcribed
    for(var file in files) { //For loop in case we ever want to transcribe multiple files
    var params = { //Data about the audio file
        content_type: 'audio/flac', //filetype CHANGE TO MP3 if using mp3 files to test
        audio: fs.createReadStream(files[file]), //Creates a stream to read the mp3 file
        //'user_token': 'job25',
        timestamps: true //Provides timestamp info
      };
      speech_to_text.createJob(params, function(error, job) { //Creates a job to read the audio file mentioned above
        if (error)
          console.log('Error:', error);
        else
          console.log('No problems!');
      });
    }
      speech_to_text.checkJobs(null, function(error, jobs) { //Generates the list of all jobs created so far
        if (error)
          console.log('Error:', error);
        else
          console.log('No problems!')
          console.log(JSON.stringify(jobs, null, 2));
          for(let x = 0; x < jobs.recognitions.length; x++){ //For loop that gets the id of every job listed
          let idVal = jobs.recognitions[x].id; //Extracts id from specific job info
          let params2 = {};
          params2['id'] = idVal;
          console.log(params2);
          speech_to_text.checkJob(params2, function(error, job) { //Usus prior job id to get transcript from job
            if (error)
              console.log('Error:', error);
            else
              var string = (JSON.stringify(job.results[0].results[0].alternatives[0].transcript, null, 2)); //Clean data to only show transcript
              console.log(string);
              db.run(
                'INSERT INTO transcripts VALUES ($transcript)', //Insert transcript into the Transcripts table in data.db
                // parameters to SQL query:
                {
                  $transcript: string
                },
                db.each("SELECT transcript FROM transcripts", (err, row) => { //Prints transcripts table for debugging
                    console.log("Inserted: " + row.transcript);
                }));

              var fs = require('fs'); //fs is used to write transcript to file
              fs.writeFile("test.txt", string, function(err) {
              if(err) {
                  return console.log(err);
              }
              console.log("The file was saved with: " + string);
              speech_to_text.deleteJob(params2, function(error) { //Deletes job from list to avoid clutter
                if (error)
                  console.log('Error:', error);
                else {
                  console.log('Job Deleted, if errors should occur please remove deleteJob.')
                }
              });
          });
          });
        }
      });
**/
app.get('/text', (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all('SELECT words FROM words_said_to_text', (err, rows) => {

    var results;

    console.log(rows);
    const allWords = rows.map(e => e.words);
    console.log(allWords);


    var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
    var natural_language_understanding = new NaturalLanguageUnderstandingV1({
      'username': '8cbbdded-1f4d-4ea3-b143-13371634a65e',
      'password': 's8Yll4h8ASYf',
      'version': '2018-03-16'
    });

    var x = (allWords.length - 1);
    console.log(x);

    var parameters = {
      'text': allWords[x],
      'features': {
        'entities': {
          'emotion': true,
          'sentiment': true,
          'limit': 100
        },
        'keywords': {
          'emotion': true,
          'sentiment': true,
          'limit': 100
        }
      },
      "language": "en"
    }

    natural_language_understanding.analyze(parameters, function(err, response) {
      if (err)
        console.log('error:', err);
      else
        var results = JSON.stringify(response);
        console.log(JSON.stringify(response, null, 100));
        res.send(results);
    });
  });
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); // hook up with your app
app.post('/text', (req, res) => {
  console.log(req.body);

  var results;
  var wordsToAnalyze;

  db.run(
    'INSERT INTO words_said_to_text VALUES ($words)',
    // parameters to SQL query:
    {
      $words: req.body.words,
    },
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/text)'});
      } else {
        res.send({message: 'successfully run app.post(/text)'});
      }
    }
  );

});
    //});

/**
    Deprecated Database
const quotes =
{
  "1": {number: "1", content: "You are a trash jungler.", topic: "Swearing"},
  "2": {number: "2", content: "Your brain must be a pea.", topic: "Profanity"},
  "3": {number: "3", content: "Lol, just concede piece of garbage.", topic: "Sarcasm"},
  "4": {number: "4", content: "Hey, just concede with us or I'll report.", topic: "Emphasis"},
  "5": {number: "5", content: "OMG, your gank and gameplay suck.", topic: "Anger"},
  "6": {number: "6", content: "Stop fighting dude.", topic: "Disappointment"},
  "7": {number: "7", content: "Get out of my lane!", topic: "Sadness"},
  "8": {number: "8", content: "Get your CS up.", topic: "Sexual"},
  "9": {number: "9", content: "Use your ult yo.", topic: "Violent"},
  "10": {number: "10", content: "I'll report and find you irl.", topic: "Threat"}
};
*/
/*app.get('/quizQ/', (req, res) => {
  const allQuotes = Object.keys(quotes); // returns a list of object keys
  console.log('The quote is:', allQuotes);
  res.send(allQuotes);
});*/


app.get('/quizQ/:number', (req, res) => {
  const quoteToLookup = req.params.number; // matches ':number' above
  db.all(
   'SELECT * FROM questions_to_contexts WHERE idx=$number',
   // parameters to SQL query:
   {
     $number: quoteToLookup
   },
   (err, rows) => {
     console.log(rows);
     if (rows.length > 0) {
       console.log(rows[0]);
       res.send(rows[0]);
     } else {
       res.send({}); // failed, so return an empty object instead of undefined
     }
   }
)});

/**
app.get('/quizQ/:content', (req, res) => {
  const quoteToLookup = req.params.number; // matches ':number' above
  //const quizData = quotes[quoteToLookup];
  console.log(quoteToLookup, '->', quizData); // for debugging
  if (quizData) {
    res.send(quizData);
  } else {
    console.log("Something's gone wrong on retrieving the topic!")
    res.send({}); // failed, so return an empty object instead of undefined
  }
});
*/
/*const data =
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
});*/

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/index.html');
});
