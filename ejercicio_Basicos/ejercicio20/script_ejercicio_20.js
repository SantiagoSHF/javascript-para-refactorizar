let iva, bi, peso, precio, envio;
bi=parseFloat(prompt("Introduzca el BI del producto"));
iva=prompt("Introduce el tipo de IVA (Normal o reducido)" );
peso=parseFloat(prompt("Introduzca el peso del paquete en KG"));

if (peso < 1)
{
    envio = 3;
}
else if(peso < 3)
{
    envio = 5;
}
else{
    envio = 10;
}

if (iva == "normal" || iva == "Normal"){
    precio = bi + (bi * 0.21) + envio;
}
else if(iva == "reducido" || iva == "Reducido"){
    precio = bi + (bi * 0.10) + envio;
}

window.alert("El precio del producto es " + precio + "€");