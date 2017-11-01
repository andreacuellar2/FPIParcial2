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
  window.location.replace("leer.html");
}
function redireccionDos() {
  localStorage.setItem("idPubWanted", null);
  localStorage.setItem("idPubWanted", idDos);
  window.location.replace("leer.html");
}
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
  if (prueba == "null"){
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
