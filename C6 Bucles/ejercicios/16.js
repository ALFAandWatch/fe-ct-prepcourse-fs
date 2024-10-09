function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  let saludo = '';

  if (idioma == 'Aleman') {
    saludo = 'Guten Tag';
  } else if (idioma == 'Mandarin') {
    saludo = 'Ni Hao';
  } else if (idioma == 'Ingles') {
    saludo = 'Hello!';
  } else {
    saludo = 'Hola';
  }
  return saludo;
}


saludo('Aleman'); //Guten Tag
saludo('Mandarin'); //Ni Hao
saludo('Ingles'); //Hello!
saludo('Frances'); //Hola



module.exports = saludo;
