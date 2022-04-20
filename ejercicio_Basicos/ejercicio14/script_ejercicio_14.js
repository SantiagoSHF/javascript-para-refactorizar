var n,p, c, r;
n=prompt("Introduce el nombre del aspirante" );
p=parseInt(prompt("Introduce el número de preguntas" ));
c=parseInt(prompt("Introduce el número de respuestas correctas" ));
// Escribe el nombre
document.write("Nombre: " + n + "<br>");
// Escribe el total de preguntas
document.write("Total de preguntas: " + p + "<br>");
// Escribe las preguntas correctas
document.write("Preguntas correctas: " + c + "<br>");
// Calcula la media
r = (c * 100) / p;
// Pruebas que salieron mal
//r = (c * n * r) / p;
//r = (c * 10000) / p;
//r = (c * 1001) / p;
//r = (c * 2000) / p;
if (r >= 90)
{
    document.write("Nivel por porcentaje: Nivel Superior");
}
else {
    if(r >= 75)
    {
        document.write("Nivel por porcentaje: Nivel medio");
    }
    else {
        if (r >= 50)
        {
            document.write("Nivel por porcentaje: Nivel Bajo");
        }
        else {
            if (r < 50)
            {
                document.write("Nivel por porcentaje: Fuera de nivel");
            }
        }
    }
}
/* if (r >= 90)
{
    document.write("Nivel por porcentaje: Nivel Superior");
}
else {
    if(r >= 75)
    {
        document.write("Nivel por porcentaje: Nivel medio");
    }
    else {
        if (r >= 50)
        {
            document.write("Nivel por porcentaje: Nivel Bajo");
        }
        else {
            if (r < 50)
            {
                document.write("Nivel por porcentaje: Fuera de nivel");
            }
        }
    }
} */
