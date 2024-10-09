function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  let numeroMasAlto = Math.max(x, y);

  return numeroMasAlto;

}

obtenerMayor(1, 2); //2
obtenerMayor(4, 9); //9
obtenerMayor(-1, 1); //1
obtenerMayor(10, 100); //100

module.exports = obtenerMayor;
