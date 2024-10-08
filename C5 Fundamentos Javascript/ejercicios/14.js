function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

mayorQueCincuenta(2); //false

mayorQueCincuenta(49); //false

mayorQueCincuenta(50) //false

mayorQueCincuenta(51); //true

module.exports = mayorQueCincuenta;
