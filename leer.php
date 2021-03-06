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
$registroCalificacion = array();
if ($_POST['btnSubmitValor']) {
  if (file_exists('DATA/publicaciones.json')) {
    $todasPubli = file_get_contents('DATA/publicaciones.json');
    $todasPubliArray = json_decode($todasPubli, true);
    if (ExisteID($todasPubliArray,$_POST['id'])) {
      if (ExisteIdUsuario($todasPubliArray,$_POST['idUsuario'])) {
        $varPosicion = Posicion($todasPubliArray,$_POST['id']);
        $registroCalificacion = array(
          'idUsuario' => (int)$_POST['idUsuario'],
          'puntuacion' => (int)$_POST['valueStar']
        );
        $todasPubliArray[$varPosicion]['puntuaciones'][] = $registroCalificacion;

        $finalTodasPubli = json_encode($todasPubliArray);
        file_put_contents('DATA/publicaciones.json', $finalTodasPubli);
        header("Location: leer.php?HaPuntuado".$_POST['idUsuario']);

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
    <li id="navPublicar"><a href="publicar.php">Publicar</a></li>
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
          <div id="puntuacionTotal">
            <label class="descripcionArt" id="puntos">Puntuacion de la publicacion</label>
          </div>
          <div id="estrellas" class="stars">
            <label class="descripcionArt" id="califica">Califica esta publicación:</label><br><br>
            <form method="POST" enctype="multipart/form-data" id="formStar">
              <input type="text" name="valueStar" id="idvalueStar" value="5">
              <input type="text" name="idUsuario" id="idUserLogIn2">
              <input type="image" onclick="cambiarValueStar(1)" name="btnSubmitValor" value="1" src="IMG/estrella.png">
              <input type="image" onclick="cambiarValueStar(2)" name="btnSubmitValor" value="2" src="IMG/estrella.png">
              <input type="image" onclick="cambiarValueStar(3)" name="btnSubmitValor" value="3" src="IMG/estrella.png">
              <input type="image" onclick="cambiarValueStar(4)" name="btnSubmitValor" value="4" src="IMG/estrella.png">
              <input type="image" onclick="cambiarValueStar(5)" name="btnSubmitValor" value="5" src="IMG/estrella.png">
          </div><br>

          <div id="comentar">
            <div id="divParaComentarios">
              <label class="comentarbar" id="tituloComentario">Comentarios:</label><br><br>
              <ol id="comentarios" class="comentariosHechos">
              </ol>
            </div><br>
            <div id="comentando">
              <form method="POST" enctype="multipart/form-data">
                <label class="comentarbar">Déjanos tu comentario:</label>
                <input type="text" name="id" id="idPostChoused">
                <input type="text" name="idUsuario" id="idUserLogIn">
                <input type="text" class="inputComentario" name="comentario" id="comentario" placeholder="Escribe tu comentario...">
                <input type="submit" class="btnComentar" name="comentar" value="Comentar" id="hacerComentario">
              </form>
            </div>
          </div><br>
        </div>
      </div>
      </main>
<!-- ////////////////////////// Menu Derecha //////////////////////////////-->
  		<nav id="right" class="column">
        <img id="headerimg" src="IMG/owl.png" alt="buho"><hr>
        <div id="areaPerfil" class="areaPerfil">
          <input class="btnLeerMas" type="button" value="Mi perfil" onclick="irAPerfil()">
          <input class="btnLeerMas" type="button" value="Publicar" onclick="irAPublicar()"><hr>
        </div>
        <div id="masleidos">
        <br><h3 class="subtemaNav">Más Comentados:</h3><br>
        <div id="listaArticulos">

          <div class="primerArt">
            <label id="masComentado1"></label>
            <img id="imgMasComentado1" src="" class="imgpop" alt="Imagen articulo mas comentado 1">
            <div class="textoPop">
              <h3 id="tituloMasComentado1" class="descripcionPop">Titulo</h3>
              <h4 id="resumenMasComentado1" class="parrafoArtDe">Resumen</h4><br>
              <button class="btnNav" onclick="redireccionTres()">LEER MAS »</button>
            </div>
          </div><br><br>

          <div class="primerArt">
            <label id="masComentado2"></label>
            <img id="imgMasComentado2" src="" class="imgpop" alt="Imagen articulo mas comentado 2">
            <div class="textoPop">
              <h3 id="tituloMasComentado2" class="descripcionPop">Titulo</h3>
              <h4 id="resumenMasComentado2" class="parrafoArtDe">Resumen</h4><br>
              <button class="btnNav" onclick="redireccionCuatro()">LEER MAS »</button>
            </div>
          </div>
        </div>
        </div>
  		</nav>
    </div>

<!-- /////////////////////////////////footer///////////////////////////////////////-->
  	<div class="footer">
  		<footer class="footer"><h1>Derechos Reservados</h1></footer>
  	</div>
    <script type="text/javascript" src="JS/leer.js"></script>
    <script type="text/javascript" src="JS/puntuarLeer.js"></script>
    <script type="text/javascript" src="JS/publicacion.js"></script>
  </body>
</html>
