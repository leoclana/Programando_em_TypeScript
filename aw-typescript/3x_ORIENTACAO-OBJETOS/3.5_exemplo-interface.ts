interface Pessoa{
    idade: number;
    sexo?: string; // tem o parametro, mas com "?" não é obrigatório, então não da erro. Se retirar o "?", dará erro.
}

//**a Forma de declarar "pessoa: {idade: number}" obriga o objeto "pessoa" ter um atributo "idade: number" */
//function imprimirIdade(pessoa: {idade: number}){
    function imprimirIdade(pessoa: Pessoa){
    console.log(pessoa.idade);
}

//let joaoMarcos = {nome: 'João Marcos'}; // Assim, sem atributo "idade", dá erro
let joaoMarcos = {nome: 'João Marcos', idade: 35};

imprimirIdade(joaoMarcos);