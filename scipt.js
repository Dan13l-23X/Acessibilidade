document.addEventListener('DOMContentLoaded', () => {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    const corpo = document.body;
    let tamanhoFonteAtual = 16; // Tamanho de fonte padrão em pixels

    // Alternar a visibilidade das opções de acessibilidade
    botaoAcessibilidade.addEventListener('click', () => {
        opcoesAcessibilidade.classList.toggle('apresenta-lista');
        botaoAcessibilidade.classList.toggle('rotacao-botao');
    });

    // Aumentar o tamanho da fonte
    aumentarFonte.addEventListener('click', () => {
        tamanhoFonteAtual += 2;
        corpo.style.fontSize = `${tamanhoFonteAtual}px`;
    });

    // Diminuir o tamanho da fonte
    diminuirFonte.addEventListener('click', () => {
        tamanhoFonteAtual -= 2;
        corpo.style.fontSize = `${tamanhoFonteAtual}px`;
    });
});