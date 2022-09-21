function soma(num1, num2) {
  return num1 + num2;
}

const soma2 = function(num1, num2) {
  return num1 + num2;
}

const soma3 = (num1, num2) => { // Expressão lâmbida, mais utilizada //
  return num1 + num2;
}

const soma4 = (numm1, num2) => num1 + num2; // Expressão de Retorono direto //

const dobro1 = function(num) {
  return num * 2;
}

const dobro2 = num => num * 2; // Expressão mais pratica e resumida //


// FUNCAO QUE NAO TEM UM RETORNO DEFINIDO, POR PADRAO ELA RETORNA UNDFINED //

function mostrarPreco(preco) {
  console.log("PRECO")
}


// VARIAVEIS DEFINIDAS DENTRO DO ESCOPO DA FUNÇÃO NAO VAZAM ESCOPO //

function areaCirculo(raio) {
  var pi = 3.14;
  return pi * raio * raio;
}


// FUNCTION HOISTING: FUNÇÕES NO JS SÃO "MOVIDAS" PARA CIMA PELO MOTOR DO JS //

teste(10);

function teste(x) {
  console.log("Teste = " + x)
}


// FUNÇÃO PODEM SER PASSADAS COMO ARGUMENTO //

function triplo(num) {
  return num * 3;
}

function aplicar(f, num) {
  const result = f(num);
  console.log('Resultado = ' + result);
}

aplicar(triplo, 10);