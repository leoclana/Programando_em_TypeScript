var notasAlunos = [10, 8, 8.5, 7];
//índices - in
for (var i in notasAlunos) {
    console.log(i);
}
console.log('---------------------');
//valores - of
for (var _i = 0, notasAlunos_1 = notasAlunos; _i < notasAlunos_1.length; _i++) {
    var nota = notasAlunos_1[_i];
    console.log(nota);
}
console.log('---------------------');
//Ps. Esse "of" gera uma bosta de codigo. Prefiro:
for (var i in notasAlunos) {
    console.log(notasAlunos[i]);
}
