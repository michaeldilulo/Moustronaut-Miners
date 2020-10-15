// #region CHEESE DATA
let cheeseCollected = 0;
let totalCheeseMine = 0;
// #endregion

// #region PURCHASE DATA
let cheeseKnifePurchased = 25;
let cheeseGraterPurchased = 75;
let cheeseCapsulePurchased = 250;
let cheeseDozerPurchased = 550;
let cheeseAssistantPurchased = 850;
let cheeseTrailerPurchased = 1500;
let cheeseCatPurchased = 2250;
let cheeseHippoPurchased = 3500;
// #endregion

// #region COUNT DATA
let cheeseKnifeCount = 0;
let cheeseGraterCount = 0;
let cheeseCapsuleCount = 0;
let cheeseDozerCount = 0;
let cheeseAssistantCount = 0;
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
let cheeseDozerButton = document.getElementById('cheeseDozerButton')
let cheeseAssistantButton = document.getElementById('cheeseAssistantButton')
let cheeseTrailerButton = document.getElementById('cheeseTrailerButton')
let cheeseCatButton = document.getElementById('cheeseCatButton')
let cheeseHippoButton = document.getElementById('cheeseHippoButton')
// #endregion

// #region CLICK UPGRADE PURCHASE PRICES
let cheeseKnifePurchasePrice = document.getElementById('cheeseKnifePurchasePrice');
let cheeseGraterPurchasePrice = document.getElementById('cheeseGraterPurchasePrice');
let cheeseCapsulePurchasePrice = document.getElementById('cheeseCapsulePurchasePrice');
let cheeseDozerPurchasePrice = document.getElementById('cheeseDozerPurchasePrice');
let cheeseAssistantPurchasePrice = document.getElementById('cheeseAssistantPurchasePrice');
let cheeseTrailerPurchasePrice = document.getElementById('cheeseTrailerPurchasePrice');
let cheeseCatPurchasePrice = document.getElementById('cheeseCatPurchasePrice');
let cheeseHippoPurchasePrice = document.getElementById('cheeseHippoPurchasePrice');
// #endregion

// #region INVENTORY DOM
let inventoryCheeseKnife = document.getElementById('cheeseKnifeCount');
let inventoryCheeseGrater = document.getElementById('cheeseGraterCount');
let inventoryCheeseCapsule = document.getElementById('cheeseCapsuleCount');
let inventoryCheeseDozer = document.getElementById('cheeseDozerCount');
let inventoryCheeseAssistant = document.getElementById('cheeseAssistantCount');
let inventoryCheeseTrailer = document.getElementById('cheeseTrailerCount');
let inventoryCheeseCat = document.getElementById('cheeseCatCount');
let inventoryCheeseHippo = document.getElementById('cheeseHippoCount');
// #endregion

// #region DISABLED BUTTONS
cheeseKnifeButton.setAttribute('disabled', 'true')
cheeseGraterButton.setAttribute('disabled', 'true')
cheeseCapsuleButton.setAttribute('disabled', 'true')
cheeseDozerButton.setAttribute('disabled', 'true')
cheeseAssistantButton.setAttribute('disabled', 'true')
cheeseTrailerButton.setAttribute('disabled', 'true')
cheeseCatButton.setAttribute('disabled', 'true')
cheeseHippoButton.setAttribute('disabled', 'true')
// #endregion


const mineCheese = () => {
    cheeseCollected++;
    totalCheeseMine++;
    allCheeseCollected.innerText = (cheeseCollected).toString();
    totalMineCheese.innerText = (totalCheeseMine).toString();
    abilityCheeseKnife();
    abilityCheeseGrater();
    abilityCheeseCapsule();
    abilityCheeseDozer();
    abilityCheeseAssistant();
    abilityCheeseTrailer();
    abilityCheeseCat();
    abilityCheeseHippo();
    if (cheeseKnifeCount >= 1) {
        cheeseCollected = cheeseCollected + cheeseKnifeCount + 1;
        totalCheeseMine = totalCheeseMine + cheeseKnifeCount + 1;
    }
    if (cheeseGraterCount >= 1) {
        cheeseCollected = cheeseCollected + cheeseGraterCount + 2;
        totalCheeseMine = totalCheeseMine + cheeseGraterCount + 2;
    }
    if (cheeseCapsuleCount >= 1) {
        cheeseCollected = cheeseCollected + cheeseCapsuleCount + 3;
        totalCheeseMine = totalCheeseMine + cheeseCapsuleCount + 3;
    }
    if (cheeseDozerCount >= 1) {
        cheeseCollected = cheeseCollected + cheeseDozerCount + 5;
        totalCheeseMine = totalCheeseMine + cheeseDozerCount + 5;
    }
}

