// VER TAMANHO DO ARRAY //

const valores = ['Gabriel', 24, true, 1.75]; // Pode misturar valores no array //

const t1 = valores.length; // Ver o Tamanho do Array //

console.log("Teste lenght: ")
console.log(t1);

// REMOVER ELEMENTOS //

const nomes = ["GV", "Karen", "Edson", "Monica"];

const r1 = nomes.pop(); // Remove o ultimo elemento e retorna //
const r2 = nomes.shift(); // Remove o primeiro elemento e retorna //

console.log("\nTeste pop e shift: ");
console.log(r1);
console.log(r2);
console.log(nomes);

// INSERIR ELEMENTOS //

const alturas = [1,65, 1.82, 1.7];

alturas.push(1.75); // Insere elemento no final do array //
alturas.unshift(1.58); // Insere elemento no começo do array //

console.log("\nTeste push e unshit: ");
console.log(alturas);

// INSERIR E REEMOVER GERAL //

const letras = ["A", "B", "C", "D", "E", "F"];

letras.splice(2, 3, "X", "Y", "Z"); // Retira elementos do array e pode inserir outro no lugar //
                                    // Também pode apenas inserir ou remover um novo elemento //
console.log("\nTeste splice:");
console.log(letras);

// CONCATENAR ARRAYS //

const meninas = ["Karen", "Ana"];
const meninos = ["João", "GV"];

const todos = meninas.concat(meninos); // Junta os arrays //

console.log("\nTeste concat:");
console.log(todos);

// ACESSO E ATRIBUIÇÃO //

const idades = [20, 30, 40, 50];

idades[1] = 38; // Acessa o elemento e atribui //

console.log("\nTeste acesso e atribuição:");
console.log(idades);

// PERCORRER ARRAY //

const frutas = ["Banana", "Laranja", "Uva"];

console.log("\nTeste percorrer array:");
for (let i=0; i<frutas.length; i++) {
    console.log(frutas[i])
};

// PERCORRER ARRAY COM FOR EACH//

console.log("\nTeste percorrer array com forEach:");

frutas.forEach(item => {
    console.log(item);
});