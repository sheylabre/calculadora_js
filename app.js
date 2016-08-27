
var opcion = parseInt(prompt("escoja una opcion \n" + "1. Suma\n" + "2. Resta\n" + "3. Multiplicación\n" + "4. División\n" + "5. Resto\n" + "6. Mayor igual\n" + "7. Menor igual\n" + "8. Igual\n" + "9. Desigualdad"));
var numero1 = parseInt(prompt("Ingrese el # 1"));
var numero2 = parseInt(prompt("Ingrese el # 2"));

if(opcion>0 && opcion<=9)
{
switch(opcion){
    case 1:
        var suma = numero1 + numero2;
        document.write("La suma es:" + suma);
        break;
    case 2:
        var resta = numero1 - numero2;
        document.write("La resta es:" + resta);
        break;
    case 3:
        var multiplicaion = numero1 * numero2;
        document.write("La multiplicaión es:" + multiplicaion);
        break;
    case 4:
        var division = numero1 / numero2;
        document.write("La división es:" + division);
        break;
    case 5:
        var resto = numero1 % numero2;
        document.write("El resto es:" + resto);
        break;
     case 6:
        var mayor_igual = numero1 > numero2;
        document.write("Es mayor igual:" + mayor_igual);
        break;
    case 7:
        var menor_igual = numero1 < numero2;
        document.write("Es menor igual:" + menor_igual);
        break;
    case 8:
        var igual = numero1 == numero2;
        document.write("Es igual:" + igual);
        break;
    case 9:
        var desigualdad = numero1 != numero2;
        document.write("Es desigual:" + desigualdad);
        break;
    default:
        document.write("Respuesta" + opcion);
        break;
}
}
else{
    document.write("No es válido");
}

