function random(){
    // Carga un array de ejemplo en el html cuando le das al botón Cargar Ejemplo
    document.getElementById("text").value = "5,99,43,12,37"
    }

function aXa(){
const array = document.getElementById("text").value.split(/,/)
var suma = 0, media, mayor = -Infinity, menor = +Infinity
let j = 0, i;

// Suma cada valor del array
for(i = 0; i < array.length; i++){
    if(i == j)
    {
        suma = parseInt(array[i]) + suma
    }
    j++
}

// Calcula la media del array
media = suma / array.length

// Calcula el mayor
for(i = 0; i < array.length; i++){
    if(parseInt(array[i]) > mayor){
        mayor = array[i]
    }
}

// Calcula el menor
for(i = 0; i < array.length; i++){
    if(parseInt(array[i]) < menor){
        menor = array[i]
    }
}

document.getElementById("resultado").innerHTML = "La suma es: " + suma + "<br>"+
"La media es: " + media + "<br>"+
"El mayor es: " + mayor + "<br>"+
"El menor es: " + menor + "<br>";

}
function rpg(){
    location.reload()
}