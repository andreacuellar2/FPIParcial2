function GenerarPaginador() {
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
  var listaPaginador = document.getElementById('idPaginador');
  var item = 1;
  var idUserIn = window.localStorage.getItem("idUserLogged");
  for (var i = 0; i < todasPublicaciones.length; i++) {
    if (todasPublicaciones[i].idUsuario == parseInt(idUserIn)) {
      var node = document.createElement("LI");
      var hrefText = document.createElement("A");
      var text = document.createTextNode(item+"");
      hrefText.appendChild(text);
      if (item==1) {
        node.setAttribute("class","activo");
      }
      //node.setAttribute("value",todasPublicaciones[i].id+"");
      node.setAttribute("onclick", "showPage("+todasPublicaciones[i].id+")");
      node.appendChild(hrefText);
      listaPaginador.appendChild(node);
      item++;
    }
  }
}
function showPage(posicion) {
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/usuarios.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var userData = JSON.parse(userRequest.responseText);
      showPageUsuarios(userData,posicion);
    } else {
      console.log("Se conectó con el servidor pero ocurrió un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
}
function showPageUsuarios(userData,posicion) {
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/publicaciones.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var userPost = JSON.parse(userRequest.responseText);
      showPageUsuariosPublicaciones(userData,userPost,posicion);
    } else {
      console.log("Se conectó con el servidor pero ocurrió un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
}
function showPageUsuariosPublicaciones(userData,userPost,posicion) {
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/categorias.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var allCategorias = JSON.parse(userRequest.responseText);
      DoShowPage(userData,userPost,allCategorias,posicion);
    } else {
      console.log("Se conectó con el servidor pero ocurrió un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
}
function DoShowPage(userData,userPost,allCategorias,posicion) {
  for (var i = 0; i < userPost.length; i++) {
    if (userPost[i].id == posicion) {
      document.getElementById("idOculto").innerHTML = posicion;
      document.getElementById('imgEntrada').src = "IMG/publicaciones/"+userPost[i].imgSrc;
      document.getElementById('tituloEntrada').innerHTML = userPost[i].titulo;
      document.getElementById("fechaEntrada").innerHTML = "Fecha de publicacion: "+userPost[i].fecha;
      document.getElementById("resumenEntrada").innerHTML = userPost[i].contenido;
      document.getElementById("comentariosEntrada").innerHTML = "Comentarios: "+userPost[i].comentarios.length;
      break;
    }
  }
}
