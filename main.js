// #region CHEESE DATA
let cheeseCollected = 0;
let totalCheeseMine = 0;
// #endregion

// #region ACHIEVEMENT POINTS DATA
let achievementPoints = 0;
let firstCheeseAchievementCollected = 5000;
let secondCheeseAchievementCollected = 7500;
let thirdCheeseAchievementCollected = 10000;
let fourthCheeseAchievementCollected = 15000;
let fifthCheeseAchievementCollected = 22000;
let sixthCheeseAchievementCollected = 50000;
let firstAssistantAchievementCollected = 150;
let secondAssistantAchievementCollected = 225;
let thirdAssistantAchievementCollected = 275;
let fourthAssistantAchievementCollected = 350;
let fifthAssistantAchievementCollected = 500;
let sixthAssistantAchievementCollected = 650;
let firstCatAchievementCollected = 150;
let secondCatAchievementCollected = 250;
let thirdCatAchievementCollected = 400;
let fourthCatAchievementCollected = 650;
let fifthCatAchievementCollected = 700;
let sixthCatAchievementCollected = 850;
let firstHippoAchievementCollected = 350;
let secondHippoAchievementCollected = 650;
let thirdHippoAchievementCollected = 800;
let fourthHippoAchievementCollected = 925;
let fifthHippoAchievementCollected = 1050;
let sixthHippoAchievementCollected = 1200;
let firstAllItemAchievementCollected = 850;
let secondAllItemAchievementCollected = 1200;
let thirdAllItemAchievementCollected = 1350;
let fourthAllItemAchievementCollected = 1500;
let fifthAllItemAchievementCollected = 2250;
let sixthAllItemAchievementCollected = 3000;
//#endregion

//#region COLLECTION ACHIEVEMENT TOTAL POINTS DATA
let firstCheese = 25000;
let secondCheese = 50000;
let thirdCheese = 75000;
let fourthCheese = 100000;
let fifthCheese = 150000;
let sixthCheese = 250000;
let firstAssistant = 1;
let secondAssistant = 5;
let thirdAssistant = 7;
let fourthAssistant = 10;
let fifthAssistant = 12;
let sixthAssistant = 15;
let firstCat = 1;
let secondCat = 5;
let thirdCat = 7;
let fourthCat = 10;
let fifthCat = 13;
let sixthCat = 15;
let firstHippo = 1;
let secondHippo = 3;
let thirdHippo = 5;
let fourthHippo = 8;
let fifthHippo = 10;
let sixthHippo = 15;
let firstItem = 1;
let secondItem = 3;
let thirdItem = 7;
let fourthItem = 10;
let fifthItem = 15;
let sixthItem = 20;
//#endregion

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

// #region COLLECTING ACHIEVEMENTS DOM
let moustronautAchievementPoints = document.getElementById('moustronautTotalAchievementPoints');
let firstCheeseAchievement = document.getElementById('firstCheeseCollectedAchievement');
let secondCheeseAchievement = document.getElementById('secondCheeseCollectedAchievement');
let thirdCheeseAchievement = document.getElementById('thirdCheeseCollectedAchievement');
let fourthCheeseAchievement = document.getElementById('fourthCheeseCollectedAchievement');
let fifthCheeseAchievement = document.getElementById('fifthCheeseCollectedAchievement');
let sixthCheeseAchievement = document.getElementById('sixthCheeseCollectedAchievement');
let firstAssistantAchievement = document.getElementById('firstAssistantCollectedAchievement');
let secondAssistantAchievement = document.getElementById('secondAssistantCollectedAchievement');
let thirdAssistantAchievement = document.getElementById('thirdAssistantCollectedAchievement');
let fourthAssistantAchievement = document.getElementById('fourthAssistantCollectedAchievement');
let fifthAssistantAchievement = document.getElementById('fifthAssistantCollectedAchievement');
let sixthAssistantAchievement = document.getElementById('sixthAssistantCollectedAchievement');
let firstCatAchievement = document.getElementById('firstCatCollectedAchievement');
let secondCatAchievement = document.getElementById('secondCatCollectedAchievement');
let thirdCatAchievement = document.getElementById('thirdCatCollectedAchievement');
let fourthCatAchievement = document.getElementById('fourthCatCollectedAchievement');
let fifthCatAchievement = document.getElementById('fifthCatCollectedAchievement');
let sixthCatAchievement = document.getElementById('sixthCatCollectedAchievement');
let firstHippoAchievement = document.getElementById('firstHippoCollectedAchievement');
let secondHippoAchievement = document.getElementById('secondHippoCollectedAchievement');
let thirdHippoAchievement = document.getElementById('thirdHippoCollectedAchievement');
let fourthHippoAchievement = document.getElementById('fourthHippoCollectedAchievement');
let fifthHippoAchievement = document.getElementById('fifthHippoCollectedAchievement');
let sixthHippoAchievement = document.getElementById('sixthHippoCollectedAchievement');
let firstItemAchievement = document.getElementById('firstItemCollectedAchievement');
let secondItemAchievement = document.getElementById('secondItemCollectedAchievement');
let thirdItemAchievement = document.getElementById('thirdItemCollectedAchievement');
let fourthItemAchievement = document.getElementById('fourthItemCollectedAchievement');
let fifthItemAchievement = document.getElementById('fifthItemCollectedAchievement');
let sixthItemAchievement = document.getElementById('sixthItemCollectedAchievement');
//#endregion


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
    cheeseAchievementCompleted();
    assistantAchievementCollected();
    if (cheeseKnifeCount >= 1) {
        cheeseCollected = cheeseCollected + cheeseKnifeCount + 2;
        totalCheeseMine = totalCheeseMine + cheeseKnifeCount + 2;
    }
    if (cheeseGraterCount >= 1) {
        cheeseCollected = cheeseCollected + cheeseGraterCount + 3;
        totalCheeseMine = totalCheeseMine + cheeseGraterCount + 3;
    }
    if (cheeseCapsuleCount >= 1) {
        cheeseCollected = cheeseCollected + cheeseCapsuleCount + 5;
        totalCheeseMine = totalCheeseMine + cheeseCapsuleCount + 5;
    }
    if (cheeseDozerCount >= 1) {
        cheeseCollected = cheeseCollected + cheeseDozerCount + 7;
        totalCheeseMine = totalCheeseMine + cheeseDozerCount + 7;
    }
}



