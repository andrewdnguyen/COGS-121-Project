"use strict";
$(document).ready(() => {
    let quizButton = $('#startQuiz');
    let quizQuestion = $('.quoteNum');
    let prevQuestion = $('#prevQ');
    let nextQuestion = $('#nextQ');
    let number = 0;
    prevQuestion.hide();
    nextQuestion.hide();
    $('#startQuiz').click(() => {
      quizButton.text(quizButton.text()== 'Click me!' ? 'Quit quiz and hide questions.' : 'Click me!');
      if (quizQuestion.text() != "") {
          quizQuestion.empty();
          prevQuestion.hide();
          nextQuestion.hide();
          number = 0;
          console.log('Quitted quiz.');
      } else {
          quizQuestion.append("Question #" + number);
          prevQuestion.show();
          nextQuestion.show();
          console.log('startQuiz clicked!');
      }
    });
    $('#prevQ').click(() => {
        if (number > 0){
            number--;
            quizQuestion.text('Question #' + number);
            console.log('Previous question!');
        } else {
            console.log('No previous question!');
        }
    });
    $('#nextQ').click(() => {
        number++;
        quizQuestion.text('Question #' + number);
        console.log('Next question!');
    });
});
/*$(document).ready(() => {
  $('#startQuiz').click(() => {
      let quizQuestions = $('.quizQs');
      console.log('startQuiz clicked!');
      if ($('#startQuiz').text() == 'Click me!') {
          $('#startQuiz').text() == 'Quit quiz and hide questions.'
          quizQuestions.empty();
      } else {
          $('#startQuiz').text() == 'Click me!';
          quizQuestions.append("text");
      }
  });
});
*/
