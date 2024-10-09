function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if(a === b && a < 0 && b < 0){
    return true;
  } else {
    return false;
  }
    
}

esIgualYNegativo(-2, -2); //true
esIgualYNegativo(3, -4); //false
esIgualYNegativo(2, 3); //false

module.exports = esIgualYNegativo;
