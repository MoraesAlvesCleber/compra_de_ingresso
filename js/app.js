
let pista = 100;
let superior = 200;
let inferior = 400;


function comprar() {
    //recuperar valor do formulário
    let produto = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);


    let valorPista = document.getElementById('qtd-pista');
    let valorSuperior = document.getElementById('qtd-superior');
    let valorInferior = document.getElementById('qtd-inferior');

    let avisoQuantidade = document.querySelector('.aviso1');

    let avisoExistente = document.querySelector(".aviso");

    if (avisoExistente) {
        avisoExistente.remove();
    }


    if (produto === 'pista' && pista > 0 && qtd <= pista && qtd > 0) {
        pista -= qtd;
        valorPista.innerHTML = pista;

    } else if (produto === 'superior' && superior > 0 && qtd <= superior && qtd > 0) {
        superior -= qtd;
        valorSuperior.innerHTML = superior;


    } else if (produto === 'inferior' && inferior > 0 && qtd <= inferior && qtd > 0) {
        inferior -= qtd;
        valorInferior.innerHTML = inferior;

    } else {
        avisoQuantidade.innerHTML += `<span class="aviso">Erro de quantidade!</span>`;
    }
}


