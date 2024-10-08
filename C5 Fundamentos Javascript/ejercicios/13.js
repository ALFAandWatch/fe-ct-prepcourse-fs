function menosQueNoventa(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

menosQueNoventa(12); //true

menosQueNoventa(89); //true

menosQueNoventa(90); //false

menosQueNoventa(95); //false

module.exports = menosQueNoventa;