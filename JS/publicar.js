function generarCategorias() {
  jsonCategorias = <?php
  $allUserContent = file_get_contents('DATA/categorias.json');
  $allUserArray = json_decode($allUserContent, true);
  echo $allUserArray?>;
  var categorias = document.getElementById("selectorCategorias");
  var limite = jsonCategorias.length;
  for (var i = 0; i < limite; i++) {
    var node = document.createElement("OPTION");
    var textnode = document.createTextNode(jsonCategorias[i].nombre);
    node.appendChild(textnode);
    node.value = jsonCategorias[i].id;
    categorias.appendChild(node);
  }
}
