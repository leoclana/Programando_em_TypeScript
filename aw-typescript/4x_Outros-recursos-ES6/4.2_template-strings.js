const precos = ['10', '23', '19', '53'];

const acimaDeVinteFormatado = precos
                                .filter(preco => preco > 20)
                                .map(preco => ` R$${preco},00 `);
                                //.map(preco => ' R$' + preco + ',00 ');

console.log('Precos maior que 20 formatado : ' + acimaDeVinteFormatado);