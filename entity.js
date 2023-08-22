function makeEntity(type) {
    // var entity = g.rectangle(0, 0, "white");

    if (type == "samurai") {
        entity = g.rectangle(24, 32, "red");
        entity.speed = 2;
        entity.attack = 3;
        entity.health = 80;
        entity.foodCost = 5;
        entity.woodCost = 0;
        entity.stoneCost = 3;
        entity.goldCost = 5;
    }
    else if (type == "villager") {
        entity = g.rectangle(16, 32, "green");
        entity.speed = 3;
        entity.attack = 1;
        entity.health = 50;
        entity.foodCost = 2;
        entity.woodCost = 0;
        entity.stoneCost = 0;
        entity.goldCost = 0;
    }
    else if (type == "mongol") {
        entity = g.rectangle(24, 32, "brown");
        entity.speed = 1.8;
        entity.attack = 2;
        entity.health = 120;
        entity.foodCost = 5;
        entity.woodCost = 0;
        entity.stoneCost = 3;
        entity.goldCost = 5;
    }
    entity.bar = makeHealthBar(entity.width, 8);
    entity.addChild(entity.bar);
    entity.icon = makeIcon();
    entity.addChild(entity.icon);
    ///var spriteFade = g.fadeOut(entity.icon, 10);


    // entity.iconTouch = g.hit(g.pointer, entity.icon);
    // makeIconButton = g.button(entity.icon);
    // makeIconButton.press = function () {
    //     showIcon();
    // };
    return entity;
}
function showIcon() {
    entity.icon.alpha = 1;
}
function makeIcon() {
    //circle arguments: diameter, fillStyle, strokeStyle, lineWidth, x, y
    var icon = g.circle(32, "white", "none", 2, -(32 - entity.width) / 2, -50);
    icon.interactive = true;
    icon.alpha = 0;
  

       

    icon.press = function () {
        icon.alpha = 1;
        //An array of color names
        var colors = ["Gold", "Lavender", "Crimson", "DarkSeaGreen"];

        //Set the ball's `fillStyle` and `strokeStyle` to a random color
        //the `randomInt` method
        icon.fillStyle = colors[g.randomInt(0, 3)];
        icon.strokeStyle = colors[g.randomInt(0, 3)];
    };
    return icon;
}


function makeHealthBar(width, height) {
    var healthBar;
    var outerBar = g.rectangle(width, height, "black"),
        innerBar = g.rectangle(width, height, "yellowGreen");

    //Group the inner and outer bars
    healthBar = g.group(outerBar, innerBar);

    //Set the `innerBar` as a property of the `healthBar`
    healthBar.inner = innerBar;

    //Position the health bar
    //healthBar.x = g.canvas.width - 148;
    healthBar.y = -15;
    return healthBar;
}