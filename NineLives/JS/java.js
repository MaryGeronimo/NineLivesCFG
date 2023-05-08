//quiz part
const questions = [['which cat is known for his love for lasagna and his hatred of mondays? (grafield or Tom)','grafield',], ['who said this famous quote Fear me if you dare? (grafield or puss in boots)','puss in boots'],['what is the full name of Tom in tom and jerry?(tom cat or thomas jasper cat sr).','thomas jasper cat sr']]
var questionNo = 1;
var score = 0;

function clickButton(){
    check();
    questions.shift();
    questionNo++;
    setup();
    
}



function setup(){
    if(questions.length !=0){
        document.getElementById('question').innerHTML = questions[0][0];
        document.getElementById('questionNo').innerHTML = 'questions'+ questionNo; 
    }
    else{
       document.getElementById('questionNo').innerHTML = 'you are done!';
       document.getElementById('question').innerHTML = 'your score is ' + score;
       document.getElementById('text-field').remove();
       document.getElementById('button3').remove();
    }
}

function check(){
    if(document.getElementById('text-field').value == questions[0][1]){
       console.log('correct');
       score++;
       document.getElementById('text-field').value = '';

    }
}

// Icons on Index page turn purple on mouse hover
function hoverPhotography(img) {
    img.src = "../Pictures/Icons/Photography Icon Purple.png";
}

function hoverPhotographyOut(img){
    img.src = "../Pictures/Icons/Photography Icon V3.png"
   }

   function hoverFilm(img) {
    img.src = "../Pictures/Icons/Film Icon Purple.png";
}

function hoverFilmOut(img){
    img.src = "../Pictures/Icons/Film Icon V3.png"
   }

   function hoverGaming(img) {
    img.src = "../Pictures/Icons/Gaming Icon Purple.png";
}

function hoverGamingOut(img){
    img.src = "../Pictures/Icons/Gaming Icon V3.png"
   }

//enables Navbar mobile dropdown link menu
const toggleButton = document.getElementById(`toggleButton`);    
const naviList =  document.getElementById(`navi-list`);

toggleButton.addEventListener(`click`, () => {
    naviList.classList.toggle(`active`);

})
