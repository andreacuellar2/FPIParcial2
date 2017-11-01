function UserRequestJSON(){
  var userLogged = window.localStorage.getItem("idUserLogged");
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/usuarios.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var userData = JSON.parse(userRequest.responseText);
      pubRequestJSON(userData, userLogged);
    } else {
      console.log("Se conecto con el servidor pero ocurrio un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
  }

  function pubRequestJSON(userData, userLogged){
    var pubWanted = window.localStorage.getItem("idUserLogged");
    var pubRequest = new XMLHttpRequest();
    pubRequest.open('GET', 'DATA/publicaciones.json');
    pubRequest.onload = function() {
      if (pubRequest.status >= 200 && pubRequest.status < 400) {
        var pubData = JSON.parse(pubRequest.responseText);
        dataSetHTML(userData, userLogged, pubData, pubWanted);
      } else {
        console.log("Se conecto con el servidor pero ocurrio un error");
      }
    };
      pubRequest.onerror = function() {
        console.log("Error al conectar con el servidor");
      };
      pubRequest.send();
  }

  function dataSetHTML(userData, userLogged, pubData, pubWanted){
    for (var i in pubData) {
    if (pubData[i].idUsuario == parseInt(pubWanted)) {
      var entrada = new Publicacion(pubData[i].id, pubData[i].idUsuario, pubData[i].titulo, pubData[i].contenido, pubData[i].idCategoria, pubData[i].imgSrc, pubData[i].comentarios, pubData[i].fecha, pubData[i].puntuacion);
      document.getElementById('noEntradas').style.display='none';
      document.getElementById("idOculto").innerHTML = entrada.id;
      document.getElementById("imgEntrada").src = "IMG/publicaciones/"+entrada.imgSrc;
      document.getElementById("tituloEntrada").innerHTML = entrada.titulo;
      document.getElementById("fechaEntrada").innerHTML = "Fecha de publicacion: "+entrada.fecha;
      document.getElementById("resumenEntrada").innerHTML = entrada.contenido;
      document.getElementById("comentariosEntrada").innerHTML = "Comentarios: "+(entrada.comentarios).length;
      break;
    }else {
      document.getElementById('entrada').style.display='block';
    }
  }
  var user = null;
    for (i in userData) {
         if (userData[i].id == userLogged) {
           user = new Usuario(userData[i].id, userData[i].nombre, userData[i].nombreUsuario, userData[i].descripcion, userData[i].sexo, userData[i].password, userData[i].imgProfile);
         }
    }
    if (user != null) {
      document.getElementById("nombreUsuario").innerHTML = user.nombre;
      document.getElementById("username").innerHTML = user.nombreUsuario;
      document.getElementById("descripcion").innerHTML = user.descripcion;
      document.getElementById("fotoUsuario").src = "IMG/uploads/"+user.imgProfile;
      document.getElementById("sexoUsuario").innerHTML = (user.sexo=="H")?"Hombre":"Mujer";
    }else {
      window.location.replace("login.html");
    }
  }

function LogOut() {
  alert("Se cerró la sesión");
  localStorage.setItem("idUserLogged", null);
  window.location.replace("index.html");
}

function mostrarPerfil() {
  document.getElementById('perfil').style.display='block';
  document.getElementById('editarPerfil').style.display='none';
}
function editarPerfil() {
  document.getElementById('perfil').style.display='none';
  document.getElementById('editarPerfil').style.display='block';
}

function TopNavSesion(){
  var prueba =  window.localStorage.getItem("idUserLogged");
  if (prueba == "null"){
    document.getElementById('idOculto').style.display = 'none';
    document.getElementById('navPerfil').style.display = 'none';
    document.getElementById('navPublicar').style.display= 'none';
    document.getElementById('navLogout').style.display= 'none';
  }else {
    document.getElementById('idOculto').style.display = 'none';
    document.getElementById('navPerfil').style.display = 'block';
    document.getElementById('navPublicar').style.display= 'block';
    document.getElementById('navLogout').style.display= 'block';
  }
}

function btnLeerMas() {
  var pub = parseInt(document.getElementById('idOculto').innerHTML);
  localStorage.setItem("idPubWanted", null);
  localStorage.setItem("idPubWanted", pub);
  window.location.replace("leer.php");
}
