const numero = document.querySelector("#numeroUsuario")
const btnTabuada = document.querySelector("#btnTabuada")
const resultado = document.querySelector("#res")

function calculo() {
resultado.innerHTML = '' 
var conversao = Number(numero.value)

var inicial = 1
while(inicial <= 10) {
    resultado.innerHTML += `<p> ${conversao} x${inicial} = ${conversao * inicial}  </p>`

    inicial++
}

}

btnTabuada.addEventListener("click", calculo)