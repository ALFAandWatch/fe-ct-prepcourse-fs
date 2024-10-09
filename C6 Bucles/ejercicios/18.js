function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  //CREO UN ARRAY VACIO
  const todosLosNumeros = [];


  //AÑADO AL ARRAY TODOS LOS NUMEROS ENTRE A Y B (AMBOS INCLUIDOS)
  for (let i = a; i <= b; i++) {
    todosLosNumeros.push(i);
  }

  //CREO UN VALOR INICIAL '1' QUE SERA MULTIPLICADO POR LOS NUMEROS INCLUIDOS EN EL ARRAY  
  let producto = 1;
  for ( let i = 0; i < todosLosNumeros.length; i++) {
    producto = producto * todosLosNumeros[i];
  }
  
  return producto;
}

productoEntreNúmeros(1, 2); //6
productoEntreNúmeros(3, 6); //360
productoEntreNúmeros(2, 5); //120
productoEntreNúmeros(5, 19); //5068545850368000

module.exports = productoEntreNúmeros;