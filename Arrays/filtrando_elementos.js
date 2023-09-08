const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {//o primeiro parametro não está sendo utilizado
  return medias[indice] < 7;
});

console.log(reprovados);