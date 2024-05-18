
function creat_Car(manufacture, model, ...options){

    let car={
        manufacture :manufacture,
        mode:model,
    };

    options.forEach(option =>{
        let[key,value ] =option.split (":")
        car[key.trim()]= value.trim();
    });
    return car;

}
let my_car = creat_Car("Toyota","Corolla","color: Black","Sunroof:true","Car Year:2024")

console.log(my_car);