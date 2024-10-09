function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  //CREO UN ARRAY CON TODOS LOS VALORES POTENCIA DE 2
  //LO HICE HASTA 20 PERO PODRIA HACERSE HASTA MAS
  let potenciasDeDos = [];
  for (let i = 0; i <= 20; i++) {
      potenciasDeDos.push( Math.pow(i, 2) ); 
  }
  
  //CHEQUEO SI numero ESTA EN EL ARRAY
  if ( potenciasDeDos.includes(numero) ) {
    return 'El numero ' + numero + ' es potencia de dos.';
  } else {
    return 'El numero ' + numero + ' no es potencia de dos.';
  }
  
}

esPotenciaDeDos(4); //El numero 4 es potencia de dos.
esPotenciaDeDos(5); //El numero 5 no es potencia de dos.
esPotenciaDeDos(6); //El numero 6 no es potencia de dos.
esPotenciaDeDos(7); //El numero 7 no es potencia de dos.
esPotenciaDeDos(8); //El numero 8 no es potencia de dos.
esPotenciaDeDos(9); //El numero 9 es potencia de dos.
esPotenciaDeDos(10); //El numero 10 no es potencia de dos.
esPotenciaDeDos(11); //El numero 11 no es potencia de dos.
esPotenciaDeDos(12); //El numero 12 no es potencia de dos.
esPotenciaDeDos(13); //El numero 13 no es potencia de dos.
esPotenciaDeDos(14); //El numero 14 no es potencia de dos.
esPotenciaDeDos(15); //El numero 15 no es potencia de dos.
esPotenciaDeDos(16); //El numero 16 es potencia de dos.

module.exports = esPotenciaDeDos;
