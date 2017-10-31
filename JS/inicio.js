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

function redireccion() {
  localStorage.setItem("idPubWanted", 1);
  window.location.replace("leer.html");
}
