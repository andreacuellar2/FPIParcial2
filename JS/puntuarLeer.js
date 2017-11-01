function cambiarValueStar(num) {
  document.getElementById('idvalueStar').value = num;
  document.getElementById('formStar').style.display = "none";
  document.getElementById('califica').innerHTML = "Gracias por tu colaboración";
  document.getElementById('btnPuntuar').submit();
}
