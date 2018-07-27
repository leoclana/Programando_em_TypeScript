const precos = ['10', '23', '19', '53'];

// const precosEmReais = precos.map(function(preco){
//     return 'R$' + preco + ',00';
// });
// ou 
//const precosEmReais = precos.map((preco) => {return 'R$' + preco + ',00';});
// ou 
const precosEmReais = precos.map(preco => ' R$' + preco + ',00 ');

console.log('Precos : ' + precosEmReais);

const acimaDeVinte = precos.filter(preco => preco > 20);
console.log('Precos maior que 20 : ' + acimaDeVinte);

const acimaDeVinteFormatado = precos
                                .filter(preco => preco > 20)
                                .map(preco => ' R$' + preco + ',00 ');
console.log('Precos maior que 20 formatado : ' + acimaDeVinteFormatado);