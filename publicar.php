<?php
$regPublicacion = array();
if ($_POST) {
  if (file_exists('DATA/publicaciones.json')) {
    $todasPubli = file_get_contents('DATA/publicaciones.json');
    $todasPubliArray = json_decode($todasPubli, true);
    $regPublicacion = array(
      'id' => end($todasPubliArray)['id']+1,
      'idUsuario' => (int)$_POST['idUsuario'],
      'titulo' => $_POST['titulo'],
      'contenido' => $_POST['contenido'],
      'idCategoria' => (int)$_POST['idCategoria'],
      'imgSrc' => SubirImagen($_FILES['file']),
      'comentarios' => array(),
      'fecha' => date("Y-m-d"),
      'puntuacion' => 0
    );
    $todasPubliArray[] = $regPublicacion;
    $finalTodadPubli = json_encode($todasPubliArray);
    file_put_contents('DATA/publicaciones.json', $finalTodadPubli);
    header( "Location: perfil.html" );
    die();
  }else {
    header("Location: publicar.php?NoExisteArchivo");
  }
}
function SubirImagen($file){
	$fileName = $file['name'];
	$fileTmpName = $file['tmp_name'];
	$fileSize = $file['size'];
	$fileError = $file['error'];
	$fileType = $file['type'];

	$fileExt = explode('.', $fileName);
	$fileActualExt = strtolower(end($fileExt));

	$allowed = array('jpg', 'jpeg', 'png');

	if (in_array($fileActualExt, $allowed)) {
		if ($fileError === 0) {
			if ($fileSize < 2000000) {
				$fileNameNew = uniqid('', true).".".$fileActualExt;
				$fileDestination = 'IMG/publicaciones/'.$fileNameNew;
				move_uploaded_file($fileTmpName, $fileDestination);
			} else {
				echo "Archivo muy grande";
			}
		} else {
			echo "Ha ocurrido un error";
		}
	} else {
		echo "Extension invalida";
	}
  return $fileNameNew;
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
  <body onload="CargarCategorias(); ValidarSesion();">
<!-- ////////////////////////// Menu Horizontal /////////////////////////////-->
  <ul class="topnav">
    <li><a id="navInicio" href="index.html">Inicio</a></li>
    <li><a id="navCategorias" href="categorias.html">Categorías</a></li>
    <li><a id="navRegistro" href="perfil.html">Mi Perfil</a></li>
    <li><a id="navCategorias" href="publicar.html" class="activo">Publicar</a></li>
    <li><a id="navCategorias" href="#">Logout</a></li>
  </ul>
<!-- //////////////////////////Header//////////////////////////////////////////////-->
    <header id="header">
      <h1 class="tituloBlog"><b>O W L Space</b></h1></hr>
        <p class="subtema">Bienvenido al espacio para compartir tus ideas</p>
    </header>

<!-- //////////////////////////// Publicar //////////////////////////////-->
  	<div id="contenedorPrincipal">
      <main id="center" class="column">
        <h1 class="subtema">Escribe tu artículo</h1><br><br>
        <div class="pagPublicar" id="pagPublicar">
          <form id="formPost" method="POST" enctype="multipart/form-data">
            <input type="text" name="idUsuario" id="idUserLogIn">
            <br>
            <label class="loginLe">Título: </label>
            <input name="titulo" class="loginLe" type="text" placeholder="Título del artículo" maxlength="25" required>
            <br><br>
            <label class="loginLe">Cuerpo: </label>
            <textarea name="contenido" class="loginLe" name="contenido" placeholder="Ingresa aquí el contenido" cols="50" rows="10" minlength="20" required></textarea>
            <br><br>
            <label class="loginLe">Categoría:</label>
            <select class="loginLe" id="selectorCategorias" name="idCategoria">
              <!--Generar las categorias con appendChild-->
            </select><br><br>
            <label class="loginLe">Agregar imagen:</label>
            <input class="loginLe" type="file" name="file" accept="image/jpeg, image/png">
            <br>
            <input class="btnLeerMas" type="submit" id="btnPublicar" value="Publicar">
        </form>
      </main>
<!-- ////////////////////////// Menu Derecha //////////////////////////////-->
<nav id="right" class="column">
  <img id="headerimg" src="IMG/owl.png" alt="buho"><hr></hr>
  <div id="areaPerfil" class="areaPerfil">
    <a href="perfil.html"><input class="btnLeerMas" type="button" value="Mi perfil"></a>
    <a href="publicar.html"><input class="btnLeerMas" type="button" value="Publicar"></a><hr></hr>
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
    </li><br><br>
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
</div>

<!-- /////////////////////////////////footer///////////////////////////////////////-->
  <div id="footer">
  <footer id="footer"><h1>Derechos Reservados</h1></footer>
  </div>
<!--<span class="has-popup">Ver el contenido<span class="popup">Éste es el contenido</span></span>-->
<script type="text/javascript" src="JS/publicar.js"></script>
  </body>
</html>
