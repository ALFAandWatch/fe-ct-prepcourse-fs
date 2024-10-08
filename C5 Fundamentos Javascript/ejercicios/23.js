function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
  return x % y;
}

obtenerResto(10, 2); //0

obtenerResto(10, 3); //1

obtenerResto(15, 3); //0

obtenerResto(14, 5); //4

module.exports = obtenerResto;