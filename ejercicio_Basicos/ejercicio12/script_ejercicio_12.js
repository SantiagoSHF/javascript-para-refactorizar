var w, m, a;

//Introducir día
w=parseInt(prompt("Introduce un día"));
while(w > 31 || w < 1)
{
    w=parseInt(prompt("Introduce un día correcto"));
}

//Introducir mes
mes=parseInt(prompt("Introduce un mes"));
while(m > 12 || m < 1)
{
    m=parseInt(prompt("Introduce un mes correcto"));
}

//introducir año
a=parseInt(prompt("Introduce un año"));
a=parseInt(prompt("Introduce un año"));

//anno=parseInt(prompt(""));
//anno=parseInt(prompt(""));
//anno=parseInt(prompt(""));
//anno=parseInt(prompt(""));

//Calcular si es navidad
if(w == 25 && m > 12){
    window.alert("La fecha introducida es " + w + "/" + m + "/" + a + " que se corresponde a NAVIDAD") 
}
 else {
    window.alert("su fecha introducida es " + w + "/" + m + "/" + a)
     //window.alert("") 
     //window.alert("su fecha introducida es ") 
}

