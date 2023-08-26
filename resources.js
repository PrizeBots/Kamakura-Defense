function makeResource(type, x, y, width, height) {
    // var entity = g.rectangle(0, 0, "white");

    if (type == "tree") {
        var canopyTop = g.circle(g.randomInt(28, 36), "green", "none", 0, 32, 16);

        // Middle two circles, placed side by side
        var canopyMiddleLeft = g.circle(g.randomInt(28, 36), "green", "none", 0, 20, 32);
        var canopyMiddleRight = g.circle(g.randomInt(28, 36), "green", "none", 0, 44, 32);

        // Bottom three circles, forming the base of the canopy
        var canopyBottomLeft = g.circle(g.randomInt(28, 36), "green", "none", 0, 16, 48);
        var canopyBottomCenter = g.circle(g.randomInt(28, 36), "green", "none", 0, 32, 48);
        var canopyBottomRight = g.circle(g.randomInt(28, 36), "green", "none", 0, 48, 48);

        // Creating the trunk of the tree using a brown rectangle
        // Positioned below the canopy and center-aligned with it
        var trunk = g.rectangle(g.randomInt(12, 22), 32, "brown", "none", 0, 40, 64);

        // Assuming that you would like to group these elements together, 
        // so they can be managed as a single tree asset.
        var entity = g.group(
            trunk,
            canopyTop,
            canopyMiddleLeft,
            canopyMiddleRight,
            canopyBottomLeft,
            canopyBottomCenter,
            canopyBottomRight

        );
        entity.resourceBaseline = g.randomInt(50, 110);
       
        entity.type = "tree";


    }
    else if (type == "mine") {
        entity = g.rectangle(g.randomInt(28, 36), g.randomInt(28, 36), "grey");
        entity.type = "mine";
        entity.resourceBaseline = g.randomInt(50, 110);
        entity.resourceType = 3;
        entity.attack = 1;
        entity.health = 50;
        entity.foodCost = 2;
        entity.woodCost = 0;
        entity.stoneCost = 0;
        entity.goldCost = 0;
    }
    else if (type == "farm") {
        entity = g.rectangle(64, 64, "olive");
        entity.type = "farm";
        entity.resourceBaseline = g.randomInt(50, 110);
        entity.resourceType = 1.8;
        entity.attack = 2;
        entity.health = 120;
        entity.foodCost = 0;
        entity.woodCost = 2;
        entity.stoneCost = 0;
        entity.goldCost = 0;
    }
    entity.resourceQuantity = entity.resourceBaseline;
    // entity.bar = makeHealthBar(entity.width, 8);
    // entity.addChild(entity.bar);
    // entity.icon = makeIcon();
    // entity.addChild(entity.icon);
    ///var spriteFade = g.fadeOut(entity.icon, 10);


    // entity.iconTouch = g.hit(g.pointer, entity.icon);
    // makeIconButton = g.button(entity.icon);
    // makeIconButton.press = function () {
    //     showIcon();
    // };
    entity.x = x;
    entity.y = y;
    return entity;
}