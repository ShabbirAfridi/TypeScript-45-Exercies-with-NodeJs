function creat_Car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        mode: model,
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = creat_Car("Toyota", "Corolla", "color: Black", "Sunroof:true", "Car Year:2024");
console.log(my_car);
