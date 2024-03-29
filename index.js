//Exercitii pentru "Arrow functions":

//function inmultire (x, y){
//    return x * y;
//}

const inmultire = (x, y) => x * y;

console.log (inmultire (2, 5));

//Exercitii pentru "High order functions - HOF":

const suma = (x, y) => x + y;

const doOperation = (x, y, suma) => suma (x, y);

const suma1 = doOperation (50, 50, suma);

console.log (suma1);

//Exercitii pentru "Destructuration":

//const propCalculator = {
//	prop1: 20,
//	prop2: 100,
//	prop3: 540,
//	prop4: [1, 7, 9],
//	prop5: {a: "componenta1", b: "componenta2"},
//}
//const sumaComponente = propCalculator.prop1 + propCalculator.prop2 + propCalculator.prop3 + propCalculator.prop4 + propCalculator.prop5;

//Forma destructurata va fi:

const propCalculator = {
    prop1: 20,
    prop2: 100,
    prop3: 540,
};

const {prop1, prop2, prop3} = propCalculator

const sumaComponente = console.log(prop1 + prop2 + prop3);

//Exercitii pentru "Array functions":
//map:

const listaNumereSuma = [15, 20, 50];

const listaSuma = listaNumereSuma.map ((el) => console.log(el + el));

//forEach:

const listaNume = ["Costi", "Cezar", "Alexandra"];

listaNume.forEach ((el) => console.log(el));

//filter:

const listaNr = [3, 5, 4, 8, 9, 11];

listaNr.filter ((el) => console.log(el % 2 === 0));
