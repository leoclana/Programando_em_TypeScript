// var = variaveis que valem fora do contexto que foi criada
// let = variavel so vale dentro do contexto que foi criada
// const = variavel que so vale dentro do contexto que foi criada e nao pode ser alterada.
// let e const
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    var cidade = 'em lugar nenhum!';
    if (iniciaJogo) {
        cidade = 'em Uberlândia';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(true);
