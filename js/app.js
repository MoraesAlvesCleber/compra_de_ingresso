
let pista = 100;
let superior = 200;
let inferior = 400;


function comprar() {
    //recuperar valor do números
    let produto = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
   

    let valorPista = document.getElementById('qtd-pista');
    let valorSuperior = document.getElementById('qtd-superior');
    let valorInferior = document.getElementById('qtd-inferior');

    if (produto === 'pista' && pista > 0 && qtd <= pista) {
        pista -= qtd;
        valorPista.innerHTML = pista;

    }  else if (produto === 'superior' && superior > 0 && qtd <= superior) {
        superior -= qtd;
        valorSuperior.innerHTML = superior;

    } else if (produto === 'inferior' && inferior > 0 && qtd <= inferior) {
        inferior -= qtd;
        valorInferior.innerHTML = inferior;

    }  else {
        alert('Erro de quantidade');
    }
}