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

// /*ACO KlassikDrain*/
// function k100(){
//     var k100AcoDrain = "";
//     k100AcoDrain = 
//     "<div id='productImageTextContainer'>" +
//         "<div id='productTextContainer_Klassik'>" +
//             "<div id='individualProductTitle_Klassik'>" +
//                 "K100:" +
//             "</div>" +
//             "<div id='SText_Klassik'>" +
//             "<strong style='font-weight: bold;'>Canal de concreto polimérico de 10 cm de ancho interno</strong> y una <strong style='font-weight: bold;'>amplia variedad de rejillas</strong>. Desde rejillas decorativas hasta el uso seguro de zapatillas, resisten <strong style='font-weight: bold;'>hasta la carga Clase E (65 Ton)</strong>." +
//             "</div>" +
//         "</div>" +
//         "<div id='productImageDisplay_Klassik'>" +
//             "<img src='img/k100-crea-300x247.png' alt='K100' id='productImageWidth_Klassik'>" +
//         "</div>" +
//     "</div>" +
//     "<div id='standardMenu_Klassik'>" +
//         "<div id='standardMenuMain_Klassik'>" +
//             "Rejillas por tipo de carga" +
//         "</div>" +
//         "<div class='k100SubMenuMain' onclick='k100ClaseA()'>" +
//             "Clase A Peatonal&nbsp;&nbsp;" +
//             "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
//         "</div>" +
//             "<div id='k100ClaseA' class='pdfMenuElements'>" +
//             "</div>" +
//         "<div class='k100SubMenuMain' onclick='k100ClaseB()'>" +
//             "Clase B Vehículos ligeros&nbsp;&nbsp;" +
//             "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
//         "</div>" +
//             "<div id='k100ClaseB' class='pdfMenuElements'>" +
//             "</div>" +
//         "<div class='k100SubMenuMain' onclick='k100ClaseC()'>" +
//             "Clase C Vehículos comerciales&nbsp;&nbsp;" +
//             "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
//         "</div>" +
//             "<div id='k100ClaseC' class='pdfMenuElements'>" +
//             "</div>" +
//         "<div class='k100SubMenuMain' onclick='k100ClaseE()'>" +
//             "Clase E Industrial ligero&nbsp;&nbsp;" +
//             "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
//         "</div>" +
//             "<div id='k100ClaseE' class='pdfMenuElements'>" +
//             "</div>" +
//     "</div>";
//     document.getElementById("displayProduct_Klassik").innerHTML = k100AcoDrain;
//     document.getElementById("productContainerItem_Klassik").style.height = "89vh";
//     document.getElementById("productSubcontainerItem_Klassik").style.height = "81vh";
//     document.getElementById("displayProduct_Klassik").style.height = "61vh";
// }
// //K100