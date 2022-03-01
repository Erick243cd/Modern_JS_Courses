let i = 0;
while (i < 5) {
    console.log('Instruction', i);
    i++;
}
console.log('Out loop');

//parcourir la liste
let noms = ['Erick', 'Banze', 'Kasongo', 'Yumba'];
let j = 0;

while (j < noms.length) {
    console.log(j, noms[j]);
    j++;
}

//Exécuter une fois la boucle avant la condition
let x = 0;
do{
    console.log('La valeur de x est ', x);
    x ++;
}while(x < 5)