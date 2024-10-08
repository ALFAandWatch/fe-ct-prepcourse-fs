// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCubo(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cubo.
  // Por ejemplo: 
  // 3 ---> 27
  // 0 ---> 0
  // Tu código:
  let resultado = Math.pow(num, 3);
  
  return resultado;
}

elevarAlCubo(1); //1
elevarAlCubo(2); //8
elevarAlCubo(3); //27
elevarAlCubo(5); //125
elevarAlCubo(10); //1000

module.exports = elevarAlCubo;
