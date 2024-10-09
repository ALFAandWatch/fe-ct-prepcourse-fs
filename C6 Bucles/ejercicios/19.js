function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  //CREO UN ARRAY VACIO Y LE VOY SUMANDO TODOS LOS NUMEROS DESDE 1 HASTA n
  const todosLosNumeros = [];
  for (let i = 1; i <= n; i++) {
    todosLosNumeros.push(i);
  }

  //CREO UNA VARIABLE VALOR CERO, Y LE VOY SUAMNDO CADA NUMERO INCLUIDO EN EL ARRAY
  let suma = 0;
  for (let i = 0; i <= todosLosNumeros.length; i++) {
    suma += i;
  }
  
  return suma;
}

sumarHastaN(5); //15
sumarHastaN(6); //21
sumarHastaN(7); //28
sumarHastaN(8); //36

module.exports = sumarHastaN;
