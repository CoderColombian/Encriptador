function validar(){
    let textArea = document.querySelector(".input-padron").value;
    if(textArea=="") alert("no hay nada");
    if (/[^a-z !]/.test(textArea))
    return alert(`Solo se admiten letras en minúscula y espacios`);
}

function showLatOut(){   
    document.getElementById("lateral").style.display = "none";
    document.getElementById("cajaTextLat").style.display = "block";
}

function encriptar(){
    validar();
    let mensaje = document.querySelector(".input-padron").value;
    let textoResultado = document.querySelector(".texto-resultado");
    let rod="";
    for(var i = 0; i < mensaje.length; i++){
        if(mensaje[i]=="a") rod+="ai";
              
        else if (mensaje[i]=="e") rod+="enter";
           
        else if (mensaje[i]=="i") rod+="imes";
        
        else if (mensaje[i]=="o") rod+="ober";
        
        else if (mensaje[i]=="u") rod+="ufat";
    
        else{rod+=mensaje[i];}
    }
    showLatOut();
    textoResultado.innerHTML = rod;
} 

function desencriptar() {
    validar();
    let textArea = document.querySelector(".input-padron").value;
    let textoResultado = document.querySelector(".texto-resultado");
  
    textArea = textArea
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
  
    showLatOut();
    textoResultado.innerHTML = textArea;
    
  }

  function showLatIn(){
    document.getElementById("lateral").style.display = "block";
    document.getElementById("cajaTextLat").style.display = "none";
  }

  function copiar(){
    document.querySelector(".input-padron").value = "";
    const clipboard = document.querySelector(".texto-resultado").innerHTML;
    navigator.clipboard.writeText(clipboard);
    let mensajeDeCopia = document.querySelector(".texto-resultado");
    mensajeDeCopia.innerHTML =
      "Su texto ha sido copiado en el portapapeles &#128504";
    setTimeout(showLatIn , 2000);
  }

  
  
  