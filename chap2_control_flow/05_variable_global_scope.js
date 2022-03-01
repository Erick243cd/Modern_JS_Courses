//Il s'agit de l'accès aux variables ou leur portée dans le bloc de code

let age = 10;
console.log('La variable est scope globale', age);

if (true) {
    //Dans ce bloc il est possble de rédeclarer la même variable
    let age = 12;
    console.log('La variable est scope globale', age);

}

