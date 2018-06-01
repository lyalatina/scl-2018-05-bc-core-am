window.cipher = {
  //Empieza el cifrado
  encode: (text, key) => {
    let result = "";
    for (let i = 0; i < text.length; i++)  { //recorriendo el texto ingresado
      let outputAscii = (text.charCodeAt(i) - 65 + parseInt(key)) % 26 + 65; 
      if (text.charCodeAt(i) === 32 ) {
        
      outputAscii = "";
      result += "";
    }
      result += String.fromCharCode(outputAscii)
    }  
    return result;
  },
//Termina el cifrado

//Comienza el descifrado
  decode: (text, key) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
    let outputAscii = (text.charCodeAt(i) + 65 - parseInt(key)) % 26 + 65;
    if (text.charCodeAt(i) === 32 ) {

    outputAscii = "";
    result += "";
  }
    result += String.fromCharCode(outputAscii)
  }
    return result;
  }
}
  //Termina el descifrado


  