// #region CHEESE KNIFE 
const abilityCheeseKnife = () => {
    if (cheeseCollected >= cheeseKnifePurchased) {
        cheeseKnifeButton.style.backgroundColor = '#292b2c';
        cheeseKnifeButton.removeAttribute('disabled')
    }
}

const purchaseCheeseKnife = () => {
    cheeseKnifeCount++;
    cheeseCollected - cheeseKnifePurchased;
    inventoryCheeseKnife.innerText = (cheeseKnifeCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseKnifePurchased).toString();
    if (cheeseCollected < cheeseKnifePurchased) {
        cheeseKnifeButton.setAttribute('disabled', 'true')
        cheeseKnifePurchased = cheeseKnifePurchased + Math.floor(cheeseKnifePurchased / 5) + cheeseKnifeCount;
        cheeseKnifePurchasePrice.innerText = (cheeseKnifePurchased).toString();
    }
}
// #endregion

// #region CHEESE GRATER
const abilityCheeseGrater = () => {
    if (cheeseCollected >= cheeseGraterPurchased) {
        cheeseGraterButton.style.backgroundColor = '#292b2c';
        cheeseGraterButton.removeAttribute('disabled')
    }
}

const purchaseCheeseGrater = () => {
    cheeseGraterCount++;
    cheeseCollected - cheeseGraterPurchased;
    inventoryCheeseGrater.innerText = (cheeseGraterCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseGraterPurchased).toString();
    if (cheeseCollected < cheeseGraterPurchased) {
        cheeseGraterButton.setAttribute('disabled', 'true')
        cheeseGraterPurchased = cheeseGraterPurchased + Math.floor(cheeseGraterPurchased / 5) + cheeseGraterCount;
        cheeseGraterPurchasePrice.innerText = (cheeseGraterPurchased).toString();
    }
}
// #endregion

// #region CHEESE CAPSULE
const abilityCheeseCapsule = () => {
    if (cheeseCollected >= cheeseCapsulePurchased) {
        cheeseCapsuleButton.style.backgroundColor = '#292b2c';
        cheeseCapsuleButton.removeAttribute('disabled')
    }
}

const purchaseCheeseCapsule = () => {
    cheeseCapsuleCount++;
    cheeseCollected - cheeseCapsulePurchased;
    inventoryCheeseCapsule.innerText = (cheeseCapsuleCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseCapsulePurchased).toString();
    if (cheeseCollected < cheeseCapsulePurchased) {
        cheeseCapsuleButton.setAttribute('disabled', 'true')
        cheeseCapsulePurchased = cheeseCapsulePurchased + Math.floor(cheeseCapsulePurchased / 5) + cheeseCapsuleCount;
        cheeseCapsulePurchasePrice.innerText = (cheeseCapsulePurchased).toString();
    }
}
// #endregion

// #region CHEESE DOZER
const abilityCheeseDozer = () => {
    if (cheeseCollected >= cheeseDozerPurchased) {
        cheeseDozerButton.style.backgroundColor = '#292b2c';
        cheeseDozerButton.removeAttribute('disabled')
    }
}

const purchaseCheeseDozer = () => {
    cheeseDozerCount++;
    cheeseCollected - cheeseDozerPurchased;
    inventoryCheeseDozer.innerText = (cheeseDozerCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseDozerPurchased).toString();
    if (cheeseCollected < cheeseDozerPurchased) {
        cheeseDozerButton.setAttribute('disabled', 'true')
        cheeseDozerPurchased = cheeseDozerPurchased + Math.floor(cheeseDozerPurchased / 5) + cheeseDozerCount;
        cheeseDozerPurchasePrice.innerText = (cheeseDozerPurchased).toString();
    }
}
// #endregion

// #region CHEESE ASSISTANT
const abilityCheeseAssistant = () => {
    if (cheeseCollected >= cheeseAssistantPurchased) {
        cheeseAssistantButton.style.backgroundColor = '#292b2c';
        cheeseAssistantButton.removeAttribute('disabled')
    }
}

