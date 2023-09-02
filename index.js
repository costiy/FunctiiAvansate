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
