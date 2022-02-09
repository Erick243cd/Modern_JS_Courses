//Syntaxes de délaration des variables

/**
 * Variables
 */
let age = 24; //let peut être mise à jour mais pas redéclaré
console.log(age);

/**
 * Constantes
 */
const constante = "I love you"; //NB. La constante est affectée une seule fois et sa valeur ne change pas
console.log(constante);

/**
 *  const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable.
 */

/**
 *  const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
 */

/**
 * const greeting = {
        message: "say Hi",
        times: 4
    }
 */

/**
 *  greeting = {
        words: "Hello",
        number: "five"
    } // error:  Assignment to constant variable.
 */

/**
 *    greeting.message = "say Hello instead";
 */