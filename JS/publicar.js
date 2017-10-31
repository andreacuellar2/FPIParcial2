function generarCategorias(jsonCategorias) {
  var categorias = document.getElementById("selectorCategorias");
  var limite = jsonCategorias.length;
  for (var i = 0; i < limite; i++) {
    var node = document.createElement("OPTION");
    var textnode = document.createTextNode(jsonCategorias[i].nombre);
    node.appendChild(textnode);
    node.value = jsonCategorias[i].id;
    categorias.appendChild(node);
  }
}
function CargarCategorias(){
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/categorias.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var userData = JSON.parse(userRequest.responseText);
      generarCategorias(userData);
    } else {
      console.log("Se conectó con el servidor pero ocurrió un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
  }
