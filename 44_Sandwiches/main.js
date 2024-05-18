function makeSunwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a Sandwich with the following items:\n");
    items.forEach(function (singalItem) { return console.log(singalItem); });
    console.log("\n Now Enjoy a Sandwiche ");
}
makeSunwiches("Chicken", "Chese", "Mayo", "Egg");
makeSunwiches("Bread", "butter");
makeSunwiches("brad", "butter", "mayo", "Egg", "Chiecse Chicken");
