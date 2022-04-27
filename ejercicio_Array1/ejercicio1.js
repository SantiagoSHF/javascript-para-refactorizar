const $TEXTO = document.getElementById('text')
const $RESULTADO = document.getElementById('resultado')

function cargaArrayEjemplo () {
  $TEXTO.value = '5,99,43,12,37'
}

function calcular () {
  const valores = $TEXTO.value.split(/,/)
  const numeros = valores.map(a => parseInt(a))

  const resumen = {
    suma: 0,
    maximo: Number.MIN_VALUE,
    minimo: Number.MAX_VALUE
  }

  const resultado = numeros.reduce(reducer, resumen)
  resultado.media = resultado.suma / valores.length

  imprime(resultado)
}

function reiniciar () {
  location.reload()
}

function reducer ({ suma, maximo, minimo }, actual) {
  return {
    suma: suma + actual,
    maximo: calculaMaximo(maximo, actual),
    minimo: calculaMinimo(minimo, actual)
  }
}

function calculaMinimo (a, b) {
  return a > b ? b : a
}

function calculaMaximo (a, b) {
  return a > b ? a : b
}

function imprime ({ suma, maximo, minimo, media }) {
  $RESULTADO.innerText =
    `
      La suma es: ${suma}.
      La media es: ${media}.
      El mayor es: ${maximo}.
      El menor es: ${minimo}.
    `
}
