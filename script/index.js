const popupStart = document.querySelector(`.popup_start`);
const closePopup = document.querySelector(`.close_popup`);


const btns = document.querySelectorAll(`.answer`);
const BTNchangeScore = document.querySelector(`.change`);
const BTNcheckGoodAnswer = document.querySelector(`.btnCheckAnswer`);
const BTNclear = document.querySelector(`.clear`);
const BTNalert = document.querySelector(`.alert`);
const BTnNewGame = document.querySelector(`.newGame`);

const spanScope = document.querySelector(`.spanScope`);
const spanWrong = document.querySelector(`.spanWrong`);
const spanTime = document.querySelector(`.time`);

const allQuestion = document.querySelectorAll(`.question`);
const spanQuestionLength = document.querySelector(`.questionLength`);
const date = document.querySelector('.remainingTime');


let second = 0;
let score = 0;
let wrongAnswer = 0;
let startCountTime;
date.textContent = `00:00:0${second}`;
second = allQuestion.length * 8; 

btns.forEach(btn => {

const removeEvent = btn =>{ 
    btn.target.classList.add(`selected`);

    if(btn.target.classList.contains('curr')){
        score += 1; 
        }else{
            btn.target.classList.add(`wrong`);
            wrongAnswer += 1;
        } 
        btn.target.removeEventListener(`click`, removeEvent)    
    }
    btn.addEventListener(`click`, removeEvent)
}
);


const addClassHiden = () =>{
    popupStart.classList.add(`hide`);
    startCountTime = setInterval(countTime, 1000);
};

const changeGameScore = () =>{
    BTNalert.classList.add(`visible`)
    spanScope.textContent = `Dobre odpowiedzi:${score}`;
    spanWrong.textContent = `złe odpowiedzi:${wrongAnswer}`;
    resetTime()
      
};

const changeAllGoodANswer = () =>{
btns.forEach(btn => {
    if(btn.classList.contains(`curr`)){
        btn.classList.add(`selected`);
    }else{
        btn.classList.remove(`selected`); 
        btn.classList.remove(`wrong`);
    }})
    resetTime()
    clearInterval(startCountTime)
};

const BTNclearScore = ()=>{
    score = 0;
    wrongAnswer = 0;
    BTNalert.classList.remove(`visible`);
    clearInterval(startCountTime);
    
    btns.forEach(btn => {
        btn.classList.remove(`selected`); 
        btn.classList.remove(`wrong`);
    }
    )
    resetTime()
};

const countTime = () =>{
    second--;
    date.textContent = `00:00:${second}`
        if(second == 0){
            popupStart.classList.remove(`hide`);
            BTNclearScore()
             showPopupEndTime()
    }
};

const resetTime = () =>{
    second = allQuestion.length * 8; 
    date.textContent = `00:00:${second}`;
    clearInterval(startCountTime);
}

const newGame = () =>{
    BTNclearScore();
    popupStart.classList.remove(`hide`);
}

// -------  POPUP__END_OF_TIME -----

const showPopupEndTime = () =>{
    heroImg.style.display = `block`;
    popupEndTime.style.display = `block`;
}
const hidePopupEndTime = () =>{
    heroImg.style.display = `none`;
    popupEndTime.style.display = `none`;
}

//----------------------------- 
const heroImg = document.querySelector(`.heroImg`);
const popupEndTime = document.querySelector(`.endOfTime`);
const btnEndTime = document.querySelector(`.btnEndTime`);
btnEndTime.addEventListener(`click`,hidePopupEndTime);





spanQuestionLength.textContent = allQuestion.length;
spanTime.textContent = second;
closePopup.addEventListener(`click`, addClassHiden);
BTNchangeScore.addEventListener(`click`, changeGameScore);
BTNcheckGoodAnswer.addEventListener(`click`, changeAllGoodANswer);
BTNclear.addEventListener(`click`, BTNclearScore);
BTnNewGame.addEventListener(`click`, newGame);
