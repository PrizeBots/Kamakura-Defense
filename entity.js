
villagerFood = 1;
VillagerWood = 0;
VillagerStone = 0;
villagerGold = 0;
//
samuraiFoodCost = 3;
samuraiWoodCost = 2;
samuraiStoneCost = 2;
samuraiGoldCost = 2;

NinjaFood = 5;
NinjaWood = 3;
NinjaStone = 3;
NinjaGold = 3;

mongolFoodCost = 50;
mongolWoodCost = 0;
function makeEntity(type) {

    if (type == "mongol") {
      
        entity = g.rectangle(14, 20, "brown");
        entity.type = "mongol";
        entity.status = "attack";
        speed = 1.5;
        entity.attack = 0.2;
        entity.health = 100;
        
       
        entity.baseHealth = entity.health;
        entity.foodCost = mongolFoodCost;
        entity.woodCost = mongolWoodCost;
        entity.stoneCost = 3;
        entity.goldCost = 5;
    }

    else if (type == "samurai") {
        entity = g.rectangle(12, 18, "red");
        entity.type = "samurai";
        entity.status = "attack";
        speed = 2;
        entity.speed = 5;
        entity.attack = 2;
        entity.health = 100;
        entity.baseHealth = entity.health;
        entity.foodCost = samuraiFoodCost;
        entity.woodCost = samuraiWoodCost;
        entity.stoneCost = samuraiStoneCost;
        entity.goldCost = samuraiGoldCost;

    }
    else if (type == "villager") {
        entity = g.rectangle(8, 16, "lightblue");
        entity.type = "villager";
        entity.status = "ready";
        speed = 2;

        entity.attack = .1;
        entity.health = 50;
        entity.baseHealth = entity.health;
        entity.foodCost = villagerFood;
        entity.woodCost = 0;
        entity.stoneCost = 0;
        entity.goldCost = 0;
    }
    else if (type == "ninja") {
        entity = g.rectangle(8, 16, "black");
        entity.type = "ninja";
        entity.status = "attack";
        speed = 3;

        entity.attack = 2;
        entity.health = 70;
        entity.baseHealth = entity.health;
        entity.foodCost = 30;
        entity.woodCost = 5;
        entity.stoneCost = 3;
        entity.goldCost = 2;

    }
    else if (type == "hero") {
        entity = g.rectangle(16, 22, "white");
        entity.type = "hero";
        entity.status = "attack";

        entity.speed = 10;
        entity.attack = 1;
        entity.health = 210;
        entity.baseHealth = entity.health;
        entity.foodCost = 100;
        entity.woodCost = 100;
        entity.stoneCost = 100;
        entity.goldCost = 100;

    }
    else if (type == "ogre") {
        entity = g.rectangle(48, 64, "purple");
        entity.type = "ogre";
        entity.status = "attack";
      
        entity.speed = 2;
        entity.attack = 2;
        entity.health = 250;
        entity.baseHealth = entity.health;
        entity.foodCost = 5;
        entity.woodCost = 0;
        entity.stoneCost = 3;
        entity.goldCost = 5;
    }
    else if (type == "mArcher") {
        entity = g.rectangle(8, 16, "orange");
        entity.type = "mArcher";
        entity.status = "attack";
      
        entity.speed = 2;
        entity.attack = .5;
        entity.health = 50;
        entity.baseHealth = entity.health;
        entity.foodCost = 5;
        entity.woodCost = 0;
        entity.stoneCost = 3;
        entity.goldCost = 5;
    }
    entity.speed = speed;
    entity.gatherRate = 250;
    //common properties
    entity.baseHealth = entity.health;
    entity.destinationX = 0;
    entity.destinationY = 0;
    entity.thinkTime = 0;
    //
    entity.interactive = true;
    entity.selected = false;
    entity.active = true;
    // entity.on('rightdown', function(event) {
    //     console.log('Sprite was right-clicked!');
    //     // Your custom logic here
    // });

    entity.bar = makeHealthBar(entity.width, 8);
    entity.addChild(entity.bar);
    entity.icon = makeIcon();
    entity.addChild(entity.icon);

    var spriteFade = g.fadeOut(entity.icon, 10);

    // entity.iconTouch = g.hit(g.pointer, entity.icon);
    // makeIconButton = g.button(entity.icon);
    // makeIconButton.press = function () {
    //     showIcon();
    // };

    return entity;
}

//An array of color names
// var colors = ["Gold", "Lavender", "Crimson", "DarkSeaGreen"];

// //Set the ball's `fillStyle` and `strokeStyle` to a random color
// //the `randomInt` method
// icon.fillStyle = colors[g.randomInt(0, 3)];
// icon.strokeStyle = colors[g.randomInt(0, 3)];
function resetEntity() {
    entity.health = 100;
}

function showIcon() {
    //  entity.icon.alpha = 1;
}

function makeIcon() {
    //circle arguments: diameter, fillStyle, strokeStyle, lineWidth, x, y
    var icon = g.circle(16, "white", "none", 2, (32 - entity.width) / 2, -50);
    //icon.interactive = true;
    icon.alpha = 1;
    return icon;
}

