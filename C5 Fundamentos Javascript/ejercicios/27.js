function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:
  let area = alto * ancho;
  
  if (alto == ancho) {
    let mensaje = 'El area del cuadrado es de ' + area + ' cm2.';
    return mensaje;
  } else {
    let mensaje = 'El area del rectangulo es de ' + area + ' cm2.';
    return mensaje;
  }
}

obtenerAreaRectangulo(3, 5); //El area del rectangulo es de 15 cm2.

obtenerAreaRectangulo(4, 2); //El area del rectangulo es de 8 cm2.

obtenerAreaRectangulo(5, 5); //El area del cuadrado es de 25 cm2.

module.exports = obtenerAreaRectangulo;
