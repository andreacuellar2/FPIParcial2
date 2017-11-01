function OpacityCategorias(){
document.getElementById('contenedorGeografia').style.opacity = '0.5';
document.getElementById('contenedorarte').style.opacity = '0.5';
document.getElementById('contenedorhistoria').style.opacity = '0.5';
document.getElementById('contenedorentretenimiento').style.opacity = '0.5';
document.getElementById('contenedorciencia').style.opacity = '0.5';
document.getElementById('contenedordeportes').style.opacity = '0.5';
document.getElementById('contenedorOtros').style.opacity='o.5';
}
function MostrarArtGeografia(){
  document.getElementById('contenedorArtGeografía').style.display='block';
  document.getElementById('contenedorArtArte').style.display='none';
  document.getElementById('contenedorArtHistoria').style.display='none';
  document.getElementById('contenedorArtEntretenimiento').style.display='none';
  document.getElementById('contenedorArtCiencia').style.display='none';
  document.getElementById('contenedorArtDeportes').style.display='none';
  document.getElementById('contenedorArtOtros').style.display='none';
}
function MostrarArtArte(){
  document.getElementById('contenedorArtGeografía').style.display='none';
  document.getElementById('contenedorArtArte').style.display='block';
  document.getElementById('contenedorArtHistoria').style.display='none';
  document.getElementById('contenedorArtEntretenimiento').style.display='none';
  document.getElementById('contenedorArtCiencia').style.display='none';
  document.getElementById('contenedorArtDeportes').style.display='none';
  document.getElementById('contenedorArtOtros').style.display='none';
}
function MostrarArtHistoria(){
  document.getElementById('contenedorArtGeografía').style.display='none';
  document.getElementById('contenedorArtArte').style.display='none';
  document.getElementById('contenedorArtHistoria').style.display='block';
  document.getElementById('contenedorArtEntretenimiento').style.display='none';
  document.getElementById('contenedorArtCiencia').style.display='none';
  document.getElementById('contenedorArtDeportes').style.display='none';
  document.getElementById('contenedorArtOtros').style.display='none';
}
function MostrarArtEntretenimiento(){
  document.getElementById('contenedorArtGeografía').style.display='none';
  document.getElementById('contenedorArtArte').style.display='none';
  document.getElementById('contenedorArtHistoria').style.display='none';
  document.getElementById('contenedorArtEntretenimiento').style.display='block';
  document.getElementById('contenedorArtCiencia').style.display='none';
  document.getElementById('contenedorArtDeportes').style.display='none';
  document.getElementById('contenedorArtOtros').style.display='none';
}
function MostrarArtCiencia(){
  document.getElementById('contenedorArtGeografía').style.display='none';
  document.getElementById('contenedorArtArte').style.display='none';
  document.getElementById('contenedorArtHistoria').style.display='none';
  document.getElementById('contenedorArtEntretenimiento').style.display='none';
  document.getElementById('contenedorArtCiencia').style.display='block';
  document.getElementById('contenedorArtDeportes').style.display='none';
  document.getElementById('contenedorArtOtros').style.display='none';
}
function MostrarArtDeportes(){
  document.getElementById('contenedorArtGeografía').style.display='none';
  document.getElementById('contenedorArtArte').style.display='none';
  document.getElementById('contenedorArtHistoria').style.display='none';
  document.getElementById('contenedorArtEntretenimiento').style.display='none';
  document.getElementById('contenedorArtCiencia').style.display='none';
  document.getElementById('contenedorArtDeportes').style.display='block';
  document.getElementById('contenedorArtOtros').style.display='none';
}
function MostrarArtOtros(){
  document.getElementById('contenedorArtGeografía').style.display='none';
  document.getElementById('contenedorArtArte').style.display='none';
  document.getElementById('contenedorArtHistoria').style.display='none';
  document.getElementById('contenedorArtEntretenimiento').style.display='none';
  document.getElementById('contenedorArtCiencia').style.display='none';
  document.getElementById('contenedorArtDeportes').style.display='none';
  document.getElementById('contenedorArtOtros').style.display='block';
}
function OpacityActOtro(){
  document.getElementById('contenedorOtros').style.opacity = '1';
}
function OpacityDesOtro(){
  document.getElementById('contenedorOtros').style.opacity = '0.5';
}
function OpacityActGeo(){
  document.getElementById('contenedorGeografia').style.opacity = '1';
}
function OpacityDesGeo(){
  document.getElementById('contenedorGeografia').style.opacity = '0.5';
}
function OpacityActArt(){
  document.getElementById('contenedorarte').style.opacity = '1';
}
function OpacityDesArt(){
  document.getElementById('contenedorarte').style.opacity = '0.5';
}
function OpacityActHis(){
  document.getElementById('contenedorhistoria').style.opacity = '1';
}
function OpacityDesHis(){
  document.getElementById('contenedorhistoria').style.opacity = '0.5';
}
function OpacityActEnt(){
  document.getElementById('contenedorentretenimiento').style.opacity = '1';
}
function OpacityDesEnt(){
  document.getElementById('contenedorentretenimiento').style.opacity = '0.5';
}
function OpacityActCie(){
  document.getElementById('contenedorciencia').style.opacity = '1';
}
function OpacityDesCie(){
  document.getElementById('contenedorciencia').style.opacity = '0.5';
}
function OpacityActDep(){
  document.getElementById('contenedordeportes').style.opacity = '1';
}
function OpacityDesDep(){
  document.getElementById('contenedordeportes').style.opacity = '0.5';
}
function TopNavSesion(){
  var prueba =  window.localStorage.getItem("idUserLogged");
  if (prueba == "null" || prueba == null){
    document.getElementById('areaPerfil').style.display = 'none';
    document.getElementById('navLogin').style.display = 'block';
    document.getElementById('navRegistro').style.display= 'block';
    document.getElementById('navPerfil').style.display = 'none';
    document.getElementById('navPublicar').style.display= 'none';
    document.getElementById('navLogout').style.display= 'none';
  }else {
    document.getElementById('areaPerfil').style.display = 'block';
    document.getElementById('navLogin').style.display = 'none';
    document.getElementById('navRegistro').style.display= 'none';
    document.getElementById('navPerfil').style.display = 'block';
    document.getElementById('navPublicar').style.display= 'block';
    document.getElementById('navLogout').style.display= 'block';
  }
}
function LogOut() {
  alert("Se cerró la sesión");
  localStorage.setItem("idUserLogged", null);
  window.location.replace("index.html");
}
function jsonReadFileVariablesUser() {
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
  for (var i in todasCategorias) {
        for (var a in todasPublicaciones) {
          if (todasCategorias[i].id==todasPublicaciones[a].idCategoria) {
            var lista = document.getElementById("listaArticulos"+i);
            var node = document.createElement("LI");
            var textnode = document.createTextNode(todasPublicaciones[a].titulo);
            node.appendChild(textnode);
            lista.appendChild(node);
            node.setAttribute("value",todasPublicaciones[a].id+"");
            node.setAttribute("onclick", "CreandoPubWanted("+todasPublicaciones[a].id+")");
          }
        }
    }
  }
  function CreandoPubWanted(idPub) {
          localStorage.setItem("idPubWanted", null);
          localStorage.setItem("idPubWanted", idPub);
          window.location.replace("leer.html");
      }
