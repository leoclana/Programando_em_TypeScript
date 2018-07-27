//**a Forma de declarar "pessoa: {idade: number}" obriga o objeto "pessoa" ter um atributo "idade: number" */
//function imprimirIdade(pessoa: {idade: number}){
function imprimirIdade(pessoa) {
    console.log(pessoa.idade);
}
//let joaoMarcos = {nome: 'João Marcos'}; // Assim, sem atributo "idade", dá erro
var joaoMarcos = { nome: 'João Marcos', idade: 35 };
imprimirIdade(joaoMarcos);
