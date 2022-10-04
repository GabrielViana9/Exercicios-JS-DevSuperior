const cep = "01001000";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

// fetchResult.then(value => {
//     console.log(value);
// });

async function getJsonResponse(url) { // Usando async deixa a função assíncrona

    // Função assíncrona carrega depois de um tempo, por exemplo se botar um console log...
    // Embaixo ele executa primeiro, mesmo estando lá embaixo dos codigos

    const response = await fetch(url); // Await faz com que essa chamada execute de forma assíncrona
    const jsonBody = await response.json(); // Depois que resolver a promise que o resultado vai para o Await
    return jsonBody;
}

console.log(getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`));
// Se fizer uma chamada função assíncrona dentro de uma função síncrona, ela não espera chegar para executar

getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`).then((obj) => {
    console.log(obj); // Dessa forma espera resolver a promise com o .then, e depois pega o JSON
});

async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);
    console.log(json);
}

showCepData("58100491");