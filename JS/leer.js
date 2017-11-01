var idVisita;
function pubRequestJSON(){
  var pubWanted = window.localStorage.getItem("idPubWanted");
  var pubRequest = new XMLHttpRequest();
  pubRequest.open('GET', 'DATA/publicaciones.json');
  pubRequest.onload = function() {
    if (pubRequest.status >= 200 && pubRequest.status < 400) {
      var pubData = JSON.parse(pubRequest.responseText);
      UserRequestJSON(pubData, pubWanted);
    } else {
      console.log("Se conecto con el servidor pero ocurrio un error");
    }
  };
    pubRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    pubRequest.send();
  }

  function UserRequestJSON(pubData, pubWanted){
    var userRequest = new XMLHttpRequest();
    userRequest.open('GET', 'DATA/usuarios.json');
    userRequest.onload = function() {
      if (userRequest.status >= 200 && userRequest.status < 400) {
        var userData = JSON.parse(userRequest.responseText);
        pubSetHTML(pubData, pubWanted, userData);
      } else {
        console.log("Se conecto con el servidor pero ocurrio un error");
      }
    };
      userRequest.onerror = function() {
        console.log("Error al conectar con el servidor");
      };
      userRequest.send();
    }

  function pubSetHTML(pubData, pubWanted, userData) {
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
    //////////////////////////////////Leer////////////////////////////////////
    for (i in pubData) {
         if (pubData[i].id == pubWanted) {
           var publicacion = new Publicacion(pubData[i].id, pubData[i].idUsuario, pubData[i].titulo, pubData[i].contenido, pubData[i].idCategoria, pubData[i].imgSrc, pubData[i].comentarios, pubData[i].fecha);
         }
       }
      document.getElementById("nombreArticulo").innerHTML = publicacion.titulo;
      document.getElementById("imgArticulo").src = "IMG/publicaciones/"+publicacion.imgSrc;
      document.getElementById("fechaArticulo").innerHTML = "Fecha de publicacion: "+publicacion.fecha;
      document.getElementById("contenidoArticulo").innerHTML = publicacion.contenido;
      document.getElementById("numeroComentarios").innerHTML = "Comentarios: "+(publicacion.comentarios).length;
      var listaComentarios = document.getElementById("comentarios");
      for (var i in publicacion.comentarios) {
        for (var j in userData) {
          if (userData[j].id == publicacion.comentarios[i].idUsuario) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(userData[j].nombreUsuario+": "+publicacion.comentarios[i].comentario+"\n\n");
              node.appendChild(textnode);
              listaComentarios.appendChild(node);
          }
        }
      }
        for (var j in userData) {
          if (userData[j].id == publicacion.idUsuario) {
            document.getElementById("autorArticulo").value = "Autor: "+userData[j].nombreUsuario;
            idVisita = publicacion.idUsuario;
          }
        }
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
    document.getElementById('comentando').style.display= 'none';
    document.getElementById('estrellas').style.display= 'none';
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
function haciaPerfil() {
  localStorage.setItem("idUserVisita", null);
  localStorage.setItem("idUserVisita", idVisita);
  window.location.replace("visita.html");
}
function formImplicito() {
  document.getElementById('idPostChoused').value = window.localStorage.getItem("idPubWanted");
  document.getElementById('idUserLogIn').value = window.localStorage.getItem("idUserLogged");
  document.getElementById('idUserLogIn2').value = window.localStorage.getItem("idUserLogged");
  
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
