function cambiarValueStar(num) {
  document.getElementById('idvalueStar').value = num;
  document.getElementById('formStar').style.display = "none";
  document.getElementById('califica').innerHTML = "Gracias por tu colaboración";
}
function OcultarCalificacion() {
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/usuarios.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var userData = JSON.parse(userRequest.responseText);
      jsonReadFilePublicaciones(userData);
    } else {
      console.log("Se conectó con el servidor pero ocurrió un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
}
function jsonReadFilePublicaciones(allUsers) {
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/publicaciones.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var userPost = JSON.parse(userRequest.responseText);
      jsonReadFileCategorias(allUsers,userPost);
    } else {
      console.log("Se conectó con el servidor pero ocurrió un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
}
function jsonReadFileCategorias(allUsersData, allPublicaciones) {//Codigo para usar en generar entradas
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/categorias.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var allCategorias = JSON.parse(userRequest.responseText);
      ConsumiendoTodo(allUsersData,allPublicaciones,allCategorias);
    } else {
      console.log("Se conectó con el servidor pero ocurrió un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
}
function ConsumiendoTodo(todosUsuarios, todasPublicaciones, todasCategorias) {//Hacer esto nuestro main
  var idUserActual = parseInt(localStorage.getItem("idUserLogged"));
  var idPostActual = parseInt(localStorage.getItem("idPubWanted"));
  var lasPuntuaciones = todasPublicaciones[idPostActual];
  for (var i = 0; i < lasPuntuaciones.length; i++) {
    if (lasPuntuaciones[i].idUsuario==idUserActual) {
      alert("Borrar");
    }
  }

}
