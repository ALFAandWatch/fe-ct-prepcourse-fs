function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  if (status == 1 ) {
    return 'El usuario esta online.';
  } else if (status == 2){
    return 'El usuario esta away.';
  } else {
    return 'El usuario esta offline.';
  }
}

conection(1); //El usuario esta online.
conection(2); //El usuario esta away.
conection(3); //El usuario esta offline.

module.exports = conection;
