/*
console.log("Um String literal pode ficar entre aspas duplas");
console.log('Um String literal pode ficar entre aspas semples');
console.log(`Um String literal pode ficar entre crases`);

console.log('Concatenação e interpolação: ');
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
console.log(`O valor do produto é ${num}`);




const num = 14.5;

console.log("Conversão entre number e string");

const str1 = num.toString(); 
console.log(`Tipo de ${str1}: ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`Tipo de ${str2}: ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${typeof num1}`);

const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2}: ${typeof num2}`);

const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${typeof num3}`);

const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);
*/

const str = "Gabriel Viana  ";

console.log(`const str = "Gabriel Viana  ";`)

//const resultado = str.toLowerCase();
//console.log(resultado);

console.log(`toLowerCase: ${str.toLowerCase()}`); // Utilizado em E-mail, deixa tudo em letra minuscula //
console.log(`toUpperCase: ${str.toUpperCase()}`); // Deixa tudo com letra maiuscula //

console.log(`charAt: ${str.charAt(3)}`); // Mostra o caractere na posição selecionada //

console.log(`replace: ${str.replace("i", "$")}`); // Troca a 1° caractere da string selecionada por outra //
console.log(`replace: ${str.replace(/i/g, "$")}`); // Troca todas as caracteres da string selecionada por outra //

console.log(`length: ${str.length}`); // Conta todas as caracteres //

console.log(`indexOf: ${str.indexOf("a")}`); // Ver a posição da 1° caractere //
console.log(`lastIndexOf: ${str.lastIndexOf("a")}`); // Ver a posição da ultima caractere (se tiver) //

console.log(`substring: ${str.substring(1, 8)}`); // Escolhe onde inicia e termina a string e corta o restante //

const data = "14/10/2021";

const mes = Number(data.substring(3, 5));
console.log(mes);

const valor = 200.99;

const novoValor = valor.toString().replace(".", ","); // Altera o caractere selecionado EX: "." por "," //

console.log(`Valor = ${novoValor}`);

console.log(`trim:  ${str.trim()}`); // Limpa espaços em branco nas Strings //