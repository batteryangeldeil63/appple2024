var imgVisualizacao = document.getElementById('imagem-visualizacao')
var titulo = document.getElementById('titulo-produto')
var nomeCor = document.getElementById('nome-cor-selecionada')
var img0 = document.getElementById('0-imagem-miniatura')
var img1 = document.getElementById('1-imagem-miniatura')
var img2 = document.getElementById('2-imagem-miniatura')

var verdeCipreste = {
    nome: 'Verde-Cipreste',
    pasta: 'imagens-verde-cipreste'
}

var azulInverno = {
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno'
}

var meiaNoite = {
    nome: 'Meia-Noite',
    pasta: 'imagens-meia-noite'
}

var estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

var rosaClaro = {
    nome: 'Rosa-Claro',
    pasta: 'imagens-rosa-claro'
}

var tamanhos = ['41 mm', '45 mm']
var cores = [ verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro,]

function mudarCor() {
    var idCor = document.querySelector('[name="opcao-cor"]:checked').id
    cor = idCor.charAt(0)
    titulo.innerText = 'Pulseira loop esportiva ' + cores[cor].nome + ' para caixa de '  + tamanhos[tamanhoSelecionado]
    nomeCor.innerText = 'Cor - ' + cores[cor].nome
    img0.src = './imagens/opcoes-cores/' + cores[cor].pasta + '/imagem-0.jpeg'
    img1.src = './imagens/opcoes-cores/' + cores[cor].pasta + '/imagem-1.jpeg'
    img2.src = './imagens/opcoes-cores/' + cores[cor].pasta + '/imagem-2.jpeg'
    imgVisualizacao.src = './imagens/opcoes-cores/' + cores[cor].pasta + '/imagem-' + imgPq + '.jpeg'
}

function mudarImgPq() {
    var idImgPq = document.querySelector('[name="opcao-imagem"]:checked').id
    imgPq = idImgPq.charAt(0)
    imgVisualizacao.src = './imagens/opcoes-cores/' + cores[cor].pasta + '/imagem-' + imgPq + '.jpeg'
}

function mudarTamanho() {
    var idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0)
    titulo.innerText = 'Pulseira loop esportiva ' + cores[cor].nome + ' para caixa de ' + tamanhos[tamanhoSelecionado]
    if (tamanhos[tamanhoSelecionado] == '41 mm') {
        imgVisualizacao.classList.add('caixa-pequena')
    } else {
        imgVisualizacao.classList.remove('caixa-pequena')
    }
}