const purchaseCheeseAssistant = () => {
    cheeseAssistantCount++;
    cheeseCollected - cheeseAssistantPurchased;
    inventoryCheeseAssistant.innerText = (cheeseAssistantCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseAssistantPurchased).toString();
    if (cheeseCollected < cheeseAssistantPurchased) {
        cheeseAssistantButton.setAttribute('disabled', 'true')
        cheeseAssistantPurchased = cheeseAssistantPurchased + Math.floor(cheeseAssistantPurchased / 5) + cheeseAssistantCount;
        cheeseAssistantPurchasePrice.innerText = (cheeseAssistantPurchased).toString();
    }
    setInterval(() => {
        allCheeseCollected.innerText = (cheeseCollected = cheeseCollected + (cheeseAssistantCount + 7)).toString();
        totalMineCheese.innerText = (totalCheeseMine = totalCheeseMine + (cheeseAssistantCount + 7)).toString();
    }, 3000)
}
// #endregion

// #region CHEESE TRAILER
const abilityCheeseTrailer = () => {
    if (cheeseCollected >= cheeseTrailerPurchased) {
        cheeseTrailerButton.style.backgroundColor = '#292b2c';
        cheeseTrailerButton.removeAttribute('disabled')
    }
}

const purchaseCheeseTrailer = () => {
    cheeseTrailerCount++;
    cheeseCollected - cheeseTrailerPurchased;
    inventoryCheeseTrailer.innerText = (cheeseTrailerCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseTrailerPurchased).toString();
    if (cheeseCollected < cheeseTrailerPurchased) {
        cheeseTrailerButton.setAttribute('disabled', 'true')
        cheeseTrailerPurchased = cheeseTrailerPurchased + Math.floor(cheeseTrailerPurchased / 5) + cheeseTrailerCount;
        cheeseTrailerPurchasePrice.innerText = (cheeseTrailerPurchased).toString();
    }
    setInterval(() => {
        allCheeseCollected.innerText = (cheeseCollected = cheeseCollected + (cheeseTrailerCount + 8)).toString();
        totalMineCheese.innerText = (totalCheeseMine = totalCheeseMine + (cheeseTrailerCount + 8)).toString();
    }, 2000)
}
// #endregion

// #region CHEESE CAT
const abilityCheeseCat = () => {
    if (cheeseCollected >= cheeseCatPurchased) {
        cheeseCatButton.style.backgroundColor = '#292b2c';
        cheeseCatButton.removeAttribute('disabled')
    }
}

const purchaseCheeseCat = () => {
    cheeseCatCount++;
    cheeseCollected - cheeseCatPurchased;
    inventoryCheeseCat.innerText = (cheeseCatCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseCatPurchased).toString();
    if (cheeseCollected < cheeseCatPurchased) {
        cheeseCatButton.setAttribute('disabled', 'true')
        cheeseCatPurchased = cheeseCatPurchased + Math.floor(cheeseCatPurchased / 5) + cheeseCatCount;
        cheeseCatPurchasePrice.innerText = (cheeseCatPurchased).toString();
    }
    setInterval(() => {
        allCheeseCollected.innerText = (cheeseCollected = cheeseCollected + (cheeseCatCount + 8)).toString();
        totalMineCheese.innerText = (totalCheeseMine = totalCheeseMine + (cheeseCatCount + 8)).toString();
    }, 2000)
}
// #endregion

// #region CHEESE HIPPO
const abilityCheeseHippo = () => {
    if (cheeseCollected >= cheeseHippoPurchased) {
        cheeseHippoButton.style.backgroundColor = '#292b2c';
        cheeseHippoButton.removeAttribute('disabled')
    }
}

const purchaseCheeseHippo = () => {
    cheeseHippoCount++;
    cheeseCollected - cheeseHippoPurchased;
    inventoryCheeseHippo.innerText = (cheeseHippoCount).toString();
    allCheeseCollected.innerText = (cheeseCollected = cheeseCollected - cheeseHippoPurchased).toString();
    if (cheeseCollected < cheeseHippoPurchased) {
        cheeseHippoButton.setAttribute('disabled', 'true')
        cheeseHippoPurchased = cheeseHippoPurchased + Math.floor(cheeseHippoPurchased / 5) + cheeseHippoCount;
        cheeseHippoPurchasePrice.innerText = (cheeseHippoPurchased).toString();
    }
    setInterval(() => {
        allCheeseCollected.innerText = (cheeseCollected = cheeseCollected + (cheeseHippoCount + 10)).toString();
        totalMineCheese.innerText = (totalCheeseMine = totalCheeseMine + (cheeseHippoCount + 10)).toString();
    }, 1000)
}
// #endregion