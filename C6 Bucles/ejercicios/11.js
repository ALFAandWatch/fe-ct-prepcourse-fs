function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if (num < 50 && num > 20) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

estaEnRango(15); //false
estaEnRango(20); //false
estaEnRango(25); //true
estaEnRango(49); //true
estaEnRango(50); //false
estaEnRango(60); //false

module.exports = estaEnRango;
