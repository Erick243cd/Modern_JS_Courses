/**
 * Le Type de donnees [String]
 * Le string se definit comme un caractere ou une chaine de caracteres
 */
 console.log('A');
 console.log("Le double cotes sont utilisés pour les chaines qui contiennent des cote");
/**
 * Déclaration et Affectation d'une variable de Type String
 */

let email = 'email@gmail.com';
console.log(email);


/**
 * La concaténation de strings
 */

let name = "Erick";

let nomComplet = email +' ' +name

console.log(nomComplet);


/**
 * Obtenir un caractère dans une chaine
 */
console.log(nomComplet[2]);

/**
 * Obetenir la taille de String
 */
console.log(nomComplet.length);

/**
 * Fonctions et Methode d'une String
 * 
 * 1. Une fonction est un bloc de code qui effectue une tâche spécifique
 * 2. Une méthode est une fonction attachée à un Objet ou à un type de données
 */
//Methodes sans arguments
console.log(nomComplet.toLocaleUpperCase());
console.log(nomComplet.toLowerCase());

//Méthode avec arguments

console.log(nomComplet.indexOf('@')); //Afficher la position qu'occupe @
console.log(nomComplet.slice(0, 6));//Afficher la tranche

console.log(nomComplet.replace("m", 'Z')); 

//Cfr https://www.w3schools.com/js/js_string_methods.asp pour plus de methodes

