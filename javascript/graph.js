new Morris.Line({
/*Creación de un objeto morris para hacer una gráfica de línea, si quiero que sea de barras pongo Morris.Bar({}), si 
quiero que sea de pie pongo Morris.Donut*/
    element: 'graphResultCalcu', //Aquí pongo el id del elemento donde quiero que se ponga mi gráfica
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
    labels: ['Pepsi', 'Coca Cola'],
    //Aquí pongo el nombre del elemento que quiero que se ponga en el eje vertical de mi gráfica
    resize: 'true',
    //Aquí pongo con true o false si quiero que mi gráfica se adpate al ancho de mi pantalla o no
    labels: ['blue', 'red']
    //Aquí pongo el colo con el que quiero que se pinte cada elemento de mi gráfica
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