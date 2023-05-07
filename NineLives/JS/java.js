//quiz part
const questions = [['what do you like more?','sleep','food'], ['what do you like to eat?','pizza','lasagna']]
var questionNo = 1;




function setup(){
    document.getElementById('question').innerHTML = questions[0][0];
    document.getElementById('questionNo').innerHTML = 'questions'+ questionNo;
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
