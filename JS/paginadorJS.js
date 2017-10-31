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
  var nodeleft = document.createElement("LI");
  var textleft = document.createTextNode("«");
  nodeleft.appendChild(textleft);

  var noderight = document.createElement("LI");
  var textright = document.createTextNode("»");
  noderight.appendChild(textright);


  listaPaginador.appendChild(nodeleft);
  var item = 1;
  var idUserIn = window.localStorage.getItem("idUserLogged");
  for (var i = 0; i < todasPublicaciones.length; i++) {
    if (todasPublicaciones[i].idUsuario == parseInt(idUserIn)) {
      var node = document.createElement("LI");
      var text = document.createTextNode(item+"");

        node.setAttribute("class","active");
      
      node.setAttribute("onclick", "showPage("+item+")");
      node.appendChild(text);
      listaPaginador.appendChild(node);
      item++;
    }
  }
  listaPaginador.appendChild(noderight);
}
