import * as nb from './numbers.js'; // Precisa referenciar no HTMl pois não é um modulo
import Product from './product.js'; // Referenciar no HTML type="module"
// Exportação padrão pode alterar o nome, tipo por o nome Prod e vai funcionar ( Aconselho n mudar )
const x = nb.sum(3, 4);
const y = exp(3, 4);

console.log(x);
console.log(y);

const obj = new Product("Computador", 800.0, 10);

console.log(obj);

// OUTRA MANEIRA DE EXPORTAR

/*
import { sum, exp } from './numbers.js'

const x = sum(3, 4);
const y = exp(3, 4);

console.log(x);
console.log(y);
*/