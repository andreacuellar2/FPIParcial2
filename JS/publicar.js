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
function ValidarSesion() {
  document.getElementById('masComentado1').style.display = 'none';
  document.getElementById('masComentado2').style.display = 'none';
  var sessionLog = window.localStorage.getItem("idUserLogged");
  if(sessionLog == "null" || sessionLog == null){
    window.location.replace("login.html");
  }else {
    document.getElementById('idUserLogIn').value = sessionLog;
  }
}
function LogOut() {
  alert("Se cerró la sesión");
  localStorage.setItem("idUserLogged", null);
  window.location.replace("index.html");
}
function irAPerfil(){
  window.location.replace("perfil.html");
}

function irAPublicar(){
  window.location.replace("publicar.php");
}
////////////////////////////Redirecciones mas comentados///////////////////////
function redireccionTres() {
  id = parseInt(document.getElementById('masComentado1').innerHTML);
  localStorage.setItem("idPubWanted", null);
  localStorage.setItem("idPubWanted", id);
  window.location.replace("leer.php");
}
function redireccionCuatro() {
  id = parseInt(document.getElementById('masComentado2').innerHTML);
  localStorage.setItem("idPubWanted", null);
  localStorage.setItem("idPubWanted", id);
  window.location.replace("leer.php");
}
function pubRequestJSON(){
  var pubRequest = new XMLHttpRequest();
  pubRequest.open('GET', 'DATA/publicaciones.json');
  pubRequest.onload = function() {
    if (pubRequest.status >= 200 && pubRequest.status < 400) {
      var pubData = JSON.parse(pubRequest.responseText);
      PubSetHTML(pubData);
    } else {
      console.log("Se conecto con el servidor pero ocurrio un error");
    }
  };
    pubRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    pubRequest.send();
  }
function PubSetHTML(pubData) {
  ///////////////////Mas comentados//////////////////////////
  var numComentarios = [];
  for (var i in pubData) {
    numComentarios.push({"coments":pubData[i].comentarios.length, "idPubComents":pubData[i].id});
  }
  numComentarios.sort(function(a, b){return b.coments-a.coments});
    for (var i in pubData) {
      ///////////////////////Mas comentada 1/////////////////////////////////////
      if (numComentarios[0].idPubComents == pubData[i].id) {
        document.getElementById("masComentado1").innerHTML = pubData[i].id;
        document.getElementById("imgMasComentado1").src = "IMG/publicaciones/"+ pubData[i].imgSrc;
        document.getElementById("tituloMasComentado1").innerHTML = pubData[i].titulo;
        document.getElementById("resumenMasComentado1").innerHTML = pubData[i].contenido;
      }
      ///////////////////////Mas comentada 2/////////////////////////////////////
      if (numComentarios[1].idPubComents == pubData[i].id) {
        document.getElementById("masComentado2").innerHTML = pubData[i].id;
        document.getElementById("imgMasComentado2").src = "IMG/publicaciones/"+ pubData[i].imgSrc;
        document.getElementById("tituloMasComentado2").innerHTML = pubData[i].titulo;
        document.getElementById("resumenMasComentado2").innerHTML = pubData[i].contenido;
      }
    }
  }
