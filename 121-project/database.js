// Node.js + Express server backend for petsapp
// v2 - use SQLite (https://www.sqlite.org/index.html) as a database
//
// Taken from: COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// run this once to create the initial database as the data.db file
//   node create_database.js

// to clear the database, simply delete the pets.db file:
//   rm data.db

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('data.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE questions_to_contexts (idx TEXT, number TEXT, content TEXT, topic TEXT)");
  db.run("CREATE TABLE transcripts (transcript TEXT)");
  db.run("CREATE TABLE words_said_to_text (words TEXT)");
  db.run("CREATE TABLE audio (audiofiles TEXT)");

  // insert 10 rows of data:
  db.run("INSERT INTO questions_to_contexts VALUES ('1', '1', 'You are a trash jungler.', 'swearing')");
  db.run("INSERT INTO questions_to_contexts VALUES ('2', '2', 'Your brain must be a pea.', 'profanity')");
  db.run("INSERT INTO questions_to_contexts VALUES ('3', '3', 'Lol, just concede piece of garbage.', 'sarcasm')");
  db.run("INSERT INTO questions_to_contexts VALUES ('4', '4', 'Hey, just concede with us or I will report.', 'emphasis')");
  db.run("INSERT INTO questions_to_contexts VALUES ('5', '5', 'OMG, your gank and gameplay suck.', 'anger')");
  db.run("INSERT INTO questions_to_contexts VALUES ('6', '6', 'Stop fighting dude.', 'disappointment')");
  db.run("INSERT INTO questions_to_contexts VALUES ('7', '7', 'Get out of my lane!', 'sadness')");
  db.run("INSERT INTO questions_to_contexts VALUES ('8', '8', 'Get your CS up.', 'sexual')");
  db.run("INSERT INTO questions_to_contexts VALUES ('9', '9', 'Use your ult yo.', 'violence')");
  db.run("INSERT INTO questions_to_contexts VALUES ('10', '10', 'I will report and find you irl.', 'threat')");

  console.log('successfully created the questions_to_contexts table in data.db');

  // print them out to confirm their contents:
  db.each("SELECT idx, number, content, topic FROM questions_to_contexts", (err, row) => {
      console.log(row.idx + ": " + row.number + ' - ' + row.content + ' - ' + row.topic);
  });
});

db.close();
