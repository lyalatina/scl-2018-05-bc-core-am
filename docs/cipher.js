window.cipher = {
  //Empieza el cifrado
  encode: (text, key) => {
    let result = "";
    for (let i = 0; i < text.length; i++)  { //recorriendo el la longitud del texto ingresado
      //convirtiendo a codigo ascii del texto
      let outputAscii = (text.charCodeAt(i) - 65 + parseInt(key)) % 26 + 65; //devuelve número entero a raiz 
      result += String.fromCharCode(outputAscii) //convirtiendo a letras
    }  
    return result;
  },
//Termina el cifrado

//Comienza el descifrado
  decode: (text, key) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
    let outputAscii = (text.charCodeAt(i) + 65 - parseInt(key)) % 26 + 65;
    if (text.charCodeAt(i) !== undefined) {
  }
    result += String.fromCharCode(outputAscii)
  }
    return result;
  }
}
  //Termina el descifrado


  