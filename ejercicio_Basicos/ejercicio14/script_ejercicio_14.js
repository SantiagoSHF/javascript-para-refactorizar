
var nombre,preguntas, correctas, media;
nombre=prompt("Introduce el nombre del aspirante" );
preguntas=parseInt(prompt("Introduce el número de preguntas" ));
correctas=parseInt(prompt("Introduce el número de respuestas correctas" ));

// Escribe el nombre
document.write("Nombre: " + nombre + "<br>");

// Escribe el total de preguntas
document.write("Total de preguntas: " + preguntas + "<br>");

// Escribe las preguntas correctas
document.write("Preguntas correctas: " + correctas + "<br>");

// Calcula la media
media = (correctas * 100) / preguntas;

// Pruebas que salieron mal
//r = (c * n * r) / p;
//r = (c * 10000) / p;
//r = (c * 1001) / p;
//r = (c * 2000) / p;

if (media >= 90)
{
    document.write("Nivel por porcentaje: Nivel Superior");
}
else {
    if(media >= 75)
    {
        document.write("Nivel por porcentaje: Nivel medio");
    }
    else {
        if (media >= 50)
        {
            document.write("Nivel por porcentaje: Nivel Bajo");
        }

        else {        
                document.write("Nivel por porcentaje: Fuera de nivel"); 

        }
    }
}

