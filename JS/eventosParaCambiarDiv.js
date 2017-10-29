function MostrarInicio() {
  document.getElementById('pagInicio').style.display = 'block';
  document.getElementById('pagCategorias').style.display = 'none';
  document.getElementById('pagArticulo').style.display = 'none';
  document.getElementById('pagPublicar').style.display = 'none';
  document.getElementsById("navInicio").setAttribute("class", "activo");
}

function MostrarArticulo() {
  document.getElementById('pagInicio').style.display = 'none';
  document.getElementById('pagCategorias').style.display = 'none';
  document.getElementById('pagArticulo').style.display = 'block';
  document.getElementById('pagPublicar').style.display = 'none';
}

function MostrarPublicar() {
  document.getElementById('pagInicio').style.display = 'none';
  document.getElementById('pagCategorias').style.display = 'none';
  document.getElementById('pagArticulo').style.display = 'none';
  document.getElementById('pagPublicar').style.display = 'block';
}

function MostrarCategorias() {
  document.getElementById('pagInicio').style.display = 'none';
  document.getElementById('pagCategorias').style.display = 'block';
  document.getElementById('pagArticulo').style.display = 'none';
  document.getElementById('pagPublicar').style.display = 'none';
}

function MostrarLogin() {
  document.getElementById('containerLogin').style.display = 'block';
  document.getElementById('containerRegistro').style.display = 'none';
}

function MostrarRegistro() {
  document.getElementById('containerLogin').style.display = 'none';
  document.getElementById('containerRegistro').style.display = 'block';
}
