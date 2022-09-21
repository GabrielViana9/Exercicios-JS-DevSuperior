const obj1 = {
    "name": "Computador", // Inicio do json é sempre bom ficar no meio das "" //
    "price": 50.9,
    "due-date": "2025-04-15"
}

const obj2 = {
    name: "Computador", // No JS não precisa por o json no meio das "" //
    price: 50.9,
    "due-date": "2025-04-15"
}

const obj3 = {  // Json com items e maior, onde podemos ter a noção de como funciona nos sistemas //
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name);

// parse / stringify //

const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

const obj = JSON.parse(txt);   // Tranforma uma string em json //

console.log(txt.name);

console.log(obj.nome);

const text = JSON.stringify(obj); // Transforma o obj JS em string (Texto) //