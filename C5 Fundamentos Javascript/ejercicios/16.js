function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:

  if (num % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

esImpar(1); //true

esImpar(2); //false

esImpar(3); //true

esImpar(4); //false

esImpar(5); //true

esImpar(6); //false

esImpar(7); //true

esImpar(8); //false

module.exports = esImpar;