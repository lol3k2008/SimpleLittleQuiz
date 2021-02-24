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
    btn.addEventListener(`click`, function(){
        this.classList.add(`selected`);
        if(this.classList.contains('curr')){
            score += 1;
        }else{
            this.classList.add(`wrong`);
            wrongAnswer += 1;
        }
    })
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

spanQuestionLength.textContent = allQuestion.length;
spanTime.textContent = second;
closePopup.addEventListener(`click`, addClassHiden);
BTNchangeScore.addEventListener(`click`, changeGameScore);
BTNcheckGoodAnswer.addEventListener(`click`, changeAllGoodANswer);
BTNclear.addEventListener(`click`, BTNclearScore);
BTnNewGame.addEventListener(`click`, newGame);
