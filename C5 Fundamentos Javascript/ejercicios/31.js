// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:

  let resultado = Math.pow(num, 2);
  
  return resultado;
}

elevarAlCuadrado(2); //4
elevarAlCuadrado(4); //16
elevarAlCuadrado(6); //36
elevarAlCuadrado(8); //64
elevarAlCuadrado(5); //25
elevarAlCuadrado(10); //100

module.exports = elevarAlCuadrado;
