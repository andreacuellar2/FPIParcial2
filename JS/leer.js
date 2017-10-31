function pubRequestJSON(){
  var pubWanted = window.localStorage.getItem("idPubWanted");
  var pubRequest = new XMLHttpRequest();
  pubRequest.open('GET', 'DATA/publicaciones.json');
  pubRequest.onload = function() {
    if (pubRequest.status >= 200 && pubRequest.status < 400) {
      var pubData = JSON.parse(pubRequest.responseText);
      pubSetHTML(pubData, pubWanted);
    } else {
      console.log("Se conecto con el servidor pero ocurrio un error");
    }
  };
    pubRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    pubRequest.send();
  }

  function pubSetHTML(pubData, pubWanted) {
    for (i in pubData) {
         if (pubData[i].id == pubWanted) {
           var publicacion = new Publicacion(pubData[i].id, pubData[i].idUsuario, pubData[i].titulo, pubData[i].contenido, pubData[i].idCategoria, pubData[i].imgSrc, pubData[i].comentarios, pubData[i].fecha);
         }
       }
      document.getElementById("nombreArticulo").innerHTML = publicacion.titulo;
      document.getElementById("imgArticulo").src = "IMG/publicaciones/"+publicacion.imgSrc;
      document.getElementById("fechaArticulo").innerHTML = publicacion.fecha;
      document.getElementById("contenidoArticulo").src = publicacion.contenido;
      document.getElementById("numeroComentarios").innerHTML = "Comentarios:"+publicacion.comentarios.lenght;
      var listaComentarios = document.getElementById("comentarios");
      for (var i in publicacion.comentarios) {
        var nodo = document.createElement("LI");
        var textnode = document.createTextNode(publicacion.comentarios[i]);
          node.appendChild(textnode);
          document.getElementById("myList").appendChild(node);
      }
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
    document.getElementById('comentando').style.display= 'none';
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
