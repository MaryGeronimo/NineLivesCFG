//enables mobile dropdown link menu
const toggleButton = document.getElementById(`toggleButton`);    
const naviList =  document.getElementById(`navi-list`);

toggleButton.addEventListener(`click`, () => {
    naviList.classList.toggle(`active`);

})