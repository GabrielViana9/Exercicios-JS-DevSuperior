const item1 = document.querySelector("li"); // querySelector seleciona apenas o primeiro elemento

console.log(item1);
console.log(item1.outerHTML); // Escreve o HTML do elemento completo até com <li>
console.log(item1.innerHTML); // Mostra o HTML dentro do elemento

const items = document.querySelectorAll("li"); // querySelectorAll seleciona todos elementos

console.log(items);

const card1 = document.querySelector('[data-product-id="32"]') // Selecionando elemento pelo dataset
// Atributos adicionais que você pode por no seu elemento que não vai influenciar em nada no 
// Comportamento dele na página, mas que pode facilitar a comunicação com o JS

console.log(card1);

const paragrafo = document.createElement("p"); // Cria um novo elemento HTML
paragrafo.innerHTML = "Descrição"; // Adicionou o nome Descrição dentro da tag <p>
card1.appendChild(paragrafo); // Usou o appendChild para adicionar o elemento paragrafo no card1

card1.classList.add("super-border"); // Adicionou o CSS no card1

const cards = document.querySelectorAll(".card");
//const cards = document.getElementsByClassName("card");

console.log(cards);

Array.from(cards).map(item1 => { // Transformando cards em array
  console.log(item1.innerHTML);
});

[...cards].map(item2 => { // Transformando cards em array com spread
  console.log(item2.innerHTML);
});