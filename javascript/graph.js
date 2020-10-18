//Si quiero luego manipular lo que haya dentro de mi gráfica, al objeto morris lo debo guardar en una variable
let resultadoLineas = new Morris.Line({
/*Creación de un objeto morris para hacer una gráfica de línea, si quiero que sea de barras pongo Morris.Bar({}), si 
quiero que sea de pie pongo Morris.Donut*/

    element: 'resultCalcu', //Aquí pongo el id del elemento donde quiero que se ponga mi gráfica
    //Entre todas las propiedades se ponen comas
    data: [
        { year: '2000', value: 2 , elValor2: '1'},
        { year: '2001', value: 10 , elValor2: '3'},
        { year: '2002', value: 5 , elValor2: '6'},
        { year: '2003', value: 5 , elValor2: '9'},
        { year: '2004', value: 3 , elValor2: '1'},
        { year: '2005', value: 10 , elValor2: '1'},
        { year: '2006', value: 5 , elValor2: '1'},
        { year: '2007', value: 5 , elValor2: '9'},
        { year: '2008', value: 7 , elValor2: '100'},
        { year: '2009', value: 9 , elValor2: '2'},
        { year: '2010', value: 5 , elValor2: '5'},
        { year: '2011', value: 1 , elValor2: '2'},
        { year: '2012', value: 200 , elValor2: '1'},
        { year: '2013', value: 10 , elValor2: '5'},
        { year: '2014', value: 150 , elValor2: '7'},
        { year: '2015', value: 5 , elValor2: '90'},
        { year: '2016', value: 1 , elValor2: '156'},
        { year: '2017', value: 20 , elValor2: '1'},
        { year: '2018', value: 5 , elValor2: '5'},
        { year: '2019', value: 5 , elValor2: '9'},
        { year: '2020', value: 50 , elValor2: '1'}
    ], 
    /*Aquí pongo la variable donde esté almacenada la data que quiero graficar, debe ser un array y puede ser del 
    tamaño que sea los valores del eje y, pero en el eje x debe haber un mismo valor para los otros del eje horizontal*/
    xkey: 'year',
    //Aquí pongo el nombre del elemento en mi array que quiero que se ponga en el eje horizontal de mi gráfica
    ykeys: ['value', 'elValor2'],
    //ykey: 'value',
    /*Aquí pongo el nombre del elemento en mi array que quiero que se ponga en el eje vertical de mi gráfica, o si son 
    2 valores como en este ejemplo, vamos a usar ykeys: [], en vez de ykey: */
    labels: ['Saldo vigente al mes', 'Variación de saldo'],
    //Aquí pongo el nombre del elemento que quiero que se ponga en el eje vertical de mi gráfica
    resize: 'true',
    //Aquí pongo con true o false si quiero que mi gráfica se adpate al ancho de mi pantalla o no
    lineColors: ['#15e6bc', '#fd004b'],
    //Aquí pongo el color con el que quiero que se pinte cada elemento de mi gráfica
    lineWidth: 1
    //Con esto le digo a mi gráfica que quiero que la línea sea delgada
});



/*Para que podamos cargar la data dinámicamente en el morris apretando un botón con una respectiva id, para ello ya debo 
tener creado un botón con una id en el HTML, en este caso es un input con una id = mandar_datos*/

