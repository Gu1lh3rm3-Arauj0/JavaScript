const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function ebixeNomeENotas(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){

        const indice = listaDeAlunosEMedias[0].indexOf(aluno); //O metodo indezOf passa o inde=ice de um determinado elemento

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    }else{
        console.log("Aluno não encontrado");
    }
}

ebixeNomeENotas("João");