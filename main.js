// #region CHEESE DATA
let cheeseCollected = 0;
let totalCheeseMine = 0;
// #endregion

// #region PURCHASE DATA
let cheeseKnifePurchased = 25;
let cheeseGraterPurchased = 75;
let cheeseCapsulePurchased = 250;
let cheeseDozerPurchased = 550;
let moustronautAssistantPurchased = 850;
let cheeseTrailerPurchased = 1500;
let cheeseCatPurchased = 2250;
let cheeseHippoPurchased = 3500;
// #endregion

// #region COUNT DATA
let cheeseKnifeCount = 0;
let cheeseGraterCount = 0;
let cheeseCapsuleCount = 0;
let cheeseAssistantCount = 0;
let cheeseDozerCount = 0;
let cheeseTrailerCount = 0;
let cheeseCatCount = 0;
let cheeseHippoCount = 0;
// #endregion

// #region CHEESE DOM
let allCheeseCollected = document.getElementById('cheeseCount');
let totalMineCheese = document.getElementById('cheeseMineTotal');
// #endregion

// #region PURCHASE DOM
let cheeseKnifeButton = document.getElementById('cheeseKnifeButton');
let cheeseGraterButton = document.getElementById('cheeseGraterButton');
let cheeseCapsuleButton = document.getElementById('cheeseCapsuleButton')
let cheeseAssistantButton = document.getElementById('cheeseAssistantButton')
let cheeseDozerButton = document.getElementById('cheeseDozerButton')
let cheeseTrailerButton = document.getElementById('cheeseTrailerButton')
let cheeseCatButton = document.getElementById('cheeseCatButton')
let cheeseHippoButton = document.getElementById('cheeseHippoButton')
// #endregion

// #region INVENTORY DOM
let inventoryCheeseKnife = document.getElementById('cheeseKnifeCount');
let inventoryCheeseGrater = document.getElementById('cheeseGraterCount');
let inventoryCheeseCapsule = document.getElementById('cheeseGraterCount');
let inventoryCheeseAssistant = document.getElementById('cheeseGraterCount');
let inventoryCheeseDozer = document.getElementById('cheeseGraterCount');
let inventoryCheeseTrailer = document.getElementById('cheeseGraterCount');
let inventoryCheeseCat = document.getElementById('cheeseGraterCount');
let inventoryCheeseHippo = document.getElementById('cheeseGraterCount');
// #endregion

// #region DISABLED BUTTONS
cheeseKnifeButton.setAttribute('disabled', 'true')
cheeseGraterButton.setAttribute('disabled', 'true')
cheeseCapsuleButton.setAttribute('disabled', 'true')
cheeseAssistantButton.setAttribute('disabled', 'true')
cheeseDozerButton.setAttribute('disabled', 'true')
cheeseTrailerButton.setAttribute('disabled', 'true')
cheeseCatButton.setAttribute('disabled', 'true')
cheeseHippoButton.setAttribute('disabled', 'true')
// #endregion

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