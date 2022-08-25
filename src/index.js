import "./styles/index.css"
import _ from "lodash"
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
    stageNumber[0].style.color = 'white';
    stageNumber[1].style.color = 'white';
    stageNumber[2].style.color = 'white';
    deck.style.cursor = 'pointer';
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
            
            easyArray[0] = _.shuffle(easyArray[0])
            easyArray[1] = _.shuffle(easyArray[1])
            easyArray[2] = _.shuffle(easyArray[2])
            
            let stagedDeckArray = [[],[],[]]
            for (let i = 0; i < stages[0].innerHTML; i++) {
                let pop = easyArray[0].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[1].innerHTML; i++) {
                let pop = easyArray[1].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[2].innerHTML; i++) {
                let pop = easyArray[2].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[3].innerHTML; i++) {
                let pop = easyArray[0].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[4].innerHTML; i++) {
                let pop = easyArray[1].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[5].innerHTML; i++) {
                let pop = easyArray[2].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[6].innerHTML; i++) {
                let pop = easyArray[0].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[7].innerHTML; i++) {
                let pop = easyArray[1].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[8].innerHTML; i++) {
                let pop = easyArray[2].pop();
                stagedDeckArray[2].push(pop)
            }

            stagedDeckArray[0] = _.shuffle(stagedDeckArray[0])
            stagedDeckArray[1] = _.shuffle(stagedDeckArray[1])
            stagedDeckArray[2] = _.shuffle(stagedDeckArray[2])
            deckArray = stagedDeckArray;         
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
                normalGreenArray = _.shuffle(normalGreenArray);
                let pop = normalGreenArray.pop();
                superEasyArray[0].push(pop);
            }
            while(superEasyArray[1].length < brownCards) {
                normalBrownArray = _.shuffle(normalBrownArray);
                let pop = normalBrownArray.pop();
                superEasyArray[1].push(pop);
            }
            while(superEasyArray[2].length < blueCards) {
                normalBlueArray = _.shuffle(normalBlueArray);
                let pop = normalBlueArray.pop();
                superEasyArray[2].push(pop);
            }
            
            superEasyArray[0] = _.shuffle(superEasyArray[0])
            superEasyArray[1] = _.shuffle(superEasyArray[1])
            superEasyArray[2] = _.shuffle(superEasyArray[2])

            let stagedDeckArray = [[],[],[]]
            for (let i = 0; i < stages[0].innerHTML; i++) {
                let pop = superEasyArray[0].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[1].innerHTML; i++) {
                let pop = superEasyArray[1].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[2].innerHTML; i++) {
                let pop = superEasyArray[2].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[3].innerHTML; i++) {
                let pop = superEasyArray[0].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[4].innerHTML; i++) {
                let pop = superEasyArray[1].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[5].innerHTML; i++) {
                let pop = superEasyArray[2].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[6].innerHTML; i++) {
                let pop = superEasyArray[0].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[7].innerHTML; i++) {
                let pop = superEasyArray[1].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[8].innerHTML; i++) {
                let pop = superEasyArray[2].pop();
                stagedDeckArray[2].push(pop)
            }

            stagedDeckArray[0] = _.shuffle(stagedDeckArray[0])
            stagedDeckArray[1] = _.shuffle(stagedDeckArray[1])
            stagedDeckArray[2] = _.shuffle(stagedDeckArray[2])
            deckArray = stagedDeckArray;
        } else if (ancients[i].classList.contains('active') && difficulty[2].classList.contains('active')) {
            let averageArray = [];
            let averageArray1 = deckArray[0].filter((item) => {
                return item
            });
            let averageArray2 = deckArray[1].filter((item) => {
                return item
            });
            let averageArray3 = deckArray[2].filter((item) => {
                return item
            });

            averageArray.push(averageArray1, averageArray2, averageArray3);
            
            
            while(averageArray[0].length > greenCards) {
                averageArray[0].splice(getRandomNum(greenNum), 1) 
            }
            while(averageArray[1].length > brownCards) {
                averageArray[1].splice(getRandomNum(brownNum), 1)
            }
            while(averageArray[2].length > blueCards) {
                averageArray[2].splice(getRandomNum(blueNum), 1)
            }
            
            averageArray[0] = _.shuffle(averageArray[0])
            averageArray[1] = _.shuffle(averageArray[1])
            averageArray[2] = _.shuffle(averageArray[2])

            let stagedDeckArray = [[],[],[]]
            for (let i = 0; i < stages[0].innerHTML; i++) {
                let pop = averageArray[0].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[1].innerHTML; i++) {
                let pop = averageArray[1].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[2].innerHTML; i++) {
                let pop = averageArray[2].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[3].innerHTML; i++) {
                let pop = averageArray[0].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[4].innerHTML; i++) {
                let pop = averageArray[1].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[5].innerHTML; i++) {
                let pop = averageArray[2].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[6].innerHTML; i++) {
                let pop = averageArray[0].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[7].innerHTML; i++) {
                let pop = averageArray[1].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[8].innerHTML; i++) {
                let pop = averageArray[2].pop();
                stagedDeckArray[2].push(pop)
            }

            stagedDeckArray[0] = _.shuffle(stagedDeckArray[0])
            stagedDeckArray[1] = _.shuffle(stagedDeckArray[1])
            stagedDeckArray[2] = _.shuffle(stagedDeckArray[2])
            deckArray = stagedDeckArray;
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
            
            hardArray[0] = _.shuffle(hardArray[0])
            hardArray[1] = _.shuffle(hardArray[1])
            hardArray[2] = _.shuffle(hardArray[2])

            let stagedDeckArray = [[],[],[]]
            for (let i = 0; i < stages[0].innerHTML; i++) {
                let pop = hardArray[0].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[1].innerHTML; i++) {
                let pop = hardArray[1].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[2].innerHTML; i++) {
                let pop = hardArray[2].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[3].innerHTML; i++) {
                let pop = hardArray[0].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[4].innerHTML; i++) {
                let pop = hardArray[1].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[5].innerHTML; i++) {
                let pop = hardArray[2].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[6].innerHTML; i++) {
                let pop = hardArray[0].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[7].innerHTML; i++) {
                let pop = hardArray[1].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[8].innerHTML; i++) {
                let pop = hardArray[2].pop();
                stagedDeckArray[2].push(pop)
            }

            stagedDeckArray[0] = _.shuffle(stagedDeckArray[0])
            stagedDeckArray[1] = _.shuffle(stagedDeckArray[1])
            stagedDeckArray[2] = _.shuffle(stagedDeckArray[2])
            deckArray = stagedDeckArray;
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
                normalGreenArray = _.shuffle(normalGreenArray);
                let pop = normalGreenArray.pop();
                superHardArray[0].push(pop);
            }
            while(superHardArray[1].length < brownCards) {
                normalBrownArray = _.shuffle(normalBrownArray);
                let pop = normalBrownArray.pop();
                superHardArray[1].push(pop);
            }
            while(superHardArray[2].length < blueCards) {
                normalBlueArray = _.shuffle(normalBlueArray);
                let pop = normalBlueArray.pop();
                superHardArray[2].push(pop);
            }
            
            superHardArray[0] = _.shuffle(superHardArray[0])
            superHardArray[1] = _.shuffle(superHardArray[1])
            superHardArray[2] = _.shuffle(superHardArray[2])
            
            let stagedDeckArray = [[],[],[]]
            for (let i = 0; i < stages[0].innerHTML; i++) {
                let pop = superHardArray[0].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[1].innerHTML; i++) {
                let pop = superHardArray[1].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[2].innerHTML; i++) {
                let pop = superHardArray[2].pop();
                stagedDeckArray[0].push(pop)
            }
            for (let i = 0; i < stages[3].innerHTML; i++) {
                let pop = superHardArray[0].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[4].innerHTML; i++) {
                let pop = superHardArray[1].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[5].innerHTML; i++) {
                let pop = superHardArray[2].pop();
                stagedDeckArray[1].push(pop)
            }
            for (let i = 0; i < stages[6].innerHTML; i++) {
                let pop = superHardArray[0].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[7].innerHTML; i++) {
                let pop = superHardArray[1].pop();
                stagedDeckArray[2].push(pop)
            }
            for (let i = 0; i < stages[8].innerHTML; i++) {
                let pop = superHardArray[2].pop();
                stagedDeckArray[2].push(pop)
            }

            stagedDeckArray[0] = _.shuffle(stagedDeckArray[0])
            stagedDeckArray[1] = _.shuffle(stagedDeckArray[1])
            stagedDeckArray[2] = _.shuffle(stagedDeckArray[2])
            deckArray = stagedDeckArray;
        }
    }
}

