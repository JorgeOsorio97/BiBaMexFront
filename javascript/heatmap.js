//INICIA HEATMAP, QUE EN REALIDAD SE LLAMA COROPLETH MAP
/* Esto se usa para ver que hemos importado correctamente las librerías d3.js y topojson para el mapa
console.log(d3);
console.log(topojson);
*/
let statesURL = 'https://gist.githubusercontent.com/diegovalle/10487038/raw/e7e6d9db45129dca85d4142860fe15a75aea1f58/national.json';
console.log(statesURL);
let backendHackathon2020URL = {
    fips: 797010,
    estado: "rox",
    municipio: "municipio",
    valor_principal: 0.5,
    otros_valores: [
            {
                nombre: "TC",
                valor: 5,
            },
            {
                nombre: "PIB",
                valor: 3,
            },
        ],
    };

let stateData;
let backendHackathon2020Data;

let canvas = d3.select('#canvas');//Esto se usa para seleccionar el elemento que tenga el id canvas

let drawMap = () => { //Con esta arrow function vamos a dibujar el mapa
    canvas.selectAll('path')//Con canvas.selectAll estoy manipulando el elemento HTML que tiene esa misma clase o id
    //en el parámetro pongo path porque es la parte del elemento svg que quiero jalar de mi json
            .data(stateData)//Con esto hago que d3.js analice todos los elementos de la variable donde está el json
            .enter()//Con esta línea de código hago que se recorra individualmente cada parte del json
            .append('path')//Si no existe un path en el elemento de HTML con el id canvas, voy a agregar un path svg
            .attr('d', d3.geoPath())
            /*d es un parámetro de la etiqueta svg que fija coordenadas o líneas para dibujar los paths, todo esto 
            es lo que viene en el topojson que convertimos o convertiremos en geojson. El método d3.geoPath sirve 
            para convertir las coordenadas del geojson en un String que se le puede dar al atributo d de la 
            etiqueta svg*/
            .attr('class', 'state')//Aquí estoy cambiando la clase de mi elemento a una llamada state
            .attr('fill', '#16393A');//Aquí estoy cambiando la clase de mi elemento a una llamada state
}

d3.json(statesURL).then( //Esto es una promesa que se usa para importar los datos de la url que yo le diga
    (data, error) =>{ //Esto sirve para que tome la data de la URL que le dí y el posible error
        if(error){
            console.log(log);
        }else{
            //Guardo en la variable stateData que cree arriba el contenido de la URL
            /*Usamos el método topojson.feature() para convertir objetos topojson en objetos geojson que son los 
            que puede leer la librería d3.js, a este le debo dar 2 parámetros:
                1.- data, que es el objeto topojson
                2.- la información clave que queremos obtener del json*/
            stateData = topojson.feature(data, data.objects.counties).features;
            
            //Del objeto geojson solo nos importa la parte de features y no el resto del array
            console.log(stateData); //con esto puedo ver lo que hay en el topojson que llegó de la variable statesURL
            
            drawMap();//Esto lo debo borrar cuando ya tenga mi json del negrou y fer

            /*Aquí vamos a jalar lo que haya en el URL que me manden, para ello debo asegurarme que solo se 
            haga cuando no exista un error en la llamada inicial, por eso lo pongo dentro del else*/
            // d3.json(backendHackathon2020URL).then( 
            //     (data, error) => {
            //         if(error){
            //             console.log(error);
            //         }else{
            //             backendHackathon2020Data = data;
            //             console.log(backendHackathon2020Data);
            //             drawMap();
            //         }
            //     }
            // )
        }
    }
);
//TERMINA COROPLETH MAP


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