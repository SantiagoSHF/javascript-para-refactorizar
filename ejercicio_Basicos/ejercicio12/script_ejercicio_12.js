var dia, mes, anno;

//Introducir día
dia=parseInt(prompt("Introduce un día"));
while(dia > 31 || dia < 1)
{
    dia=parseInt(prompt("Introduce un día correcto"));
}

//Introducir mes
mes=parseInt(prompt("Introduce un mes"));
while(mes > 12 || mes < 1)
{
    mes=parseInt(prompt("Introduce un mes correcto"));
}

//introducir año
anno=parseInt(prompt("Introduce un año"));

//Calcular si es navidad
if(dia == 25 && mes > 12){
    window.alert("La fecha introducida es " + dia + "/" + mes + "/" + anno + " que se corresponde a NAVIDAD") 
}
 else {
    window.alert("su fecha introducida es " + dia + "/" + mes + "/" + anno) 
}

