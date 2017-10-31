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
      for (var i in pubData) {
        for (var j in userData) {
          if (userData[j].id == pubData[i].idUsuario) {
            document.getElementById("autorArticulo").value = "Autor: "+userData[j].nombreUsuario;
            idVisita = pubData[i].idUsuario;
          }
        }
      }
  }

function TopNavSesion(){
  var prueba =  window.localStorage.getItem("idUserLogged");
  document.getElementById('userComentando').innerHTML = prueba;
  if (prueba == "null" || prueba == null){
    document.getElementById('areaPerfil').style.display = 'none';
    document.getElementById('navLogin').style.display = 'block';
    document.getElementById('navRegistro').style.display= 'block';
    document.getElementById('navPerfil').style.display = 'none';
    document.getElementById('navPublicar').style.display= 'none';
    document.getElementById('navLogout').style.display= 'none';
    document.getElementById('comentando').style.display= 'none';
    document.getElementById('estrellas').style.display= 'none';
    document.getElementById('userComentando').style.display= 'none';
  }else {
    document.getElementById('areaPerfil').style.display = 'block';
    document.getElementById('navLogin').style.display = 'none';
    document.getElementById('navRegistro').style.display= 'none';
    document.getElementById('navPerfil').style.display = 'block';
    document.getElementById('navPublicar').style.display= 'block';
    document.getElementById('navLogout').style.display= 'block';
    document.getElementById('userComentando').style.display= 'none';
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
