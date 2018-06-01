window.onload = () => {
  let key = document.getElementById("key");
  let ingresaMsj = document.getElementById("ingresarMsj");
  let textcif = document.getElementById("texCif");
  let textdesc = document.getElementById("texdesc");

  //Botones y texto cifrar
  const btnCifrar = document.getElementById("btnCifrar").addEventListener("click", () => {
  document.getElementById("textcif").innerHTML = window.cipher.encode(ingresarMsj.value.toUpperCase(), //devuele el valor convertido en mayúcula
  (offset.value));
})

  //Botones y texto descifrar
  const btnDescifrar = document.getElementById("btnDescifrar").addEventListener("click", () =>  {
  document.getElementById("textdesc").innerHTML = window.cipher.decode(ingresarMsj.value.toUpperCase(), //devuele el valor convertido en mayúcula
  (offset.value));
})
  }


    
