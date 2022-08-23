/*
  01
  - Utilizando um while loop, exiba no console todos os números entre 0 e 5,  
    inclusive esses dois.
  - O resultado deve ser:
    0
    1
    2
    3
    4
    5
*/

let a = 0;
while (a <= 5)
{
  console.log(a);
  a++;
}
console.log('');

/*
  02
  - Utilizando um for loop, faça o mesmo que foi pedido no exercício 01.
*/

for (let i = 0; i <= 5; i++)
{
  console.log(i);
}

/*
  03
  - Escreva um loop (for ou while) que exiba a frase abaixo no console;
  - Substitua o "X" pela informação correta;
  - "X" deve começar em 1 na 1ª exibição da frase e em 10 na última;
  - Exiba a frase 10x no console.

  "Esta é a Xª vez que esta frase é exibida no console."
*/

console.log('');
for (let i = 0; i < 10; i++)
{
  console.log(`Esta é a ${i + 1} vez que esta frase é exibida no console.`);
}


/*
  04
  - Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à  
    ela um array vazio;
  - Adicione no array que a "upperCaseCities" armazena as cidades do array  
    cities com todas as letras maiúsculas, utilizando o for loop.
  - Para ver se deu certo, exiba o upperCaseCities no console.
*/

console.log('');

const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
let upperCaseCities = [];

for (let i = 0; i < cities.length; i++)
{
  upperCaseCities.push(cities[i].toUpperCase());
}
console.log(upperCaseCities);

/*
  05
  - Após a const names, utilize um for loop para gerar um template HTML;
  - Exiba no console o template HTML que você gerou;
  - O template deve ser exibido apenas uma vez no console e o resultado deve ser:
    <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
*/

const names = ['João Grilo', 'Chicó', 'Rosinha']

let template = [];
let h = 0;

while (h < 3)
{
  template[h] = `<li>${names[h]}</li>`
  h++
}
console.log(template.join());

/*
  06
  - Após a const numbers, utilize um for loop para somar todos os números do  
    array;
  - Exiba no console um boolean indicando se o total dessa soma é 337;
  - O console deve exibir true.
*/

console.log(' ');

const numbers = ['91', '5', '30', '97', '83', '31']
let x = 0;
let result = 0;
while (x < numbers.length)
{
  result += Number(numbers[x]);
  x++;
}

console.log(result === 337);

/*
  07 - Comente o console.log acima.

  Este exercício é um pouco mais complexo que os anteriores. Não se preocupe  
  muito caso você não acerte ele. Apenas tente resolvê-lo com o conhecimento  
  adquirido até aqui.

  - O JavaScript permite você criar arrays dentro de um outro array. Isso é  
    chamado de aninhamento de arrays, ou nested arrays em inglês. Por isso, o  
    array "arrays" abaixo é uma sintaxe válida. Cada array dentro do array  
    "arrays" é um item;
  - Abaixo do array "arrays", utilizando o for loop, some todos os números  
    destes arrays.
  - Após o for, exiba no console o resultado, que deve ser 218.

  Dica: você pode colocar um loop dentro do outro, ou seja, aninhá-los. =)
*/

console.log('');

const arrays = [
  [4, 32, 8],
  [64, 8, 32],
  [8, 32, 16],
  [2, 8, 4]
]

let resultNest = 0;

for (let l = 0; l <= 3; l++)
{
  for (let c = 0; c <= 2; c++)
  {
    resultNest += Number(arrays[l][c]);
  }
}

console.log(resultNest);