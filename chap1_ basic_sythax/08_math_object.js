//Math
console.log(Math);

//Utilisation des méthodes liées à Math Object
console.log(Math.PI);//la valeur de PI

const value = 2.1;

console.log(Math.round(value));//Arrondissement par excès et par défaut

console.log(Math.ceil(value));//Arrondissement par EXCES

console.log(Math.floor(value));//Convertir un nombre décimal en entier

//Générer le nombre aléatoire, random

let random = Math.random();
console.log(random);

//Personnaliser la génération Ex. Un générer le nombre entre 0 et 1000
console.log(Math.round(random * 1000));