//PRIMERO HAGO LA GRÁFICA (QUE ES UN OBJETO MORRIS.JS) Y LA GUARDO EN UNA VARIABLE
let resultadoBarras = new Morris.Bar({
/*Creación de un objeto morris para hacer una gráfica de línea, si quiero que sea de barras pongo Morris.Bar({}), si 
quiero que sea de pie pongo Morris.Donut*/
    element: 'resultCalcu2', //Aquí pongo el id del elemento donde quiero que se ponga mi gráfica
    //Entre todas las propiedades se ponen comas
    data: [
        { año: '2000', valor1: 2 , valor2: '1'},
        { año: '2001', valor1: 10 , valor2: '3'},
        { año: '2002', valor1: 5 , valor2: '6'},
        { año: '2003', valor1: 5 , valor2: '9'},
        { año: '2004', valor1: 3 , valor2: '1'},
        { año: '2005', valor1: 10 , valor2: '1'},
        { año: '2006', valor1: 5 , valor2: '1'},
        { año: '2007', valor1: 5 , valor2: '9'},
        { año: '2008', valor1: 7 , valor2: '100'},
        { año: '2009', valor1: 9 , valor2: '2'},
        { año: '2010', valor1: 5 , valor2: '5'},
        { año: '2011', valor1: 1 , valor2: '2'},
        { año: '2012', valor1: 200 , valor2: '1'},
        { año: '2013', valor1: 10 , valor2: '5'},
        { año: '2014', valor1: 150 , valor2: '7'},
        { año: '2015', valor1: 5 , valor2: '90'},
        { año: '2016', valor1: 1 , valor2: '156'},
        { año: '2017', valor1: 20 , valor2: '1'},
        { año: '2018', valor1: 5 , valor2: '5'},
        { año: '2019', valor1: 5 , valor2: '9'},
        { año: '2020', valor1: 50 , valor2: '1'}
    ], 
    /*Aquí pongo la variable donde esté almacenada la data que quiero graficar, debe ser un array y puede ser del 
    tamaño que sea los valores del eje y, pero en el eje x debe haber un mismo valor para los otros del eje horizontal*/
    xkey: 'año',
    //Aquí pongo el nombre del elemento en mi array que quiero que se ponga en el eje horizontal de mi gráfica
    ykeys: ['valor1', 'valor2'],
    //ykey: 'value',
    /*Aquí pongo el nombre del elemento en mi array que quiero que se ponga en el eje vertical de mi gráfica, o si son 
    2 valores como en este ejemplo, vamos a usar ykeys: [], en vez de ykey: */
    labels: ['numero de PIBS', 'numero de perritous'],
    //Aquí pongo el nombre del elemento que quiero que se ponga en el eje vertical de mi gráfica
    resize: 'true',
    //Aquí pongo con true o false si quiero que mi gráfica se adpate al ancho de mi pantalla o no
    barColors: ['red', 'lightgray'],
    //Aquí pongo el color con el que quiero que se pinte cada elemento de mi gráfica
});



// COMO ESTOY USANDO JQUERY PARA UTILIZAR LA LIBRERÍA MORRIS, PUEDO HACER USO DE UN ELEMENTO SUYO PARA CHECAR EL BOTÓN
$("#mandar_datos").on("click", function() {
/*Uso el signo de pesos para llamar un elemento con una id dentro del paréntesis, pongo # y el nombre del id del elemento 
que quiero usar como botón, lo que está dentro de la función se va a ejecutar cuando yo dé clic en ese elemento*/
    console.log('boton presionado');
    console.log(resultadoBarras);
    //Enseño en consola mi obeto morris con el que voy a cambiar el contenido de la gráfica

    var nuevaDataBarras = [
        {año: '2012', valor1: 100.5, valor2: 757.1},
        {año: '2013', valor1: 567.1, valor2: 671.2},
        {año: '2014', valor1: 789.3, valor2: 745.4},
        {año: '2015', valor1: 609.5, valor2: 785.2},
        {año: '2016', valor1: 893.1, valor2: 862.9},
        {año: '2017', valor1: 809.1, valor2: 253.1},
        {año: '2018', valor1: 1010.7, valor2: 286.5}
    ]; 
    /*Creo un nuevo array donde declaro la nueva data que quiero meter al programa, los nombres de cada elemento en 
    este array se debe llamar igual que el de arriba para que se pueda actualizar la data*/

    resultadoBarras.setData(nuevaDataBarras);
    /*Para hacer referencia a la gráfica que quiero acceder, debo usar el objeto morris, que es la gráfica como tal 
    recordemos que el objeto lo habíamos guardado en una variable llamada resultadoBarras y usaremos el método setData 
    que es una función de la librería de Morris.js para mandar datos a una gráfica*/
});


//FUNCIÓN PARA DESPLEGAR MENÚ RESPONSIVO
function displayMenuMobile(){ 
    var click = document.getElementById("navbarMenu").style.display;
    if(click == "none"){
        document.getElementById("navbarMenu").style.display= "block";
        document.getElementById("navbarMenu").style.top= "100%";
        document.getElementById("navbarMenu").style.left= "60%";
        document.getElementById("navbarMenu").style.width= "37vw";
        document.getElementById("navbarMenu").style.height= "50vh";
        document.getElementById("navbarMenu").style.zIndex= "5";
        document.getElementById("menuButton1").style.width= "98%";
        var botones = document.getElementsByClassName("menuButton2");
        for (let i = 0; i < botones.length; i++) {
            botones[i].style.width ="100%";
        }
    } else{
        document.getElementById("navbarMenu").style.display= "none";
    }
}

