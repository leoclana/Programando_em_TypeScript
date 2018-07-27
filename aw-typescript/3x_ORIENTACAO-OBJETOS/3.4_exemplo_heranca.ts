class Funcionario{

    nome: string;
    salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    pagarImposto(taxa: number = 7.5){
        console.log(`-> ${this.nome} está pagando ${taxa}% de imposto = ${this.salario * taxa / 100}`);
    }
}

class Secretario extends Funcionario {

}

class Executivo extends Funcionario{
    pagarImposto(taxa: number = 27.5){
        console.log('Executivo paga mais');
        super.pagarImposto(taxa);
    }
}

let sarah = new Secretario('Saha', 2000);
let jorge = new Executivo('Jorge', 30000);

console.log('');
sarah.pagarImposto();
console.log('');
jorge.pagarImposto();