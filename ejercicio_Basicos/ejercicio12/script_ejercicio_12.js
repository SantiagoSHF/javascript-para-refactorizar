let days, month, year;

//Introducir día

days = parseInt(prompt("Introduce un día"));
while (days > 31 || days < 1)
{
    days = parseInt(prompt("Introduce un día correcto"));
}

//Introducir mes

month = parseInt(prompt("Introduce un mes"));
while (month > 12 || month < 1)
{
    month = parseInt(prompt("Introduce un mes correcto"));
}

//introducir año

year = parseInt(prompt("Introduce un año"));
while (year < 0)
{
    year = parseInt(prompt("Introduce un año correcto"));

}

//Calcular si es navidad

if (days == 25 && month == 12)
{
    window.alert("La fecha introducida es " + days + "/" + month + "/" + year + " que se corresponde a NAVIDAD") 
}
else 
{
    window.alert("su fecha introducida es " + days + "/" + month + "/" + year)
}