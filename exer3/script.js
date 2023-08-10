
const alunos = [
  {
      nome: 'Pedro',
      nota1: 10,
      nota2: 8
  },
  {
      nome: 'Jorge',
      nota1: 9,
      nota2: 8
  }
];

let mediaTurma = 0;

for (const aluno of alunos) {
  const mediaAluno = (aluno.nota1 + aluno.nota2) / 2;
  mediaTurma += mediaAluno;

  console.log('Informações do aluno:');
  console.log('Nome:', aluno.nome);
  console.log('Nota 1:', aluno.nota1);
  console.log('Nota 2:', aluno.nota2);
  console.log('Média:', mediaAluno.toFixed(2)); 
  console.log();
}

const mediaGeral = mediaTurma / alunos.length;
console.log('Média da Turma:', mediaGeral.toFixed(2)); 

// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.



















// // Array de objetos representando os alunos
// const alunos = [
//     {
//       nome: 'Pedro',
//       nota1: 5,
//       nota2: 8
//     },
//     {
//       nome: 'Jorge',
//       nota1: 7,
//       nota2: 9
//     }
//   ];
  
//   // Variável para armazenar a média da turma
//   let mediaTurma = 0;
  
//   // Iterar sobre o array de alunos usando for...of
//   for (const aluno of alunos) {
//     // Calcula a média do aluno atual
//     const mediaAluno = (aluno.nota1 + aluno.nota2) / 2;
//     mediaTurma += mediaAluno;
  
//     // Mostrar as informações do aluno no console
//     console.log('Informações do aluno:');
//     console.log('Nome:', aluno.nome);
//     console.log('Nota 1:', aluno.nota1);
//     console.log('Nota 2:', aluno.nota2);
//     console.log('Média:', mediaAluno);
//     console.log(); // Espaço vazio para separar as informações dos alunos
//   }
  
//   // Calcular a média da turma
//   mediaTurma /= alunos.length;
  
  // Mostrar a média da turma no console
  // console.log('Média da turma:', mediaTurma);
  