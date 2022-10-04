// Promise é uma função construtora do JS

function f(g, h) {
    setTimeout(() => {  // Forma assíncrona
        if (10 < 0) {
            g("P");
        }
        else {
            h("Q");
        }
    }, 3000);
}

const minhaPromise = new Promise(f);

minhaPromise
    .then(valor => {    // Utilizado caso a Promise seja Resolvida
        console.log("Resolveu com o valor " + valor);
    })
    .catch(valor => {   // Utilizado caso a Promise seja rejeitada
        console.log("Rejeitada com o valor " + valor);
    });

console.log(minhaPromise);

// function f(g, h) {
//     if (10 > 0) {
//         g("P");
//     } else {
//         h("Q");
//     }
// }

// function executarSeResolver(valor) {
//     console.log("Resolveu com o valor " + valor);
// }

// function executarSeRejeitar(valor) {
//     console.log("Rejeitada com o valor " + valor);
// }

// const minhaPromise = new Promise(f);

// minhaPromise.then(executarSeResolver);