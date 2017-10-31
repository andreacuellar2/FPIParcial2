function loginRequestJSON(){
  var userLoging = document.getElementById("user_login").value;
  var userPass = document.getElementById("user_pass").value;
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'DATA/usuarios.json');
  userRequest.onload = function() {
    if (userRequest.status >= 200 && userRequest.status < 400) {
      var userData = JSON.parse(userRequest.responseText);
      fidingUser(userData, userLoging, userPass);
    } else {
      console.log("Se conectó con el servidor pero ocurrió un error");
    }
  };
    userRequest.onerror = function() {
      console.log("Error al conectar con el servidor");
    };
    userRequest.send();
  }

  function fidingUser(userData, userLoging, userPass) {
    var userExists = false;
    var passCorrect = false;

    for (i in userData) {
     if (userData[i].nombreUsuario == userLoging) {
       userExists = true;
       if (userData[i].password == userPass) {
         passCorrect = true;
         if (typeof(Storage) !== "undefined") {
             localStorage.setItem("idUserLogged", userData[i].id);
         } else {
             alert("Lo siento, su navegador no soporta Web Storage");
         }
         window.location.replace("perfil.html");
       }
     }
   }
   if (userExists==false) {
     document.getElementById("advertencia").innerHTML = "Usuario o contraseña incorrectos"
   }
   if (passCorrect==false) {
     document.getElementById("advertencia").innerHTML = "Usuario o contraseña incorrectos"
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

  function redireccion() {
    window.location.replace("registro.php");
  }
