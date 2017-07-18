function convertirFaC() {
  var fahrenheit = document.getElementById('fahrenheit').value;
  var celsius=(fahrenheit - 32)/1.8;
  document.getElementById('celsius').innerHTML= celsius.toFixed(2);
}

function convertirCaF() {
  var celsius = document.getElementById('celsius2').value;
  var fahrenheit = celsius * 1.8 + 32;
  document.getElementById('fahrenheit2').innerHTML= fahrenheit.toFixed(2);
}
