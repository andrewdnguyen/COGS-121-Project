"use strict";
$(document).ready(() => {
    let quizButton = $('#startQuiz');
    let quizQuotes = $('.quoteNum');
    let topic = $('#topic');
    let prevQuotes = $('#prevQ');
    let nextQuotes = $('#nextQ');
    let answer = $('#answer');
    let number = 1;
    topic.hide();
    prevQuotes.hide();
    nextQuotes.hide();
    answer.hide();
    $('#startQuiz').click(toggleQuiz);
    $('#prevQ').click(() => {
        if (number > 1){
            number--;
            quizQuotes.text('Quote #' + number);
            randQuote();
            console.log('Previous quote!');
        } else {
            console.log('No previous quote!');
        }
    });
    $('#nextQ').click(() => {
        number++;
        randQuote();
        console.log('Next quote!');
    });
});


function toggleQuiz(){
    let quizButton = $('#startQuiz');
    let quizQuotes = $('.quoteNum');
    let topic = $('#topic');
    let quote = $('.quote');
    let prevQuotes = $('#prevQ');
    let nextQuotes = $('#nextQ');
    let answer = $('#answer');
    let number = 1;
    quizButton.text(quizButton.text()== 'Click to start the quiz!' ? 'Quit quiz and hide quotes.' : 'Click to start the quiz!');
    if (quizQuotes.text() != "") {
        quizQuotes.empty();
        topic.hide();
        quote.hide();
        prevQuotes.hide();
        nextQuotes.hide();
        answer.hide();
        number = 1;
        console.log('Quitted quiz.');
    } else {
        randQuote();
        quizQuotes.text("Quote #" + number);
        topic.show();
        quote.show();
        prevQuotes.show();
        nextQuotes.show();
        answer.show()
        console.log('Started quiz.');
      }
}

function randQuote() {
    let quizButton = $('#startQuiz');
    let quizQuotes = $('.quoteNum');
    let topic = $('#topic');
    let prevQuotes = $('#prevQ');
    let nextQuotes = $('#nextQ');
    let number = 1;
    topic.show();
    prevQuotes.show();
    nextQuotes.show();
    let randNum = Math.floor((Math.random() * 10) + 1);
    const requestURL = 'quizQ/' + randNum;
    console.log('making ajax request to:', requestURL);
    $.ajax({
      // all URLs are relative to http://localhost:3000/
      url: requestURL,
      type: 'GET',
      dataType : 'json', // this URL returns data in JSON format
      success: (quotes) => {
          console.log('Quiz question shown!', quotes);
          if (quotes.number && quotes.content && quotes.topic) {
            //$('#status').html('Successfully fetched data at URL: ' + requestURL);
            $('.quoteNum').html('Quote: ' + quotes.number);
            $('#topic').html('Topic: ' + quotes.topic);
            $('.quote').html('Read this: ' + quotes.content);
          } else {
              //$('#status').html('Error: could not find user at URL: ' + requestURL);
              // clear the display
              $('.quote').html('Couldn\'t retrieve quote at ' + requestURL);
          }
      }
    })
    .always(function( xhr, status ) {
        console.log("The request is complete!");
    });
    $(document).ajaxError(() => {
      $('.quote').html('Error: unknown ajaxError!');
    });
}

function showPassword() {
    var password = document.getElementById("passInput");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

/*$(document).ready(() => {
  $('#startQuiz').click(() => {
      let quizQuotess = $('.quizQs');
      console.log('startQuiz clicked!');
      if ($('#startQuiz').text() == 'Click me!') {
          $('#startQuiz').text() == 'Quit quiz and hide questions.'
          quizQuotess.empty();
      } else {
          $('#startQuiz').text() == 'Click me!';
          quizQuotess.append("text");
      }
  });
});
*/

/*Discarded code for quiz buttons.*/
/*$('#startQuiz').click(() => {
  quizButton.text(quizButton.text()== 'Click me!' ? 'Quit quiz and hide quotes.' : 'Click me!');
  if (quizQuotes.text() != "") {
      quizQuotes.empty();
      prevQuotes.hide();
      nextQuotes.hide();
      number = 1;
      console.log('Quitted quiz.');
  } else {
      $('#startQuiz').change(randQuote);
      quizQuotes.text("Quote #" + number);
    }
});
$('#prevQ').click(() => {
    if (number > 1){
        number--;
        quizQuotes.text('Quote #' + number);
        console.log('Previous quote!');
        $('#prevQ').change(randQuote);
    } else {
        console.log('No previous quote!');
        $('#prevQ').change(randQuote);
    }
});
$('#nextQ').click(() => {
    number++;
    quizQuotes.text('Quote #' + number);
    $('#nextQ').change(randQuote);
    console.log('Next quote!');
});*/
