function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:

  if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ) {
    let mensaje = 'Es vocal';
    return mensaje;
  } else {
    let mensaje = 'Dato incorrecto!';
    return mensaje;
  }
}

esVocal('a'); //Es vocal

esVocal('b'); //Dato incorrecto!

esVocal('e'); //Es vocal

esVocal('m'); //Dato incorrecto!

esVocal('u'); //Es vocal

esVocal('Hola Mundo'); //Dato incorrecto!

esVocal(2); //Dato incorrecto!

module.exports = esVocal;
