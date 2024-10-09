function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  switch (numero) {
    case 1:
      return 'Es lunes';
      break;
    case 2:
      return 'Es martes';
      break;
    case 3:
      return 'Es miercoles';
      break;
    case 4:
      return 'Es jueves';
      break;
    case 5:
      return 'Es viernes';
      break;
    case 6:
      return 'Es sabado';
      break;
    case 7:
      return 'Es domingo';
      break;

    default:
      return '¿que dia es?';
      break;
  }
}

let numeroRandom = Math.floor(Math.random() * 11);
obtenerDiaSemana(numeroRandom);

module.exports = obtenerDiaSemana;

