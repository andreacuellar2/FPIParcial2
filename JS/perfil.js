function UserRequestJSON(){
  var userLogged = window.localStorage.getItem("idUserLogged");
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/usuarios.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var userData = JSON.parse(userRequest.responseText);
      userSetHTML(userData, userLogged);
    } else {
      console.log("Se conecto con el servidor pero ocurrio un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
  }

  function userSetHTML(userData, userLogged) {
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
