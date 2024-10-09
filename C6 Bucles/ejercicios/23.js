function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  //CREO UN ARRAY CON TODOS LOS DIVISORES DE CADA NUMERO DEL 1 AL 20 (SE PUEDE HACER HASTA MAS)
  const divisibleEntre = [];
  for (let i = 0; i < 21; i++) {
    if (numero % i == 0) {
      divisibleEntre.push(i);
    }
  }
  
  //CUANDO EL ARRAY CONTIENE SOLO DOS ELEMENTOS ENTONCES ESE NUMERO ES PRIMO
  if (divisibleEntre.length == 2) {
    console.log('El numero ' + numero + ' es primo.');
  } else {
    console.log('El numero ' + numero + ' no es primo.');
  }
}

esNumeroPrimo(2);
esNumeroPrimo(3);
esNumeroPrimo(4);
esNumeroPrimo(5);
esNumeroPrimo(6);
esNumeroPrimo(7);
esNumeroPrimo(8);


module.exports = esNumeroPrimo;
