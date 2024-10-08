function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:
  let simboloAgregado = str + '!';
  return simboloAgregado;
}

agregarSimboloExclamacion('Hola Mundo'); //Hola Mundo!

agregarSimboloExclamacion('Campeones del Mundo'); //Campeones del Mundo!

agregarSimboloExclamacion('!'); //!!

module.exports = agregarSimboloExclamacion;
