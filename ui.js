//ui vars
function makeUI() {
    makeLabels()
    foodLabel = g.text("Food: ", "22px sans-serif", "black");
    foodLabel.x = gameWidth - console_bg.width + consolePadding;
    foodValue = g.text("", "22px sans-serif", "black");
    foodValue.x = gameWidth - console_bg.width + consolePadding + 100;
    foodLabel.y += 10;
    foodValue.y += 10;

    woodLabel = g.text("Wood: ", "22px sans-serif", "black");
    woodLabel.x = gameWidth - console_bg.width + consolePadding;
    woodLabel.y += 40;
    woodValue = g.text("", "22px sans-serif", "black");
    woodValue.x = gameWidth - console_bg.width + consolePadding + 100;
    woodValue.y += 40;

    stoneLabel = g.text("Stone: ", "22px sans-serif", "black");
    stoneLabel.x = gameWidth - console_bg.width + consolePadding;
    stoneLabel.y += 70;
    stoneValue = g.text("", "22px sans-serif", "black");
    stoneValue.x = gameWidth - console_bg.width + consolePadding + 100;
    stoneValue.y += 70;

    goldLabel = g.text("Gold: ", "22px sans-serif", "black");
    goldLabel.x = gameWidth - console_bg.width + consolePadding;
    goldLabel.y += 100;
    goldValue = g.text("", "22px sans-serif", "black");
    goldValue.x = gameWidth - console_bg.width + consolePadding + 100;
    goldValue.y += 100;
}

function makeLabels() {
    //Make a `button` using the frames.
    makeSamuraiButton = g.button(buttonFrames);
    buttons.push(makeSamuraiButton);
    makeNinjaButton = g.button(buttonFrames);
    buttons.push(makeNinjaButton);
    makeHeroButton = g.button(buttonFrames);
    buttons.push(makeHeroButton);
    makeVillagerButton = g.button(buttonFrames);
    buttons.push(makeVillagerButton);
    makeFarmButton = g.button(buttonFrames);
    buttons.push(makeFarmButton);

    //Debug
    makeDebugButton = g.button(buttonFrames);
    makeDebugButton.x = g.canvas.width - console_bg.width + consolePadding * 6;
    makeDebugButton.y += 100;
    
    makeMongolButton = g.button(buttonFrames);
    makeMongolButton.x = g.canvas.width - console_bg.width + consolePadding;
    makeMongolButton.y += 700;

    /////Labels
   

    villagerLabel = g.text("Villager: 2 food", "16px sans-serif", "black");
    villagerLabel.x = gameWidth - console_bg.width + consolePadding;
    villagerLabel.y += 130;
    makeVillagerButton.x = g.canvas.width - console_bg.width + consolePadding;
    makeVillagerButton.y += 150;
    villagerCountValue = g.text("", "16px sans-serif", "black");
    villagerCountValue.x = gameWidth - console_bg.width + 2;
    villagerCountValue.y += 130;

    samuraiLabel = g.text("Samurai: 5 food 2 stone", "16px sans-serif", "black");
    samuraiLabel.x = gameWidth - console_bg.width + consolePadding;
    samuraiLabel.y += 200;
    makeSamuraiButton.x = g.canvas.width - console_bg.width + consolePadding;
    makeSamuraiButton.y += 220;
    samuraiCountValue = g.text("", "16px sans-serif", "black");
    samuraiCountValue.x = gameWidth - console_bg.width + 2;
    samuraiCountValue.y += 200;

    ninjaLabel = g.text("Ninja: 25 food 2 stone 2 wood 3 gold", "16px sans-serif", "black");
    ninjaLabel.x = gameWidth - console_bg.width + consolePadding;
    ninjaLabel.y += 270;
    makeNinjaButton.x = g.canvas.width - console_bg.width + consolePadding;
    makeNinjaButton.y += 290;
    ninjaCountValue = g.text("", "16px sans-serif", "black");
    ninjaCountValue.x = gameWidth - console_bg.width + 2;
    ninjaCountValue.y += 270;

    heroLabel = g.text("Hero: 50 food 5 stone 5 wood 10 gold", "16px sans-serif", "black");
    heroLabel.x = gameWidth - console_bg.width + consolePadding;
    heroLabel.y += 340;
    makeHeroButton.x = g.canvas.width - console_bg.width + consolePadding;
    makeHeroButton.y += 360;
    heroCountValue = g.text("", "16px sans-serif", "black");
    heroCountValue.x = gameWidth - console_bg.width + 2;
    heroCountValue.y += 340;

    farmLabel = g.text("Farm: 2 wood", "16px sans-serif", "black");
    farmLabel.x = gameWidth - console_bg.width + consolePadding;
    farmLabel.y += 480;
    makeFarmButton.x = g.canvas.width - console_bg.width + consolePadding;;
    makeFarmButton.y += 430;
    farmCountValue = g.text("", "16px sans-serif", "black");
    farmCountValue.x = gameWidth - console_bg.width + 2;
    farmCountValue.y += 480;
}

function updateUI() {
    foodValue.content = food;
    woodValue.content = wood;
    stoneValue.content = stone;
    goldValue.content = gold;

    //Army counts
    villagerCountValue.content = villagerCount;
    samuraiCountValue.content = samuraiCount;
    ninjaCountValue.content = ninjaCount;
    heroCountValue.content = heroCount;

    //Resource Counts
    farmCountValue.content = farmCount;
}