import "./styles/index.css"
import deckImage from "./assets/mythicCardBackground.png"

import ancientsData from './data/ancients'

const ancients = document.querySelectorAll('.ancient-card');
const ancientsContainer = document.querySelector('.ancients-container');
const stages = document.querySelectorAll('.stage');
const deck = document.querySelector('.deck');
const currentCard = document.querySelector('.current-card');

ancientsContainer.addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList.contains('ancient-card')) {
        for(let i = 0; i < ancients.length; i++) {
            ancients[i].classList.remove('active');
        }
        target.classList.add('active');
    }
    for(let i = 0; i < ancients.length; i++) {
        if (ancients[i].classList.contains('active')) {
            stages[0].textContent = ancientsData[i].firstStage.greenCards;
            stages[1].textContent = ancientsData[i].firstStage.brownCards;
            stages[2].textContent = ancientsData[i].firstStage.blueCards;
            stages[3].textContent = ancientsData[i].secondStage.greenCards;
            stages[4].textContent = ancientsData[i].secondStage.brownCards;
            stages[5].textContent = ancientsData[i].secondStage.blueCards;
            stages[6].textContent = ancientsData[i].thirdStage.greenCards;
            stages[7].textContent = ancientsData[i].thirdStage.brownCards;
            stages[8].textContent = ancientsData[i].thirdStage.blueCards;
        }
    }
    for(let i = 0; i < difficulty.length; i++) {
        if (difficulty[i].classList.contains('active')) {
            deck.style.backgroundImage = `url('${deckImage}')`
        }
    }
})

const difficulty = document.querySelectorAll('.difficulty');
const difficultyContainer = document.querySelector('.difficulty-container');

difficultyContainer.addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList.contains('difficulty')) {
        for(let i = 0; i < difficulty.length; i++) {
            difficulty[i].classList.remove('active');
        }
        target.classList.add('active');
    }
    for(let i = 0; i < ancients.length; i++) {
        if (ancients[i].classList.contains('active')) {
            deck.style.backgroundImage = `url('${deckImage}')`
        }
    }
})

import './data/mythicCards/green/index.js'
import cardsDataGreen from './data/mythicCards/green/index.js'

import './data/mythicCards/brown/index.js'
import cardsDataBrown from './data/mythicCards/brown/index.js'

import './data/mythicCards/blue/index.js'
import cardsDataBlue from './data/mythicCards/blue/index.js'
/*
let randomGreen;
const getRandomGreen = () => {
    let min = Math.ceil(1);
    let max = Math.floor(18);
    randomGreen = Math.floor(Math.random() * (max - min)) + min;
}

let randomBrown;
const getRandomBrown = () => {
    let min = Math.ceil(1);
    let max = Math.floor(21);
    randomBrown = Math.floor(Math.random() * (max - min)) + min;
}

let randomBlue;
const getRandomBlue = () => {
    let min = Math.ceil(1);
    let max = Math.floor(12);
    randomBlue = Math.floor(Math.random() * (max - min)) + min;
}*/

function getRandomNum(num) {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
}

let greenNum = 18;
let brownNum = 21;
let blueNum = 12;

window.addEventListener('click', () => {
    

    for(let i = 0; i < ancients.length; i++) {
        if (ancients[i].classList.contains('active') && difficulty[2].classList.contains('active')) {
            
            


            let deckArray = [];

            deckArray.push(cardsDataGreen);
            deckArray.push(cardsDataBrown);
            deckArray.push(cardsDataBlue);
            deckArray.filter(() => {
                let greenCards = ancientsData[i].firstStage.greenCards + ancientsData[i].secondStage.greenCards + ancientsData[i].thirdStage.greenCards
                let brownCards = ancientsData[i].firstStage.brownCards + ancientsData[i].secondStage.brownCards + ancientsData[i].thirdStage.brownCards
                let blueCards = ancientsData[i].firstStage.blueCards + ancientsData[i].secondStage.blueCards + ancientsData[i].thirdStage.blueCard

                while(cardsDataGreen.length !== greenCards) {
                    deckArray[0].splice(getRandomNum(greenNum), 1)
                }
                while(cardsDataBrown.length !== brownCards) {
                    deckArray[1].splice(getRandomNum(brownNum), 1)
                }
                while(cardsDataBlue.length !== blueCards) {
                    deckArray[2].splice(getRandomNum(blueNum), 1)
                }
            })

            console.log(deckArray)
/*
           deck.addEventListener('click', () => {
  
                currentCard.style.backgroundImage = `url('${deckArray[0][0].cardFace}')`
                deckArray[0].splice(0, 1)
                console.log(deckArray)
            })*/


        }
    }
})





