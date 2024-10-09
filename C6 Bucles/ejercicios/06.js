function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  //Convierto el numero en String
  let numeroString = num.toString();
  let largoDelString = numeroString.length;  

  //Si el string contiene un '.' le resto 1 al largo del string
  if(numeroString.includes(".") == true) {
    largoDelString = largoDelString - 1 ;
  }

  //Devuelvo Ture si el largo del string (sin contar los puntos) es igual a 3.
  if (largoDelString == 3) {
    return true;
  } else {
    return false;
  }
}

tieneTresDigitos(2); //false
tieneTresDigitos(23); //false
tieneTresDigitos(234); //true
tieneTresDigitos(22.5); //true
tieneTresDigitos(2.5); //falsee


module.exports = tieneTresDigitos;
