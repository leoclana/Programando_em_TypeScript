var quantidade = 20;
//quantidade = 'lalala'; //* Não compila. O TypeScript já aferiu o tipo "number" para a variavel "quantidade" quando atribuiu o "= 20"
var x = [1, 2, null];
// x[2] = 'sss'; //* Não compila. Considera que o array é Type "number"
var y = [1, 'lalal', null];
y[0] = 'zzzzzz'; // Compila, pois o array e criano como Type "any" 
//Contextual Typing
//window.onmousedown = function(evento: MouseEvent){  ou...
window.onmousedown = function (evento) {
    console.log(evento.button);
};
window.onmousedown = function (evento) {
    console.log(evento.lalala); // aqui o "lalala", que é qq coisa, só funciona porque esta como "..(evento: any)"
};
/** ATENÇÃO : É RECOMENDADO SEMPRE ATRIBUIR OS TIPOS.
Ex.:
let quantidade: number = 20;
let x: number[] = [1, 2, null];
let y: any[] = [1, 'lalal', null];
window.onmousedown = function(evento: MouseEvent){
*/ 
