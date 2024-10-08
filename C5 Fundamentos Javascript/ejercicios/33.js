// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // La función recibe dos argumentos llamados "num" y "exponent" los cuales son numeros.
  // Debes Retorna el valor de "num" elevado al "exponent".
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 5 ---> 0
  // Tu código:
  let resultado = Math.pow(num, exponent);
  
  return resultado;
}

elevar(2, 2); //4
elevar(5, 3); //125
elevar(4, 4); //256
elevar(2, 10); //1024


module.exports = elevar;