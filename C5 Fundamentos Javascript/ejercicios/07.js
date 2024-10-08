function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  let variable = typeof valor;
  
  return variable;
}

esTipoDato('hola'); //hola

module.exports = esTipoDato;