// #region CHEESE KNIFE 
const abilityCheeseKnife = () => {
    if (cheeseCollected >= cheeseKnifePurchased) {
        cheeseKnifeButton.style.backgroundColor = '#292b2c';
        cheeseKnifeButton.removeAttribute('disabled');
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
    buttonDisableFromPurchase();
}
// #endregion

// #region CHEESE GRATER
const abilityCheeseGrater = () => {
    if (cheeseCollected >= cheeseGraterPurchased) {
        cheeseGraterButton.style.backgroundColor = '#292b2c';
        cheeseGraterButton.removeAttribute('disabled');
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
    buttonDisableFromPurchase();
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
    buttonDisableFromPurchase();
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
    buttonDisableFromPurchase();
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
        allCheeseCollected.innerText = (cheeseCollected = cheeseCollected + (cheeseAssistantCount + 15)).toString();
        totalMineCheese.innerText = (totalCheeseMine = totalCheeseMine + (cheeseAssistantCount + 15)).toString();
    }, 3000)
    buttonDisableFromPurchase();
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
    buttonDisableFromPurchase();
    setInterval(() => {
        allCheeseCollected.innerText = (cheeseCollected = cheeseCollected + (cheeseTrailerCount + 25)).toString();
        totalMineCheese.innerText = (totalCheeseMine = totalCheeseMine + (cheeseTrailerCount + 25)).toString();
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
    buttonDisableFromPurchase();
    setInterval(() => {
        allCheeseCollected.innerText = (cheeseCollected = cheeseCollected + (cheeseCatCount + 35)).toString();
        totalMineCheese.innerText = (totalCheeseMine = totalCheeseMine + (cheeseCatCount + 35)).toString();
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
    buttonDisableFromPurchase();
    setInterval(() => {
        allCheeseCollected.innerText = (cheeseCollected = cheeseCollected + (cheeseHippoCount + 50)).toString();
        totalMineCheese.innerText = (totalCheeseMine = totalCheeseMine + (cheeseHippoCount + 50)).toString();
    }, 1000)
}
// #endregion

// #region BUTTON DISABLE AFTER PURCHASE
const buttonDisableFromPurchase = () => {
    if (cheeseCollected < cheeseKnifePurchased) {
        cheeseKnifeButton.setAttribute('disabled', 'true')
    }
    if (cheeseCollected < cheeseGraterPurchased) {
        cheeseGraterButton.setAttribute('disabled', 'true')
    }
    if (cheeseCollected < cheeseCapsulePurchased) {
        cheeseCapsuleButton.setAttribute('disabled', 'true')
    }
    if (cheeseCollected < cheeseDozerPurchased) {
        cheeseDozerButton.setAttribute('disabled', 'true')
    }
    if (cheeseCollected < cheeseAssistantPurchased) {
        cheeseAssistantButton.setAttribute('disabled', 'true')
    }
    if (cheeseCollected < cheeseTrailerPurchased) {
        cheeseTrailerButton.setAttribute('disabled', 'true')
    }
    if (cheeseCollected < cheeseCatPurchased) {
        cheeseCatButton.setAttribute('disabled', 'true')
    }
    if (cheeseCollected < cheeseHippoPurchased) {
        cheeseHippoButton.setAttribute('disabled', 'true')
    }
}
// #endregion

// #region ACHIEVEMENT COMPLETED

const cheeseAchievementCompleted = () => {
    if (totalCheeseMine === firstCheese) {
        firstCheeseAchievement.style.opacity = '1';
    }
    if (totalCheeseMine === secondCheese) {
        secondCheeseAchievement.style.opacity = '1';
    }
    if (totalCheeseMine === thirdCheese) {
        thirdCheeseAchievement.style.opacity = '1';
    }
    if (totalCheeseMine === fourthCheese) {
        fourthCheeseAchievement.style.opacity = '1';
    }
    if (totalCheeseMine === fifthCheese) {
        fifthCheeseAchievement.style.opacity = '1';
    }
    if (totalCheeseMine === sixthCheese) {
        sixthCheeseAchievement.style.opacity = '1';
    }
}

const assistantAchievementCollected = () => {
    if (cheeseAssistantCount === firstAssistant) {
        firstAssistantAchievement.style.opacity = '1';
    }
    if (cheeseAssistantCount === secondAssistant) {
        secondAssistantAchievement.style.opacity = '1';
    }
    if (cheeseAssistantCount === thirdAssistant) {
        thirdAssistantAchievement.style.opacity = '1';
    }
    if (cheeseAssistantCount === fourthAssistant) {
        fourthAssistantAchievement.style.opacity = '1';
    }
    if (cheeseAssistantCount === fifthAssistant) {
        fifthAssistantAchievement.style.opacity = '1';
    }
    if (cheeseAssistantCount === sixthAssistant) {
        sixthAssistantAchievement.style.opacity = '1';
    }
}

const catAchievementCollected = () => {

}

const hippoAchievementCollected = () => {

}

const allItemsAchievementCollected = () => {

}