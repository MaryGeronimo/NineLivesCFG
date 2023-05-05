function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;


    if (question1 == 'food') {
        correct++;
    }

    if (question2 == 'fight') {
        correct++;
    }

    if (question3 == 'All the time') {
        correct++;
    }

    document.getElementById('after_submit').style.visibility = 'visible';
    document.getElementById('number_correct').innerHTML = 'you got ' + correct + ' correct';
}