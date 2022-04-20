let n, n1, n2;

//Introducir día y validar que es correcto
n=parseInt(prompt("Introduce un día"));
while(n > 31 || n < 1)
{
    if(n > 31 || n < 1)
    {
        n=parseInt(prompt("Introduce un día correcto"));
    }
    else{}
//    if(n > 30 || n < 0)
//{
//    n=parseInt(prompt("Introduce un día correcto"));
//}
}

//Introducir mes y validar que es correcto
n1=parseInt(prompt("Introduce un mes"));
while(n1 > 12 || n1 < 1)
{
    var n3;
    n3=parseInt(prompt("Introduce un mes correcto"));
    n1 = n3;
}

//introducir año
n2=parseInt(prompt("Introduce un año"));

//Calcular si es un año bisiesto
if(n1 == 1 || n1 == 3 || n1 == 5 || n1 == 7 || n1 == 8 || n1 == 10 || n1 == 12)
{
    window.alert("Este mes tiene 31 días")
}
else{
    if(n1 == 4 || n1 == 6 || n1 == 9 || n1 == 11)
    {
        window.alert("Este mes tiene 30 días")
    }
    else {
        if(n2 % 2 == 0 && n1 == 2){
            window.alert("este mes tiene 29 días ya que es un año bisiesto") 
        }
        else
        {
            window.alert("Este mes tiene 28 días")
        }
    }
} 

