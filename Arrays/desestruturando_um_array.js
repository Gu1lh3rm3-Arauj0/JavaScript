const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function ebixeNomeENotas(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];

        const[alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno); //O metodo indezOf passa o inde=ice de um determinado elemento

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    }else{
        console.log("Aluno não encontrado");
    }
}

ebixeNomeENotas("Ana");