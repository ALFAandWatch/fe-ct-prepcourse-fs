function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if ( valor == true ) {
    return 'Soy verdadero';
  } else {
    return 'Soy falso';
  }
}

esVerdadero(true); //Soy verdadero
esVerdadero(false); //Soy falso
esVerdadero('Hola Mundo'); //Soy falso

module.exports = esVerdadero;
