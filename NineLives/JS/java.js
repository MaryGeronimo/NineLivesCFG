//quiz part
const questions = [['which cat is known for his love for lasagna and his hatred of mondays? (Garfield or Tom)','Garfield',], ['who said this famous quote Fear me if you dare? (Garfield or Puss in boots)','Puss in boots'],['what is the full name of Tom in tom and jerry?(Tom cat or Thomas jasper cat sr).','Thomas jasper cat sr']]
var questionNo = 1;
var score = 0;

function clickButton(){
    check();
    questions.shift();
    questionNo ++;
    setup();
    
}



function setup(){
    if(questions.length !=0){
        document.getElementById('question').innerHTML = questions[0][0];
        document.getElementById('questionNo').innerHTML = 'questions '+ questionNo; 
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

// Website logo turns green on hover
function hoverLogo(img) {
    img.src = "../../NineLives/Pictures/Icons/Website Logo Final Choice Green.png";
}

function hoverLogoOut(img){
    img.src = "../../NineLives/Pictures/Icons/Website Logo Final Choice.png"
   }

// Icons on Index page turn purple on mouse hover
function hoverPhotography(img) {
    img.src = "../../NineLives/Pictures/Icons/Photography Icon Purple.png";
}

function hoverPhotographyOut(img){
    img.src = "../../NineLives/Pictures/Icons/Photography Icon V3.png"
   }

   function hoverFilm(img) {
    img.src = "../../NineLives/Pictures/Icons/Film Icon Purple.png";
}

function hoverFilmOut(img){
    img.src = "../../NineLives/Pictures/Icons/Film Icon V3.png"
   }

   function hoverGaming(img) {
    img.src = "../../NineLives/Pictures/Icons/Gaming Icon Purple.png";
}

function hoverGamingOut(img){
    img.src = "../../NineLives/Pictures/Icons/Gaming Icon V3.png"
   }

//enables Navbar mobile dropdown link menu
const toggleButton = document.getElementById(`toggleButton`);    
const naviList =  document.getElementById(`navi-list`);

toggleButton.addEventListener(`click`, () => {
    naviList.classList.toggle(`active`);

})
