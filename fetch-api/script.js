const cep = "01001000";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`); // Fetch por padrão faz um GET
// GET é tipo quando você escreve uma URL no navegador e aperta enter, isso é fazer um GET

fetchResult
  .then((response) => { // Utilizado caso a Promise seja Resolvida
    console.log("SUCESSO NO FETCH", response);
    const json = response.json();
    json
      .then((response) => { // Utilizado caso a Promise seja Resolvida
        console.log("SUCESSO NO JSON", response);
      })
      .catch((error) => { // Utilizado caso a Promise seja Rejeitada
        console.log("ERRO NO JSON", error);
      });
  })
  .catch((error) => { // Utilizado caso a Promise seja Rejeitada
    console.log("ERRO NO FECTH", error);
  });

console.log("A");
console.log("B");