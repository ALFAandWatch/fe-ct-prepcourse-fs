function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  if (Number.isInteger(numero) == true) {
    return true;
  } else {
    return false;
  }
}

esNumeroEntero(35); //true

esNumeroEntero(1); //true

esNumeroEntero(45.0); //true

esNumeroEntero(45.15); //false

module.exports = esNumeroEntero;