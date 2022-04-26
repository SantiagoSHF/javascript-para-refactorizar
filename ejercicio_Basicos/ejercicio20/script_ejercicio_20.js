let i, bi, p, pr, e;
// Introduce el BI del producto
bi=parseFloat(prompt("Introduzca el BI del producto"));
// Introduce el tipo de IVA del producto
i=prompt("Introduce el tipo de IVA (Normal o reducido)" );
// Introduce el peso del producto
p=parseFloat(prompt("Introduzca el peso del paquete en KG"));

// Precio de envio según el peso del producto
if (p < 1)
{
    e = 3;
}
else 
{
    if(p < 3)
    {
        e = 5;
    }
    else
    {
        e = 10;
    }
}

// Se selecciona el tipo de IVA
if (i == "normal" || i == "Normal"){
    pr = bi + (bi * 0.21) + e;
}
else
{
    if(i == "reducido" || i == "Reducido")
    {
        pr = bi + (bi * 0.10) + e;
    }
}

//if (iva == "normal" || iva == "Normal"){
//    pr = bi + (bi * 0.21) + envio;
//}
//else
//{
//    if(iva == "reducido" || iva == "Reducido")
//    {
//        pr = bi + (bi * 0.10) + envio;
//    }
//}

// Se devuelve el precio del prodcuto
window.alert("El precio del producto es " + pr + "€");
