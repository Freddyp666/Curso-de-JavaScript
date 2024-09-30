function changeColor(cambioColor){
    const element=document.getElementById("textoColor")
    element.style.color=cambioColor

    const element2=document.getElementById("textoFoco")
    element2.style.color=cambioColor
}

function cambioParrafo(){
    document.getElementById("parrafo1").innerHTML="Esto es un parrafo que cambia cuando doy click el boton cambio de parrafo.";
}

function funcionDeAlerta(){
    window.alert("Este es un mensaje alerta")
}

function suma(x,y){
    let x, y
    return x+y
}