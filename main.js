// DATA
let cheeseCollected = 0;
let cheeseKnifePurchased = 10;
let cheeseKnifeCount = 0;
let totalCheeseMine = 0;

let allCheeseCollected = document.getElementById('cheeseCount');
let cheeseKnifeButton = document.getElementById('cheeseKnifeButton');
let inventoryCheeseKnife = document.getElementById('cheeseKnifeCount');
let totalMineCheese = document.getElementById('cheeseMineTotal')

const startMining = () => {
    if (cheeseCollected < 10) {
        cheeseKnifeButton.setAttribute('disabled', 'true')
    } else if (cheeseCollected >= 10) {
        cheeseKnifeButton.style.backgroundColor = '#292b2c';
        cheeseKnifeButton.removeAttribute('disabled')
    }
}

const mineCheese = () => {
    startMining();
    cheeseCollected++;
    totalCheeseMine++;
    allCheeseCollected.innerText = (cheeseCollected).toString();
    totalMineCheese.innerText = (totalCheeseMine).toString();
}

const purchaseCheeseKnife = () => {
    if (cheeseCollected >= 10) {
        cheeseKnifeCount++;
        cheeseCollected - cheeseKnifePurchased;
        inventoryCheeseKnife.innerText = (cheeseKnifeCount).toString();
        allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseKnifePurchased).toString();
        startMining();
    }
}
