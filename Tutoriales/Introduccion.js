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

function obtenerValores() {
    let x = parseFloat(document.getElementById('n1').value);
    let y = parseFloat(document.getElementById('n2').value);
    return { x, y };
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

function suma() {
    const { x, y } = obtenerValores();
    const resultado = x + y;
    mostrarResultado(resultado);
}

function resta(){
    const {x,y}=obtenerValores();
    const resultado=x-y;
    mostrarResultado(resultado);
}

function multiplicacion(){
    const {x,y}=obtenerValores();
    const resultado=x*y;
    mostrarResultado(resultado);
}

function division(){
    const {x,y}=obtenerValores();
    const resultado=x/y;
    mostrarResultado(resultado);
}
