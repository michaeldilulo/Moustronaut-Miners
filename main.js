let cheeseCollected = 0;
let totalCheeseMine = 0;

let cheeseKnifePurchased = 25;
let cheeseGraterPurchased = 75;

let cheeseKnifeCount = 0;
let cheeseGraterCount = 0;


let allCheeseCollected = document.getElementById('cheeseCount');
let totalMineCheese = document.getElementById('cheeseMineTotal')

let cheeseKnifeButton = document.getElementById('cheeseKnifeButton');
let cheeseGraterButton = document.getElementById('cheeseGraterButton')

let inventoryCheeseKnife = document.getElementById('cheeseKnifeCount');
let inventoryCheeseGrater = document.getElementById('cheeseGraterCount')

cheeseKnifeButton.setAttribute('disabled', 'true')
cheeseGraterButton.setAttribute('disabled', 'true')

const mineCheese = () => {
    setInterval(() => {
        cheeseCollected++;
        totalCheeseMine++;
        allCheeseCollected.innerText = (cheeseCollected).toString();
        totalMineCheese.innerText = (totalCheeseMine).toString();
        abilityCheeseKnife();
        abilityCheeseGrater();
    }, 1000);
}

const abilityCheeseKnife = () => {
    if (cheeseCollected < 25) {
        cheeseKnifeButton.setAttribute('disabled', 'true')
    } else if (cheeseCollected >= 25) {
        cheeseKnifeButton.style.backgroundColor = '#292b2c';
        cheeseKnifeButton.removeAttribute('disabled')
    }
}

const purchaseCheeseKnife = () => {
    cheeseKnifeCount++;
    cheeseCollected - cheeseKnifePurchased;
    inventoryCheeseKnife.innerText = (cheeseKnifeCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseKnifePurchased).toString();
}

const abilityCheeseGrater = () => {
    if (cheeseCollected < 75) {
        cheeseGraterButton.setAttribute('disabled', 'true')
    } else if (cheeseCollected >= 75) {
        cheeseGraterButton.style.backgroundColor = '#292b2c';
        cheeseGraterButton.removeAttribute('disabled')
    }
}

const purchaseCheeseGrater = () => {
    cheeseGraterCount++;
    cheeseCollected - cheeseGraterPurchased;
    inventoryCheeseGrater.innerText = (cheeseGraterCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseGraterPurchased).toString();
}