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

    if (question3 == 'all the time') {
        correct++;
    }

    var messages = ['you are garfield', 'you are puss in boots', 'you are tom'];
    

    var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }

    if (correct > 2) {
        range = 0;
    }

    document.getElementById('after_submit').style.visibility = 'visible';

    document.getElementById('messages').innerHTML = messages[range];
    document.getElementById('number_correct').innerHTML = 'you got ' + correct + ' correct';

}

function hover(img) {
    img.src = "../Pictures/Icons/Photography Icon Purple.png";
}

function hoverOut(img){
    img.src = "../Pictures/Icons/Photography Icon V3.png"
   }

//    function hover(img) {
//     img.src = "../Pictures/Icons/Film Icon Purple.png";
// }

// function hoverOut(img){
//     img.src = "../Pictures/Icons/Film Icon V3.png"
//    }

//    function hover(img) {
//     img.src = "../Pictures/Icons/Game Icon Purple.png";
// }

// function hoverOut(img){
//     img.src = "../Pictures/Icons/Film Icon V3.png"
//    }

//enables Navbar mobile dropdown link menu
const toggleButton = document.getElementById(`toggleButton`);    
const naviList =  document.getElementById(`navi-list`);

toggleButton.addEventListener(`click`, () => {
    naviList.classList.toggle(`active`);

})
