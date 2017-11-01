<?php
$registroComentario = array();
if ($_POST['comentar']) {
  if (file_exists('DATA/publicaciones.json')) {
    $todasPubli = file_get_contents('DATA/publicaciones.json');
    $todasPubliArray = json_decode($todasPubli, true);
    if (ExisteID($todasPubliArray,$_POST['id'])) {
      if (ExisteIdUsuario($todasPubliArray,$_POST['idUsuario'])) {
        $varPosicion = Posicion($todasPubliArray,$_POST['id']);
        $registroComentario = array(
          'idUsuario' => (int)$_POST['idUsuario'],
          'comentario' => $_POST['comentario']
        );
        $todasPubliArray[$varPosicion]['comentarios'][] = $registroComentario;

        $finalTodasPubli = json_encode($todasPubliArray);
        file_put_contents('DATA/publicaciones.json', $finalTodasPubli);
        header("Location: leer.php?HaComentado");

      } else {
        header("Location: leer.php?NoExisteElIDUsuario");
      }
    }else {
      header("Location: leer.php?NoExisteElIDPublicacion");
    }
  }else {
    header("Location: leer.php?NoExisteArchivo");
  }

}
function ExisteID($todos, $suID){
  for ($i=0; $i < count($todos); $i++) {
    if ($todos[$i]['id'] == $suID) {
      return true;
    }
  }
  return false;
}
function ExisteIdUsuario($todos, $suID){
  for ($i=0; $i < count($todos); $i++) {
    if ($todos[$i]['idUsuario'] == $suID) {
      return true;
    }
  }
  return false;
}
function Posicion($todos, $suID){
  for ($i=0; $i < count($todos); $i++) {
    if ($todos[$i]['id'] == $suID) {
      return $i;
    }
  }
  return 0;
}
?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/reset.css">
    <link rel="stylesheet" href="CSS/cssPaginaPrincipal.css">
    <link rel=icon href="IMG/favicon.png" type="image/png">
    <title>O W L S P A C E</title>
  </head>
  <body onload="pubRequestJSON();TopNavSesion();formImplicito();">
<!-- ////////////////////////// Menu Horizontal /////////////////////////////-->
  <ul class="topnav">
    <li id="navInicio"><a href="index.html">Inicio</a></li>
    <li id="navCategorias"><a href="categorias.html">Categorías</a></li>
    <li id="navLogin"><a href="login.html">Login</a></li>
    <li id="navRegistro"><a href="registro.php">Registro</a></li>
    <li id="navPerfil"><a href="perfil.html">Mi Perfil</a></li>
    <li id="navPublicar"><a href="publicar.html">Publicar</a></li>
    <li  id="navLogout"><a onclick="LogOut()">Logout</a></li>
  </ul>
<!-- //////////////////////////Header//////////////////////////////////////////////-->
  <header id="header">
    <h1 class="tituloBlog"><b>O W L Space</b></h1>
      <p class="subtema">Bienvenido al espacio para compartir tus ideas</p>
  </header>
<!-- //////////////////////////Leer//////////////////////////////////////////////-->
	<div id="contenedorPrincipal">
    <main id="center" class="column">

      <div id="pagArticulo">
        <h1 id="nombreArticulo" class="subtema">Nombre Articulo</h1><br><hr>
        <input type="button" id="autorArticulo" class="descripcionArt" onclick="haciaPerfil()" value="Autor del articulo"><hr>
        <div id="entrada1">
          <img src="" id="imgArticulo" class="imgPrimera" alt="Imagen de la publicacion">
          <div class="contenedor">
            <h3 id="fechaArticulo" class="descripcionArt">Fecha de la publicacion</h3><br>
            <textarea id="contenidoArticulo" class="parrafoArtDe" cols="155" rows="40" disabled>Contenido de la Publicacion</textarea><br>
            <br>
            <p id="numeroComentarios" class="comentarios"><b>Numero de Comentarios</b></p>
          </div><br>

          <div id="estrellas" class="stars">
            <label class="descripcionArt" id="califica">Califica esta publicación:</label>
            <a data-value="1" title="Votar con 1 estrellas">&#9733;</a>
            <a data-value="2" title="Votar con 2 estrellas">&#9733;</a>
            <a data-value="3" title="Votar con 3 estrellas">&#9733;</a>
            <a data-value="4" title="Votar con 4 estrellas">&#9733;</a>
            <a data-value="5" title="Votar con 5 estrellas">&#9733;</a>
          </div><br>

          <div id="comentar">
            <div id="divParaComentarios">
              <label class="comentarbar">Comentarios:</label><br><br>
              <ol id="comentarios">
              </ol>
            </div><br>
            <div id="comentando">
              <form method="POST" enctype="multipart/form-data">
                <label class="comentarbar">Déjanos tu comentario:</label>
                <input type="text" name="id" id="idPostChoused">
                <input type="text" name="idUsuario" id="idUserLogIn">
                <input type="text" class="inputComentario" name="comentario" id="comentario" placeholder="Escribe tu comentario..."><br><br>
                <input type="submit" class="btnComentar" name="comentar" value="Comentar" id="hacerComentario">
              </form>
            </div>
          </div><br>
        </div>
      </div>

      </main>
<!-- /////////////////////////// Menu Derecha ///////////////////////////////-->
    <nav id="right" class="column">
      <img id="headerimg" src="IMG/owl.png" alt="buho"><hr>
      <div id="areaPerfil" class="areaPerfil">
        <input class="btnLeerMas" type="button" value="Mi perfil" onclick="irAPerfil()">
        <input class="btnLeerMas" type="button" value="Publicar" onclick="irAPublicar()"><hr>
      </div>
      <div id="masleidos">
      <br><h3 class="subtemaNav">Más leídos:</h3><br>
      <ul id="listaArticulos">
        <li class="primerArt">
          <img src="IMG/pop1.jpg" class="imgpop" alt="flor">
          <div class="textoPop">
            <h3 class="descripcionPop">Flores</h3>
            <h4 class="parrafoArtDe">Flores más bonitas de América</h4><br>
            <div class="botonesArt">
            <p><button class="btnNav"><b>LEER MAS »</b></button></p>
            </div>
          </div>
        </li>
        <li class="segundoArt">
          <img src="IMG/animales.jpg" class="imgpop" alt="animales">
          <div class="textoPop">
          <h3 class="descripcionPop">Animales</h3>
          <h4 class="parrafoArtDe">Animales más bonitos de América</h4><br>
          <div class="botonesArt">
          <p><button class="btnNav"><b>LEER MAS »</b></button></p>
          </div>
          </div>
        </li>
      </ul>
        </div>
        </nav>
    </div>

<!-- /////////////////////////////////footer///////////////////////////////////////-->
  	<div class="footer">
  		<footer class="footer"><h1>Derechos Reservados</h1></footer>
  	</div>
    <script type="text/javascript" src="JS/leer.js"></script>
    <script type="text/javascript" src="JS/publicacion.js"></script>
  </body>
</html>
