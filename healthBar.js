
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