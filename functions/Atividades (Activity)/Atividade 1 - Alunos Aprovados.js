/*

1. Crie uma função que recebe o array alunos e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

*/

const alunos = [
    {
        nome: "João",
        nota: 0,
        turma: "A",
    },
    {
        nome: "Maria",
        nota: 2,
        turma: "B",
    },
    {
        nome: "José",
        nota: 4,
        turma: "A",
    },
    {
        nome: "Ana",
        nota: 6,
        turma: "B",
    },
    {
        nome: "João",
        nota: 8,
        turma: "A",
    },
    {
        nome: "Francisca",
        nota: 10,
        turma: "B",
    },
];


function AlunosAprovados(array, media){
    let aprovados = [];

    for (let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(AlunosAprovados(alunos, 7));