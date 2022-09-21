// REST: valores passados com virgula => array

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(2, 3, 10, 5); // Precisa passar os números com a , por causa do REST

console.log(result1);

const result2 = Math.max(2, 3, 10, 5); // Recebe os valores passados por virgula e retorna o maior deles

console.log(result2);

// SPREAD(Tradução espalhar): array => valores separados por virgula

const result3 = Math.max(4, 7, 2);

console.log(result3);

const myNumbers = [2, 3, 10, 5];

//const result4 = Math.max(myNumbers); // Nao funciona

const result4 = Math.max(...myNumbers); // Precisa usar os ... para fazer o spread e conseguir usar o Math.max

console.log(result4);

// SPREAD(Tradução espalhar): objeto => membros separados por virgula

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item }; // Espalha os objetos e faz um Novo objeto

const cloneItemPlus = { ...item, weigth: 10 }; // Consegue clonar e adicionar mais um obj