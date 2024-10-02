//Esta es la fucnion para cambiar el coler de texto
function changeColor(cambioColor){
    const element=document.getElementById("textoColor")
    element.style.color=cambioColor

    const element2=document.getElementById("textoFoco")
    element2.style.color=cambioColor
}

/*Esta funcion cambia el texto del texto funcion inicial */
function cambioParrafo(){
    document.getElementById("parrafo1").innerHTML="Esto es un parrafo que cambia cuando doy click el boton cambio de parrafo.";
}

//Esta fucion muestra una venta de mensaje de alerta
function funcionDeAlerta(){
    window.alert("Este es un mensaje alerta")
}

//Esta funcion obtiene valores de ingresado en el input
function obtenerValores() {
    let x = parseFloat(document.getElementById('n1').value);
    let y = parseFloat(document.getElementById('n2').value);
    return { x, y };
}

//Esta funcion imprime valores en la pantalla
function mostrarResultado(resultado) {
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}


//Funcion de suma de dos valores
function suma() {
    const { x, y } = obtenerValores();
    const resultado = x + y;
    mostrarResultado(resultado);
}

//Funcion de resta de dos valores
function resta(){
    const {x,y}=obtenerValores();
    const resultado=x-y;
    mostrarResultado(resultado);
}

//Funcion de multiplicacion
function multiplicacion(){
    const {x,y}=obtenerValores();
    const resultado=x*y;
    mostrarResultado(resultado);
}

//Funcion de division
function division(){
    const {x,y}=obtenerValores();
    const resultado=x/y;
    mostrarResultado(resultado);
}
