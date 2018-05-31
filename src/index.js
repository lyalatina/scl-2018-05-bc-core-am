window.onload = () => {
  //Variables
  let key = document.getElementById('key');
  let ingresarMsj = document.getElementById('ingresarMsj');
  let texcif = document.getElementById('textcif');
  let textdesc = document.getElementById('textdesc');
}
  //Boton Cifrar y su enlace a texto
  const btnCifrar = document.getElementById('btnCifrar').addEventListener('click', function encrypt() {
  const btnDescifrar = document.getElementById('textcif').innerHTML = window.cipher.encode(ingresarMsj.value.toUpperCase(), 
  (offset.value));
})
  //Botón Descifrar y su enlace a texto
  document.getElementById('btnDescifrar').addEventListener('click', function decrypt() {
  document.getElementById('textdesc').innerHTML = window.cipher.decode(ingresarMsj.value.toUpperCase(), 
  (offset.value));
})






  