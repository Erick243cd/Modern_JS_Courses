//Array => Une collection ou struture de données du type: Object

let noms = ['Erick', 'Tresor', 'Nestor', 'Irene', 'Josephine', 'Ketsia', 'Numbi', 'Fidele'];
console.log(noms);

console.log(noms[0]);//Afficher l'element du tableau à l'index 0

let ages = [20, 25, 56, 27, 30, 12, 14, 2];
console.log(ages);

//Quelques Méthodes sur les tableaux
console.log(noms.join('-'));//Joindre les elements par un -
console.log(noms.indexOf('Irene')); //L'index de l'element Irene
console.log(noms.concat(ages)); //Concatener les élements de deux tableaux
console.log(noms.push('Kayoyo')); //Ajouter les élements dans un tableau
console.log(noms);
console.log(noms.pop());//Retirer le dernier élement du tableau
console.log(noms);
console.log(ages.shift());//Retire le premier element
console.log(ages);
console.log(noms.sort());//Trier le tableau de a à z
console.log(noms);
delete ages[2];//Supprimer l'element du tableau
console.log(ages); 
console.log(ages.sort(function(a, b){return a - b})); //trier dans l'ordre ascendant
console.log(ages.sort(function(a, b){return b - a})); //trier dans l'ordre descendant
console.log(ages.sort(function(a, b){return 0.5 - Math.random()})); //Trier dans n'importe quel ordre


