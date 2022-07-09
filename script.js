function criarBoard() {
    for (let index = 0; index < 25; index += 1) {
        const quadroPixel = document.getElementById('pixel-board')
        let pixel = document.createElement('div')
        quadroPixel.appendChild(pixel)
        pixel.className = "pixel"
    }
}
criarBoard();


function selecionarCor(event) {
    console.log('teste')
    let corSelecionada = document.querySelector('.selected');
    corSelecionada.classList.remove('selected');
    event.target.classList.add('selected');
}
let corAtivada = document.getElementById('color-palette');
corAtivada.addEventListener('click', selecionarCor)


const quadroPixels = document.getElementsByClassName('pixel');
function pintarQuadrado(event) {
    let corInicial = document.getElementById('pixel-board');
    console.log(corInicial[0])
    console.log('event', event.target)
    console.log('corIncicial', corInicial)
    event.target.style.backgroundColor = 
    console.log(quadroPixels)

}
for (let index = 0; index < quadroPixels.length; index += 1) {
  quadroPixels[index].addEventListener('click', pintarQuadrado);

}