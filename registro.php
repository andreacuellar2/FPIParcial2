<?php
$registro = array();
if ($_POST) {
  if (file_exists('DATA/usuarios.json')) {
    $allUserContent = file_get_contents('DATA/usuarios.json');
    $allUserArray = json_decode($allUserContent, true);
    if (ExisteUsuario($allUserArray,$_POST['nombreUsuario'])) {
      echo "Usuario ya esta registrado";
    } else {
      $registro = array(
        'id' => end($allUserArray)['id']+1,
        'nombre' => $_POST['nombre'],
        'nombreUsuario' => $_POST['nombreUsuario'],
        'descripcion' => $_POST['descripcion'],
        'sexo' => $_POST['sexo'],
        'password' => $_POST['password'],
        'imgProfile' => SubirImagen($_FILES['file'])
      );
      $allUserArray[] = $registro;
      $finalAllUserArray = json_encode($allUserArray);
      file_put_contents('DATA/usuarios.json', $finalAllUserArray);
      header( "Location: login.html" );
      die();
    }

  }else {
    header("Location: registro.php?NoExisteArchivo");
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
				$fileDestination = 'IMG/uploads/'.$fileNameNew;
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
function ExisteUsuario($todos, $suNombre){
  for ($i=0; $i < count($todos); $i++) {
    if ($todos[$i]['nombreUsuario'] == $suNombre) {
      return true;
    }
  }
  return false;
}

?>
<!DOCTYPE html>
<html>
  <head lang="es">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/reset.css">
    <link rel="stylesheet" href="CSS/cssPaginaPrincipal.css">
    <link rel=icon href="IMG/favicon.png" type="image/png">
    <title>Registrate en OLWSPACE</title>
  </head>
  <body class="bodylogin">

    <!-- ////////////////////////// Menu Horizontal /////////////////////////////-->
      <ul class="topnav">
        <li><a id="navInicio" href="index.html">Inicio</a></li>
        <li><a id="navCategorias" href="categorias.html">Categorías</a></li>
        <li><a id="navRegistro" href="login.html" class="right">Login</a></li>
      </ul>
    <!-- ////////////////////////////////////////////////////////////////////////-->
    <header id="header">
      <h1 class="tituloBlog"><b>O W L Space</b></h1></hr>
      <p class="subtema">Bienvenido al espacio para compartir tus ideas</p>
    </header>
    <!-- ////////////////////////////// Registro ////////////////////////////////-->
    <div id="containerRegistro">
      <form method="POST" enctype="multipart/form-data">
        <p id="divLetra">Nueva Cuenta</p><br>
        <label class="loginLe">Nombre: </label>
        <input type="text" class="loginLe" name="nombre" maxlength="50" placeholder="Nombre de Usuario" pattern="[a-zA-Z ]*" title="Por favor no ingrese caracteres no pemitidos (*?¡@¿!|#..)" value="" required>
        <br><br>
        <label class="loginLe">Username: </label>
        <input type="text" class="loginLe" name="nombreUsuario" maxlength="10" placeholder="Username" pattern="[a-zA-Z0-9-_.]*" value="" required>
        <br><br>
        <label class="loginLe">Acerca de ti:</label>
        <textarea  class="loginLe" name="descripcion" placeholder="Pon una descripción sobre ti" cols="20" rows="6"></textarea>
        <br><br>
        <label class="loginLe">Imagen:</label>
        <input type="file" name="file" accept="image/jpeg, image/png">
        <br><br>
        <label class="loginLe">Sexo:</label>
        <select name="sexo" class="loginLe">
          <option value="H">Hombre</option>
          <option value="M">Mujer</option>
        </select>
        <br><br>
        <label class="loginLe" >Contraseña:</label>
        <input type="password" class="loginLe" name="password" placeholder="Contraseña" maxlength="50" value="" required>
        <br><br>
        <input class="btnLeerMas" type="submit" name="btnRegistrarme" value="Registrarme" onclick="index.html"><br>
      </form>
      <br>
      <p id="parrafoLogin">¿Ya tienes una cuenta? <a class="loginLe" href="login.html">Inicia Sesión</a></p>
    </div>
    <!-- ////////////////////////////////////////////////////////////////////////-->
    <div id="footer">
  		<footer id="footer"><h1>Derechos Reservados</h1></footer>
  	</div>

  </body>
</html>
