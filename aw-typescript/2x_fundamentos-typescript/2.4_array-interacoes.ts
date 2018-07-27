let notasAlunos: number[] = [10, 8, 8.5, 7];

//índices - in
for(let i in notasAlunos){
    console.log(i);
}

console.log('---------------------');

//valores - of
for(let nota of notasAlunos){
    console.log(nota);
}

console.log('---------------------');

//Ps. Esse "of" gera uma bosta de codigo. Prefiro:
for(let i in notasAlunos){
    console.log(notasAlunos[i]);
}