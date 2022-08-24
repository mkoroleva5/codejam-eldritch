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
    createDeck();
    //currentCard.style.backgroundImage = 'none';
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
    for(let i = 0; i < ancients.length; i++) {
        if (ancients[i].classList.contains('active')) {
            deck.style.backgroundImage = `url('${deckImage}')`
        }
    }
    createDeck();
    //if(target.classList.contains('active')) currentCard.style.backgroundImage = 'none';
})

import './data/mythicCards/green/index.js'
import cardsDataGreen from './data/mythicCards/green/index.js'

import './data/mythicCards/brown/index.js'
import cardsDataBrown from './data/mythicCards/brown/index.js'

import './data/mythicCards/blue/index.js'
import cardsDataBlue from './data/mythicCards/blue/index.js'

function getRandomNum(num) {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
}

let greenNum = 18;
let brownNum = 21;
let blueNum = 12;

let deckArray;

function createDeck() {
    deckArray = []
    deckArray.push(cardsDataGreen);
    deckArray.push(cardsDataBrown);
    deckArray.push(cardsDataBlue);  

    let greenCards = +(stages[0].innerHTML) + +(stages[3].innerHTML) + +(stages[6].innerHTML)
    let brownCards = +(stages[1].innerHTML) + +(stages[4].innerHTML) + +(stages[7].innerHTML)
    let blueCards = +(stages[2].innerHTML) + +(stages[5].innerHTML) + +(stages[8].innerHTML)
    for(let i = 0; i < ancients.length; i++) {
        if (ancients[i].classList.contains('active') && difficulty[1].classList.contains('active')) {
            let easyArray = [];
            let easyArray1 = deckArray[0].filter((item) => {
                return item.difficulty !== 'hard' 
            });
            let easyArray2 = deckArray[1].filter((item) => {
                return item.difficulty !== 'hard' 
            });
            let easyArray3 = deckArray[2].filter((item) => {
                return item.difficulty !== 'hard' 
            });

            easyArray.push(easyArray1, easyArray2, easyArray3);
            
            while(easyArray[0].length > greenCards) {
                easyArray[0].splice(getRandomNum(greenNum), 1) 
            }
            while(easyArray[1].length > brownCards) {
                easyArray[1].splice(getRandomNum(brownNum), 1)
            }
            while(easyArray[2].length > blueCards) {
                easyArray[2].splice(getRandomNum(blueNum), 1)
            }
            
            deckArray = easyArray;
            
        } else if (ancients[i].classList.contains('active') && difficulty[0].classList.contains('active')) {
            let superEasyArray = [];
            let superEasyArray1 = deckArray[0].filter((item) => {
                return item.difficulty === 'easy' 
            });
            let superEasyArray2 = deckArray[1].filter((item) => {
                return item.difficulty === 'easy' 
            });
            let superEasyArray3 = deckArray[2].filter((item) => {
                return item.difficulty === 'easy' 
            });

            superEasyArray.push(superEasyArray1, superEasyArray2, superEasyArray3);
            
            while(superEasyArray[0].length > greenCards) {
                superEasyArray[0].splice(getRandomNum(greenNum), 1) 
            }
            while(superEasyArray[1].length > brownCards) {
                superEasyArray[1].splice(getRandomNum(brownNum), 1)
            }
            while(superEasyArray[2].length > blueCards) {
                superEasyArray[2].splice(getRandomNum(blueNum), 1)
            }

            let normalGreenArray = cardsDataGreen.filter((item) => {return item.difficulty == 'normal'});
            let normalBrownArray = cardsDataBrown.filter((item) => {return item.difficulty == 'normal'});
            let normalBlueArray = cardsDataBlue.filter((item) => {return item.difficulty == 'normal'});

            while(superEasyArray[0].length < greenCards) {
                superEasyArray[0].push(normalGreenArray[getRandomNum(8)])
            }
            while(superEasyArray[1].length < brownCards) {
                superEasyArray[1].push(normalBrownArray[getRandomNum(11)])
            }
            while(superEasyArray[2].length < blueCards) {
                superEasyArray[2].push(normalBlueArray[getRandomNum(4)])
            }
            
            deckArray = superEasyArray;
        } else if (ancients[i].classList.contains('active') && difficulty[2].classList.contains('active')) {
            let averageArray = [];
            averageArray = deckArray;

            while(averageArray[0].length > greenCards) {
                averageArray[0].splice(getRandomNum(greenNum), 1) 
            }
            while(averageArray[1].length > brownCards) {
                averageArray[1].splice(getRandomNum(brownNum), 1)
            }
            while(averageArray[2].length > blueCards) {
                averageArray[2].splice(getRandomNum(blueNum), 1)
            }
            deckArray = averageArray;
        } else if (ancients[i].classList.contains('active') && difficulty[3].classList.contains('active')) {
            let hardArray = [];
            let hardArray1 = deckArray[0].filter((item) => {
                return item.difficulty !== 'easy' 
            });
            let hardArray2 = deckArray[1].filter((item) => {
                return item.difficulty !== 'easy' 
            });
            let hardArray3 = deckArray[2].filter((item) => {
                return item.difficulty !== 'easy' 
            });

            hardArray.push(hardArray1, hardArray2, hardArray3);
            
            while(hardArray[0].length > greenCards) {
                hardArray[0].splice(getRandomNum(greenNum), 1) 
            }
            while(hardArray[1].length > brownCards) {
                hardArray[1].splice(getRandomNum(brownNum), 1)
            }
            while(hardArray[2].length > blueCards) {
                hardArray[2].splice(getRandomNum(blueNum), 1)
            }
            
            deckArray = hardArray;
        } else if (ancients[i].classList.contains('active') && difficulty[4].classList.contains('active')) {
            let superHardArray = [];
            let superHardArray1 = deckArray[0].filter((item) => {
                return item.difficulty === 'hard' 
            });
            let superHardArray2 = deckArray[1].filter((item) => {
                return item.difficulty === 'hard' 
            });
            let superHardArray3 = deckArray[2].filter((item) => {
                return item.difficulty === 'hard' 
            });

            superHardArray.push(superHardArray1, superHardArray2, superHardArray3);
            
            while(superHardArray[0].length > greenCards) {
                superHardArray[0].splice(getRandomNum(greenNum), 1) 
            }
            while(superHardArray[1].length > brownCards) {
                superHardArray[1].splice(getRandomNum(brownNum), 1)
            }
            while(superHardArray[2].length > blueCards) {
                superHardArray[2].splice(getRandomNum(blueNum), 1)
            }

            let normalGreenArray = cardsDataGreen.filter((item) => {return item.difficulty == 'normal'});
            let normalBrownArray = cardsDataBrown.filter((item) => {return item.difficulty == 'normal'});
            let normalBlueArray = cardsDataBlue.filter((item) => {return item.difficulty == 'normal'});

            while(superHardArray[0].length < greenCards) {
                superHardArray[0].push(normalGreenArray[getRandomNum(8)])
            }
            while(superHardArray[1].length < brownCards) {
                superHardArray[1].push(normalBrownArray[getRandomNum(11)])
            }
            while(superHardArray[2].length < blueCards) {
                superHardArray[2].push(normalBlueArray[getRandomNum(4)])
            }
            
            deckArray = superHardArray;
        }
    }
}

