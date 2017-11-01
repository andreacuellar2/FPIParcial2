var idUno;
var idDos;
function pubRequestJSON(){
  var pubWanted = window.localStorage.getItem("idPubWanted");
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

  ///////////////////Recientes/////////////////////////////////
  idUno = pubData.length;
  idDos = idUno-1;
    for (var i in pubData) {
      if (pubData[i].id == idUno) {
        var pubUno = new Publicacion(pubData[i].id, pubData[i].idUsuario, pubData[i].titulo, pubData[i].contenido, pubData[i].idCategoria, pubData[i].imgSrc, pubData[i].comentarios, pubData[i].fecha);
          document.getElementById("imgPrimera").src = "IMG/publicaciones/"+ pubUno.imgSrc;
          document.getElementById("tituloPrimero").innerHTML = pubUno.titulo;
          document.getElementById("fechaPrimero").innerHTML = "Fecha de publicacion: "+pubUno.fecha;
          document.getElementById("resumenPrimero").innerHTML = pubUno.contenido;
          document.getElementById("comentariosPrimero").innerHTML = "Comentarios: "+(pubUno.comentarios).length;
      }
    }
    for (var i in pubData) {
      if (pubData[i].id == idDos) {
        var pubDos = new Publicacion(pubData[i].id, pubData[i].idUsuario, pubData[i].titulo, pubData[i].contenido, pubData[i].idCategoria, pubData[i].imgSrc, pubData[i].comentarios, pubData[i].fecha);
          document.getElementById("imgSegunda").src = "IMG/publicaciones/"+ pubDos.imgSrc;
          document.getElementById("tituloSegundo").innerHTML = pubDos.titulo;
          document.getElementById("fechaSegundo").innerHTML = "Fecha de publicacion: "+pubDos.fecha;
          document.getElementById("resumenSegundo").innerHTML = pubDos.contenido;
          document.getElementById("comentariosSegundo").innerHTML = "Comentarios: "+(pubDos.comentarios).length;
      }
    }
}
function redireccionUno() {
  localStorage.setItem("idPubWanted", null);
  localStorage.setItem("idPubWanted", idUno);
  window.location.replace("leer.php");
}
function redireccionDos() {
  localStorage.setItem("idPubWanted", null);
  localStorage.setItem("idPubWanted", idDos);
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
///////////////////////////////////////////////////////////////////////////////
function OpacityArticuloOsc(){
  document.getElementById('articulos').style.opacity = '1';
}
function OpacityArticuloCla(){
  document.getElementById('articulos').style.opacity = '0.5';
}
function OpacityArticuloOsc2(){
  document.getElementById('articulos2').style.opacity = '1';
}
function OpacityArticuloCla2(){
  document.getElementById('articulos2').style.opacity = '0.5';
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
