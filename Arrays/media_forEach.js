const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota /*, indice, array_atual*/) { //O for também pode fornecer  o elemento, o índice e o array atual, respectivamente
  somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);