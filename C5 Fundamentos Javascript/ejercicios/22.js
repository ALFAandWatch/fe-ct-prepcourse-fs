function divide(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 2
  // 5, 5 ---> 1
  // Tu código:
  return x / y;
}

divide(4, 2); //2

divide(50, 2); //25

divide(8, 4); //2

divide(40, 10); //4

divide(-4, 2); //-2

divide(4, -2); //-2

module.exports = divide;