function deEuroAdolar(euro) {
  // La función recibe un argumento llamado euro el cual es un numero.
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Suponiendo que 1 euro equivale a 1.20 dólares.
  // Retornar el valor en dolares.
  // Por ejemplo: 
  // 1 ---> 1.20
  // 0 ---> 0
  // Tu código:
  let valorEnDolares = euro * 1.20;
  let mensaje = '';

  if (euro == 1){
    mensaje = euro + ' euro equivale a ' + valorEnDolares.toFixed(2) + ' dolares.';
  } else {
    mensaje = euro + ' euros equivalen a ' + valorEnDolares.toFixed(2) + ' dolares.';
  }
  return mensaje;
}

deEuroAdolar(1); //1 euro equivale a 1.20 dolares.
deEuroAdolar(2); //2 euros equivalen a 2.40 dolares.
deEuroAdolar(3); //3 euros equivalen a 3.60 dolares.
deEuroAdolar(10); //10 euros equivalen a 12.00 dolares.
deEuroAdolar(100); //100 euros equivalen a 120.00 dolares.
deEuroAdolar(225); //225 euros equivalen a 270.00 dolares.

module.exports = deEuroAdolar;
