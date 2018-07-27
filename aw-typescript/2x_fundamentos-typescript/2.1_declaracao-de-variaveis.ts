// var = variaveis que valem fora do contexto que foi criada
// let = variavel so vale dentro do contexto que foi criada
// const = variavel que so vale dentro do contexto que foi criada e nao pode ser alterada.

// let e const
function iniciarTime(iniciaJogo: boolean){
    const nome = 'Messi e amigos';
    let cidade = 'em lugar nenhum!';

    if(iniciaJogo){
        cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(true); 
