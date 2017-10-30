<?php
$registro = array();
if ($_POST) {
  if (file_exists('usuarios.json')) {
    $allUserContent = file_get_contents('usuarios.json');
    $allUserArray = json_decode($allUserContent, true);
    $registro = array(
      'id' => count($allUserArray)+1,
      'nombre' => $_POST['nombre'],
      'nombreUsuario' => $_POST['nombreUsuario'],
      'descripcion' => $_POST['descripcion'],
      'sexo' => $_POST['sexo'],
      'password' => $_POST['password'],
      'imgProfile' => SubirImagen($_FILES['file'])
    );
    $allUserArray[] = $registro;
    $finalAllUserArray = json_encode($allUserArray);
    file_put_contents('usuarios.json', $finalAllUserArray);
  }else {
    header("Location: RegistrandoConPHP.php?NoExisteArchivo");
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
			if ($fileSize < 500000) {
				$fileNameNew = uniqid('', true).".".$fileActualExt;
				$fileDestination = 'IMG/uploads/'.$fileNameNew;
				move_uploaded_file($fileTmpName, $fileDestination);
				header("Location: RegistrandoConPHP.php?uploadsuccess");
			} else {
				echo "Your file is too big!";
			}
		} else {
			echo "There was an error uploading your file!";
		}
	} else {
		echo "You cannot upload files of this type!";
	}
  return $fileNameNew;
}

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Registrando</title>
  </head>
  <body>

    <form method="POST" enctype="multipart/form-data">
      <h1>Crear Cuenta</h1>
      <label>Nombre: </label>
      <input type="text" name="nombre" value="" required>
      <br>
      <label>Usuario: </label>
      <input type="text" name="nombreUsuario" value="" required>
      <br>
      <label>Descripcion: </label>
      <textarea name="descripcion" rows="8" cols="80"></textarea>
      <br>
      <label>Imagen de Perfil</label>
      <input type="file" name="file" accept="image/jpeg, image/png">
      <label>Sexo: </label>
      <select name="sexo">
        <option value="H">Hombre</option>
        <option value="M">Mujer</option>
      </select>
      <br>
      <label>Constraseña: </label>
      <input type="password" name="password" value="" required>
      <br>
      <input type="submit" value="Registrarme">
    </form>

  </body>
</html>
