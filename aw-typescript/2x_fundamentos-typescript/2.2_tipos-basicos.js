// boolean
var estaPago = true;
// number
var idade = 20;
var valor = 29.99;
// string
var empresa = 'AlgaWorks';
var nome = 'João';
// Template Strings
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos.");
// arrays
var notas = [8, 6, 7, 9];
//tuple
var alunos = [nome, 10, 'Matemática'];
console.log("Nome do aluno: " + alunos[0]);
console.log("Mat\u00E9ria / Nota: " + alunos[2] + " = " + alunos[1]);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amrelo"] = 1] = "Amrelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
console.log("A Cor de fundo da Bandeira \u00E9 : " + corFundo);
// Any
var algunValor = 4;
algunValor = 'lalala';
algunValor = true;
var qqCoisa = ['lalala', 6, true];
//Quando usar?: Biblioteca de terceiros / Migração JavaScript para TypeScripts / Array com vários tipos de dados
// void
function alerta() {
    // .. alert('Operação não permitida');
    console.log('Finction retorno void');
}
// null e undefined
nome = undefined;
idade = null;
