"use strict";
$(document).ready(() => {
    let quizButton = $('#quizButton');
    let quizQuotes = $('.quoteNum');
    let topic = $('#topic');
    let quote = $('.quote');
    let number = 1;
    let counter = 0;
    //let prevQuotes = $('#prevQ');
    let nextQuotes = $('#nextQ');
    let answer = $('#answer');
    topic.hide();
    //prevQuotes.hide();
    nextQuotes.hide();
    answer.hide();
    // Enables view of the quiz. Begins with a random quote and r
    quizButton.click( function(){
        toggleQuiz();
        if (quizButton.text() == 'Click to start the quiz!'){
            $('#counter').hide();
            number = 1;
            counter = 0;
        } else {
            $('#counter').show();
        }
    });
    // Old, deprecated code for functionality of the previous quote.
    /*$('#prevQ').click(() => {
        if (number > 1){
            number--;
            quizQuotes.text('Quote #' + number);
            randQuote(number);
            console.log('Previous quote!');
        } else {
            console.log('No previous quote!');
        }
    });*/
    // Once any of the radio buttons is clicked, this enables the user to submit their response and move on to the next quote.
    $('input:radio').click( function(){
         $("#nextQ").prop("disabled",false);
    });
    $('#nextQ').click(() => {
        if ($("input:checked").val() == 'true'){
            counter++;
            console.log('Correct!');
        } else {
            console.log('Incorrect! Try again.');
        }
        $('#counter').text('Answers Correct: ' + counter + '/' + number);
        number++;
        randQuote(number);
        console.log('Next quote!');
        $('input:radio').prop("checked",false);
        $('#nextQ').prop("disabled", true);
        if (number > 10) {
            quizQuotes.hide();
            topic.hide();
            quote.hide();
            //prevQuotes.hide();
            nextQuotes.hide();
            answer.hide();
            $('#counter').text('You have finished the quiz! You answered ' + counter + ' quotes correctly!');
            quizButton.text('Take the quiz again!');
            console.log('You have finished the quiz! You answered ' + counter + ' quotes correctly!');
            number = 1;
            counter = 0;
        }
    });
});


function toggleQuiz(){
    let quizButton = $('#quizButton');
    let quizQuotes = $('.quoteNum');
    let topic = $('#topic');
    let quote = $('.quote');
    let number = 1;
    let counter = 0;
    //let prevQuotes = $('#prevQ');
    let nextQuotes = $('#nextQ');
    let answer = $('#answer');
    let counterShown = $('#counter');
    quizButton.text(quizButton.text() == 'Click to start the quiz!' ? 'Quit quiz and hide quotes.' : 'Click to start the quiz!');
    if (quizButton.text() != 'Quit quiz and hide quotes.') {
        quizQuotes.empty();
        topic.hide();
        quote.hide();
        //prevQuotes.hide();
        nextQuotes.hide();
        answer.hide();
        counterShown.empty();
        number = 1;
        counter = 0;
        console.log('Quitted quiz.');
    } else {
        quizButton.text('Quit quiz and hide quotes.');
        randQuote();
        quizQuotes.text("Quote #" + number);
        topic.show();
        quote.show();
        //prevQuotes.show();
        nextQuotes.show();
        nextQuoteButton(false);
        answer.show()
        console.log('Started quiz.');
      }
}

function randQuote(number) {
    let quizButton = $('#startQuiz');
    let quizQuotes = $('.quoteNum');
    let topic = $('#topic');
    //let prevQuotes = $('#prevQ');
    let nextQuotes = $('#nextQ');
    topic.show();
    //prevQuotes.show();
    nextQuotes.show();
    let randNum = Math.floor((Math.random() * 10) + 1);
    const requestURL = 'quizQ/' + randNum;
    console.log('making ajax request to:', requestURL);
    if (number == null){
        number = 1;
    }
    console.log("quote number: " + number);
    $.ajax({
      // all URLs are relative to http://localhost:3000/
      url: requestURL,
      type: 'GET',
      dataType : 'json', // this URL returns data in JSON format
      success: (quotes) => {
          console.log('Quiz question shown!', quotes);
          if (quotes.number && quotes.content && quotes.topic &&
              quotes.badmouth && quotes.banter) {
            //$('#status').html('Successfully fetched data at URL: ' + requestURL);
            $('.quoteNum').html('Quote: ' + number);
            $('#topic').html('Topic: ' + quotes.topic);
            $('.quote').html('Read this: ' + quotes.content);
            $('#badmouth').val(quotes.badmouth);
            $('#banter').val(quotes.banter);
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

function nextQuoteButton(boolean){
    if (boolean){
        $("#nextQ").prop("disabled",false);
    } else {
        $("#nextQ").prop("disabled",true);
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
