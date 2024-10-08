function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  let area = (base * altura) / 2 ;
  let mensaje = 'El area del triangulo es de ' + area + ' cms2.';

  return mensaje;
}

areaDelTriangulo(5, 3); //El area del triangulo es de 7.5 cms2.

areaDelTriangulo(10, 4); //El area del triangulo es de 20 cms2.

areaDelTriangulo(4, 2); //El area del triangulo es de 4 cms2.

areaDelTriangulo(2.5, 2); //El area del triangulo es de 2.5 cms2.

module.exports = areaDelTriangulo;
