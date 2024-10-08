function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:

  if (num > 0) {
    let mensajePositivo = 'El número ' + num + ' es POSITIVO';
    return mensajePositivo;
  } else if (num < 0) {
    let mensajeNegativo = 'El número ' + num + ' es NEGATIVO';
    return mensajeNegativo;
  } else {
    let mensajeCero = 'El número es CERO!';
    return mensajeCero;
  }
}



esPositivo(1); //El número 1 es POSITIVO

esPositivo(0); //El número es CERO!

esPositivo(34); //El número 34 es POSITIVO

esPositivo(-3); //El número -3 es NEGATIVO

module.exports = esPositivo;