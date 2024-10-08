function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}


esPar(1); //false

esPar(2); //true

esPar(3); //false

esPar(4); //true

esPar(5); //false

esPar(6); //true

esPar(7); //false

esPar(8); //true

module.exports = esPar;
