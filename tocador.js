const listaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const teclasPiano = listaDeTeclas[contador];
    const btnAudio = teclasPiano.classList[5]
    const idAudio = `#som_${btnAudio}`
    teclasPiano.onclick = ()=>{
        document.querySelector(idAudio).play()
    }
    
}