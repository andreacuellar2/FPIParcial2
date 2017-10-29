function MostrarInicio() {
  document.getElementById('pagInicio').style.display = 'none';
  document.getElementById('pagCategorias').style.display = 'block';
  document.getElementById('pagArticulo').style.display = 'block';
  document.getElementById('pagPublicar').style.display = 'block';
}

function MostrarArticulo() {
  document.getElementById('pagInicio').style.display = 'block';
  document.getElementById('pagCategorias').style.display = 'block';
  document.getElementById('pagArticulo').style.display = 'none';
  document.getElementById('pagPublicar').style.display = 'block';
}

function MostrarPublicar() {
  document.getElementById('pagInicio').style.display = 'block';
  document.getElementById('pagCategorias').style.display = 'block';
  document.getElementById('pagArticulo').style.display = 'block';
  document.getElementById('pagPublicar').style.display = 'none';
}

function MostrarCategorias() {
  document.getElementById('pagInicio').style.display = 'block';
  document.getElementById('pagCategorias').style.display = 'none';
  document.getElementById('pagArticulo').style.display = 'block';
  document.getElementById('pagPublicar').style.display = 'block';
}
