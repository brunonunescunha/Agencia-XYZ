const setaVoltar = document.getElementById("seta-voltar")
const setaAvancar = document.getElementById("seta-avancar")
const imagens = document.querySelectorAll(".imagem-carrossel")

let imagemAtual = 0

setaAvancar.addEventListener("click", () => {
    if (imagemAtual === imagens.length -1){
        return
    }
    imagemAtual++;

    esconderImagemMostrar()

    imagens[imagemAtual].classList.add("mostrar")

    colocarOpacidadeNaUtimaOuNaPrimeiraImagem()

})

setaVoltar.addEventListener("click", () => {
    if(imagemAtual === 0){
        return
    }

    imagemAtual--;

    esconderImagemMostrar()

    imagens[imagemAtual].classList.add("mostrar")

    colocarOpacidadeNaUtimaOuNaPrimeiraImagem()
})

function esconderImagemMostrar() {
    const imagemMostrada = document.querySelector(".mostrar")
    imagemMostrada.classList.remove("mostrar")
}

function colocarOpacidadeNaUtimaOuNaPrimeiraImagem(){
    const naoEAPrimeiraImagem = imagemAtual !== 0 
    if(naoEAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade")
    } else {
        setaVoltar.classList.add("opacidade")
    }
    const chegouNaUtimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1
    if (chegouNaUtimaImagem) {
        setaAvancar.classList.add("opacidade")
    } else {
        setaAvancar.classList.remove("opacidade")
    }
}
