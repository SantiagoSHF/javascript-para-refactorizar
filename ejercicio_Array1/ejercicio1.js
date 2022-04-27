function random () {
  // Carga un array de ejemplo en el html cuando le das al botón Cargar Ejemplo
  document.getElementById('text').value = '5,99,43,12,37'
}

function aXa () {
  const a = document.getElementById('text').value.split(/,/)
  let s = 0
  let md
  let my = -Infinity
  let m = +Infinity
  let j = 0

  // Suma cada valor del array
  for (i = 0; i < a.length; i++) {
    if (i == j) {
      s = parseInt(a[i]) + s
    }
    j++
  }

  // Calcula la md del array
  md = s / a.length

  // Calcula el mayor
  for (i = 0; i < a.length; i++) {
    if (parseInt(a[i]) > my) {
      my = a[i]
    }
  }

  // Calcula el menor
  for (i = 0; i < a.length; i++) {
    if (parseInt(a[i]) < m) {
      m = a[i]
    }
  }

  // Pruebas antiguas
  // for(i = 0; i < a.length; i++){
  //    if(parseInt(a[i]) > wa){
  //        wa = a[i]
  //    }
  // }
  // for(i = 0; i < a.length; i++){
  //    if(parseInt(a[i]) == iwa){
  //        iwa = a[i]
  //    }
  // }
  // for(i = 0; i < a.length; i++){
  //    if(parseInt(a[i]) < m){
  //        m = a[i]
  //    }
  // }
  // for(i = 0; i < a.length; i++){
  //    if(parseInt(a[i]) <= menoiwa){
  //        menoiwa = a[i]
  //    }
  // }

  document.getElementById('resultado').innerHTML = 'La suma es: ' + s + '<br>' +
'La media es: ' + md + '<br>' +
'El mayor es: ' + my + '<br>' +
'El menor es: ' + m + '<br>'
}
function rpg () {
  location.reload()
}
