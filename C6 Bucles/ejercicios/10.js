function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  if(num === 10 || num === 5){
    return true;
  } else {
    return false;
  }
}

esDiezOCinco(3); //false
esDiezOCinco(10); //true 
esDiezOCinco(3 + 2); //true
esDiezOCinco('5'); //false

module.exports = esDiezOCinco;
