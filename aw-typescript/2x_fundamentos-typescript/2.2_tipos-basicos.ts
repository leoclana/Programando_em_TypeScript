// boolean
let estaPago: boolean = true;

// number
let idade: number = 20;
let valor: number = 29.99;

// string
let empresa: string = 'AlgaWorks';
let nome: string = 'João';

// Template Strings
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

// arrays
let notas: number[] = [8, 6, 7, 9];

//tuple
let alunos: [string, number, string] = [nome, 10, 'Matemática'];
console.log(`Nome do aluno: ${alunos[0]}`);
console.log(`Matéria / Nota: ${alunos[2]} = ${alunos[1]}`);

// Enum
enum Cor {Verde, Amrelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;
console.log(`A Cor de fundo da Bandeira é : ${corFundo}`)

// Any
let algunValor: any = 4;
algunValor = 'lalala';
algunValor = true;
let qqCoisa: any[] = ['lalala', 6, true];
//Quando usar?: Biblioteca de terceiros / Migração JavaScript para TypeScripts / Array com vários tipos de dados

// void
function alerta(): void{
    // .. alert('Operação não permitida');
    console.log('Finction retorno void');
}

// null e undefined
nome = undefined;
idade = null;