const stageNumber = document.querySelectorAll('.stage-number');

deck.addEventListener('click', () => {
    if (deckArray[0].length > 0) {
        let pop = deckArray[0].pop()
        currentCard.style.backgroundImage = `url('${pop.cardFace}')`
        if(pop.color === 'green') stages[0].innerHTML = stages[0].innerHTML - 1;
        if(pop.color === 'brown') stages[1].innerHTML = stages[1].innerHTML - 1;
        if(pop.color === 'blue') stages[2].innerHTML = stages[2].innerHTML - 1;
    } else if (deckArray[1].length > 0) {
        let pop = deckArray[1].pop()
        currentCard.style.backgroundImage = `url('${pop.cardFace}')`
        if(pop.color === 'green') stages[3].innerHTML = stages[3].innerHTML - 1;
        if(pop.color === 'brown') stages[4].innerHTML = stages[4].innerHTML - 1;
        if(pop.color === 'blue') stages[5].innerHTML = stages[5].innerHTML - 1;
    } else if (deckArray[2].length > 0) {
        let pop = deckArray[2].pop()
        currentCard.style.backgroundImage = `url('${pop.cardFace}')`
        if(pop.color === 'green') stages[6].innerHTML = stages[6].innerHTML - 1;
        if(pop.color === 'brown') stages[7].innerHTML = stages[7].innerHTML - 1;
        if(pop.color === 'blue') stages[8].innerHTML = stages[8].innerHTML - 1;
    } 
    if (deckArray[0].length === 0) stageNumber[0].style.color = '#2fac68';
    if (deckArray[1].length === 0) stageNumber[1].style.color = '#2fac68';
    if (deckArray[2].length === 0) {
        stageNumber[2].style.color = '#2fac68';
        deck.style.backgroundImage = 'none';
        deck.style.cursor = 'initial';
    }
})