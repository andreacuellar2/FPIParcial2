<?php
$registro = array();
if ($_POST) {
  if (file_exists('usuarios.json')) {
    $allUserContent = file_get_contents('usuarios.json');
    $allUserArray = json_decode($allUserContent, true);
    $registro = array(
      'id' => count($allUserArray+1),
      'nombre' => $_POST['nombre'],
      'nombreUsuario' => $_POST['nombreUsuario'],
      'descripcion' => $_POST['descripcion'],
      'sexo' => $_POST['sexo'],
      'password' => $_POST['password']
    );
    $allUserArray[] = $registro;
    $finalAllUserArray = json_encode($allUserArray);
    file_put_contents('usuarios.json', $finalAllUserArray);
  }
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Registrando</title>
  </head>
  <body>

    <form method="POST">
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
