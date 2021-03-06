window.cipher = {
  //Empieza el cifrado
  encode: (text, key) => {
    let result = "";
    for (let i = 0; i < text.length; i++) { //recorriendo el la longitud del texto ingresado
      //convirtiendo a codigo ascii del texto
      let outputAscii = (text.charCodeAt(i) - 65 + parseInt(key)) % 26 + 65; //devuelve un número entero indicando el valor
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
      result += String.fromCharCode(outputAscii)
    }
    return result;
  }
}
//Termina el descifrado