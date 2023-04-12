const imagens = document.getElementById("imagens")
const imagem = document.querySelectorAll(".imagem")

imagemAtual = 0

function carrossel(){
    imagemAtual++

    if (imagemAtual > imagem.length - 1) {
        imagemAtual = 0
    }

    imagens.style.transform = `translateX(${-imagemAtual * 100}%)`
}

setInterval(carrossel, 2300)
