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

function variables(){
    const operaciones =["suma", "division", "resta"]
    
    //Agregar valor constante 
    operaciones [0]= "multiplicacion"
    
    //agregar utiliza el push
    operaciones.push("modulo")

    document.getElementById('demoOperacion').innerHTML=operaciones
    console.log(operaciones)
} 

document.addEventListener("DOMContentLoade", variables);

//Funcion suma
function myFunction(p1, p2) {
    return p1 * p2;
  }
  
  let result = myFunction(4, 3);
  document.getElementById("idFuncion").innerHTML = result;

  function suma(x,y){
    return x+y
  }

  let resulSuma=suma(5,5);
  document.getElementById('idSuma').innerHTML=resulSuma;

  //Variable del objeto
  const objetoCelular={
    type:"Movil",
    color:"Negro",
    anio:"2019",
    sistemaOperativo:"Android",
    version:"12",
    ram:"8",
    almacenamiento:"128gb"
  };

  document.getElementById("objTel").innerHTML="Este telefno es tipo "+objetoCelular.type
  +" de color "+objetoCelular.color+" con otras caracterisitcas: "+objetoCelular.sistemaOperativo;
  document.getElementById("objTel2").innerHTML=Object.values(objetoCelular)
  console.log(Object.values(objetoCelular))

  //Varibale objeto con funcion
  const objetoCel2={
    type:"Movil",
    color:"Negro",
    anio:"2019",
    fulltexto: function (){
        return "Telefono tipo "+this.type+" de color "+this.color+" que salió "+ this.anio
    }
  }

  document.getElementById("objTel3").innerHTML=objetoCel2.fulltexto()

  //Variables de Objeto visualizacion
  const lapto={
    type: "Portatil",
    color:"negro",
    ram:"16gb",
    procesador:"i7",
    marca:"Lenovo",
    precio: 1000
  }

  document.getElementById("objVis1").innerHTML=lapto.marca+lapto.precio+lapto.color

  //Mostrar objeto en bucle
    let texto=""
    for (let x in lapto) {
    texto += lapto[x] + " ";
    };
    document.getElementById("objVis2").innerHTML=texto

    //Mostrar el objeto usando Object.values()
    const myArray=Object.values(lapto)
    document.getElementById("objVis3").innerHTML=myArray
    
    //Mostrar objeto tipo json
    document.getElementById("objVis4").innerHTML=JSON.stringify(lapto)
    console.log(lapto)

    //Variables para el constructor
    function Telefono(marca, anio, color, almacenamiento){
        this.nombreMarca=marca,
        this.telAnio=anio,
        this.telColor=color,
        this.telAlmacenamiento=almacenamiento
    }

    //Objeto credado
    const myTelefono= new Telefono("<b>Samsung 23</b>", 2023, "<b>Blanco</b>","256gb")
    
    //Mostrar datos del telefono
    document.getElementById("objConst1").innerHTML="La marca del tefelono es "+myTelefono.nombreMarca+ " de color "+myTelefono.telColor;