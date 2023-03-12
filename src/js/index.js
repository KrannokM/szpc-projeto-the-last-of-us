/* 
    OBJETIVO: ao clicar no botão,
    mostrar a imagem de fundo
    correspondente.

    1 - dar um jeito de pegar o elemento HTML dos botões correspondentes;
    2 - dar um jeito de identificar o clique do usuário no botão (evento);
    3 - desmarcar o botão selecionado anteriormente;
    4 - marcar o botão clicado como se ele tivesse sido selecionado;
    5 - esconder a imagem ativa de fundo;
    6 - fazer aparecer a imagem correspondente ao botão clicado.

*/

// 1 - dar um jeito de pegar o elemento HTML dos botões correspondentes;
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// 2 - dar um jeito de identificar o clique do usuário no botão (evento);
botoesCarrossel.forEach ((botao, indice) => {
    botao.addEventListener('click' , () => {

        //3 - desmarcar o botão selecionado anteriormente;
        desativarBotaoSelecionado();

        //4 - marcar o botão clicado como se ele tivesse sido selecionado;
        selecionarBotaoCarrossel(botao);

        //5 - esconder a imagem ativa de fundo;
        esconderImagemAtiva();

        //6 - fazer aparecer a imagem correspondente ao botão clicado.
        mostrarImagemDeFundo(indice);

    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