deck.addEventListener('click', () => {
    let deckLength = deckArray[0].length + deckArray[1].length + deckArray[2].length;
    console.log(deckLength)
    if (stages[0].innerHTML > 0) {
        currentCard.style.backgroundImage = `url('${deckArray[0][0].cardFace}')`
        deckArray[0].splice(0, 1)
        stages[0].innerHTML = stages[0].innerHTML - 1;
    } else if (stages[1].innerHTML > 0) {
        currentCard.style.backgroundImage = `url('${deckArray[1][0].cardFace}')`
        deckArray[1].splice(0, 1)
        stages[1].innerHTML = stages[1].innerHTML - 1;
    } else if (stages[2].innerHTML > 0) {
        currentCard.style.backgroundImage = `url('${deckArray[2][0].cardFace}')`
        deckArray[2].splice(0, 1)
        stages[2].innerHTML = stages[2].innerHTML - 1;
    } else if (stages[3].innerHTML > 0) {
        currentCard.style.backgroundImage = `url('${deckArray[0][0].cardFace}')`
        deckArray[0].splice(0, 1)
        stages[3].innerHTML = stages[3].innerHTML - 1;
    } else if (stages[4].innerHTML > 0) {
        currentCard.style.backgroundImage = `url('${deckArray[1][0].cardFace}')`
        deckArray[1].splice(0, 1)
        stages[4].innerHTML = stages[4].innerHTML - 1;
    } else if (stages[5].innerHTML > 0) {
        currentCard.style.backgroundImage = `url('${deckArray[2][0].cardFace}')`
        deckArray[2].splice(0, 1)
        stages[5].innerHTML = stages[5].innerHTML - 1;
    } else if (stages[6].innerHTML > 0) {
        currentCard.style.backgroundImage = `url('${deckArray[0][0].cardFace}')`
        deckArray[0].splice(0, 1)
        stages[6].innerHTML = stages[6].innerHTML - 1;
    } else if (stages[7].innerHTML > 0) {
        currentCard.style.backgroundImage = `url('${deckArray[1][0].cardFace}')`
        deckArray[1].splice(0, 1)
        stages[7].innerHTML = stages[7].innerHTML - 1;
    } else if (stages[8].innerHTML > 0) {
        currentCard.style.backgroundImage = `url('${deckArray[2][0].cardFace}')`
        deckArray[2].splice(0, 1)
        stages[8].innerHTML = stages[8].innerHTML - 1;
    } else if (deckLength === 0) {
        deck.style.backgroundImage = 'none';
        //currentCard.style.backgroundImage = 'none';
    }
})



