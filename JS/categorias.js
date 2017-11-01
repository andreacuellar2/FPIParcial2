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
    document.getElementById('masComentado1').style.display = 'none';
    document.getElementById('masComentado2').style.display = 'none';
    document.getElementById('areaPerfil').style.display = 'none';
    document.getElementById('navLogin').style.display = 'block';
    document.getElementById('navRegistro').style.display= 'block';
    document.getElementById('navPerfil').style.display = 'none';
    document.getElementById('navPublicar').style.display= 'none';
    document.getElementById('navLogout').style.display= 'none';
  }else {
    document.getElementById('masComentado1').style.display = 'none';
    document.getElementById('masComentado2').style.display = 'none';
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

function irAPerfil(){
  window.location.replace("perfil.html");
}

function irAPublicar(){
  window.location.replace("publicar.php");
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
  ///////////////////Mas comentados//////////////////////////
  var numComentarios = [];
  for (var i in todasPublicaciones) {
    numComentarios.push({"coments":todasPublicaciones[i].comentarios.length, "idPubComents":todasPublicaciones[i].id});
  }
  numComentarios.sort(function(a, b){return b.coments-a.coments});
    for (var i in todasPublicaciones) {
      ///////////////////////Mas comentada 1/////////////////////////////////////
      if (numComentarios[0].idPubComents == todasPublicaciones[i].id) {
        document.getElementById("masComentado1").innerHTML = todasPublicaciones[i].id;
        document.getElementById("imgMasComentado1").src = "IMG/publicaciones/"+ todasPublicaciones[i].imgSrc;
        document.getElementById("tituloMasComentado1").innerHTML = todasPublicaciones[i].titulo;
        document.getElementById("resumenMasComentado1").innerHTML = todasPublicaciones[i].contenido;
      }
      ///////////////////////Mas comentada 2/////////////////////////////////////
      if (numComentarios[1].idPubComents == todasPublicaciones[i].id) {
        document.getElementById("masComentado2").innerHTML = todasPublicaciones[i].id;
        document.getElementById("imgMasComentado2").src = "IMG/publicaciones/"+ todasPublicaciones[i].imgSrc;
        document.getElementById("tituloMasComentado2").innerHTML = todasPublicaciones[i].titulo;
        document.getElementById("resumenMasComentado2").innerHTML = todasPublicaciones[i].contenido;
      }
    }
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
          window.location.replace("leer.php");
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