var operacionNegrou = '';
var operacionUsuario = '';
var operacionCounter = '';

function borrar(){
    operacionNegrou = '';
    operacionUsuario = '';
    console.log("operacionNegrou = " + operacionNegrou + ", operacionUsuario = " + operacionUsuario);
    operacionCounter = 0;
}

$('#BD').change(function(){
    var indicador_id = $(this).val();
    console.log(indicador_id);
    operacionNegrou += indicador_id;
    operacionCounter++;
    
    if(operacionCounter > 2){
        $('#resultGraph').toggle();
        operacionNegrou = '';
        operacionUsuario = '';
        operacionCounter = 0;
    }
    document.getElementsByName("operacionEnProceso")[0].value = operacionUsuario;
});

$('#BD').change(function(){
    var nombreKPI = $("#BD option:selected").html();
    console.log(nombreKPI);
    operacionUsuario += nombreKPI + " ";
});

$('#estadoMX').change(function(){
    var estadoMexNegrou = $(this).val();
    console.log(estadoMexNegrou);
});

$("#division").on("click", function(){
    operacionNegrou += " / ";
    operacionUsuario += " / ";
    console.log("operacionNegrou = " + operacionNegrou + ", operacionUsuario = " + operacionUsuario);
    document.getElementsByName("operacionEnProceso")[0].value = operacionUsuario;
});
$("#multiplicacion").on("click", function(){
    operacionNegrou += " * ";
    operacionUsuario += " * ";
    console.log("operacionNegrou = " + operacionNegrou + ", operacionUsuario = " + operacionUsuario);
    document.getElementsByName("operacionEnProceso")[0].value = operacionUsuario;
});
$("#resta").on("click", function(){
    operacionNegrou += " - ";
    operacionUsuario += " - ";
    console.log("operacionNegrou = " + operacionNegrou + ", operacionUsuario = " + operacionUsuario);
    document.getElementsByName("operacionEnProceso")[0].value = operacionUsuario;
});
$("#suma").on("click", function(){
    operacionNegrou += " + ";
    operacionUsuario += " + ";
    console.log("operacionNegrou = " + operacionNegrou + ", operacionUsuario = " + operacionUsuario);
    document.getElementsByName("operacionEnProceso")[0].value = operacionUsuario;
});

$("#mandar_datos").on("click", function() {
    /*Uso el signo de pesos para llamar un elemento con una id dentro del paréntesis, pongo # y el nombre del id del 
    elemento que quiero usar como botón, lo que está dentro de la función se va a ejecutar cuando yo dé clic en ese 
    elemento*/
    console.log('boton presionado');
    console.log(resultadoLineas);
    //Enseño en consola mi obeto morris con el que voy a cambiar el contenido de la gráfica

    var nuevaDataLineas = [
        {year: '2012', value: 100.5, elValor2: 757.1},
        {year: '2013', value: 567.1, elValor2: 671.2},
        {year: '2014', value: 789.3, elValor2: 745.4},
        {year: '2015', value: 609.5, elValor2: 785.2},
        {year: '2016', value: 893.1, elValor2: 862.9},
        {year: '2017', value: 809.1, elValor2: 253.1},
        {year: '2018', value: 1010.7, elValor2: 286.5}
    ]; 
    /*Creo un nuevo array donde declaro la nueva data que quiero meter al programa, los nombres de cada elemento en 
    este array se debe llamar igual que el de arriba para que se pueda actualizar la data*/

    resultadoLineas.setData(nuevaDataLineas);
    /*Para hacer referencia a la gráfica que quiero acceder, debo usar el objeto morris, que es la gráfica como tal 
    recordemos que el objeto lo habíamos guardado en una variable llamada resultadoBarras y usaremos el método setData 
    que es una función de la librería de Morris.js para mandar datos a una gráfica*/
    document.getElementsByName("operacionEnProceso")[0].value = operacionUsuario;
});
//NO PUEDO PONER DOS GRÁFICAS DIFERENTES EN EL MISMO ELEMENTO HTML