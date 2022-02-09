const name = 'Erick';
const lastName = 'Banze';
const age = 24;

//Ancienne Utilisation
console.log('Mr '+ name + ' '+lastName + ' a ' + age + 'ans');

/**
 * Nouvelle utilisation avec template string
 */
console.log(`Mr ${name}  ${lastName} a ${age} ans`);

/**
 * Html template
 */
let html = `
    <h1>${name}</h1>
    <p>${lastName}</hp>
    <span>${age}</span>
`;
console.log(html);

/**
 * Expression Substitution
   Template literals allow expressions in strings:
 */

let price = 10;
let tva = 0.25;

let total = `Total: ${(price * (1 + tva)).toFixed(2)}`;

console.log(total);