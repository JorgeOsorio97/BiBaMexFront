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

/*ACO KlassikDrain*/
function k100(){
    var k100AcoDrain = "";
    k100AcoDrain = 
    "<div id='productImageTextContainer'>" +
        "<div id='productTextContainer_Klassik'>" +
            "<div id='individualProductTitle_Klassik'>" +
                "K100:" +
            "</div>" +
            "<div id='SText_Klassik'>" +
            "<strong style='font-weight: bold;'>Canal de concreto polimérico de 10 cm de ancho interno</strong> y una <strong style='font-weight: bold;'>amplia variedad de rejillas</strong>. Desde rejillas decorativas hasta el uso seguro de zapatillas, resisten <strong style='font-weight: bold;'>hasta la carga Clase E (65 Ton)</strong>." +
            "</div>" +
        "</div>" +
        "<div id='productImageDisplay_Klassik'>" +
            "<img src='img/k100-crea-300x247.png' alt='K100' id='productImageWidth_Klassik'>" +
        "</div>" +
    "</div>" +
    "<div id='standardMenu_Klassik'>" +
        "<div id='standardMenuMain_Klassik'>" +
            "Rejillas por tipo de carga" +
        "</div>" +
        "<div class='k100SubMenuMain' onclick='k100ClaseA()'>" +
            "Clase A Peatonal&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k100ClaseA' class='pdfMenuElements'>" +
            "</div>" +
        "<div class='k100SubMenuMain' onclick='k100ClaseB()'>" +
            "Clase B Vehículos ligeros&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k100ClaseB' class='pdfMenuElements'>" +
            "</div>" +
        "<div class='k100SubMenuMain' onclick='k100ClaseC()'>" +
            "Clase C Vehículos comerciales&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k100ClaseC' class='pdfMenuElements'>" +
            "</div>" +
        "<div class='k100SubMenuMain' onclick='k100ClaseE()'>" +
            "Clase E Industrial ligero&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k100ClaseE' class='pdfMenuElements'>" +
            "</div>" +
    "</div>";
    document.getElementById("displayProduct_Klassik").innerHTML = k100AcoDrain;
    document.getElementById("productContainerItem_Klassik").style.height = "89vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "81vh";
    document.getElementById("displayProduct_Klassik").style.height = "61vh";
}
//K100
function k100ClaseA(){
    var k100AcoDrainClaseA = "";
    k100AcoDrainClaseA = 
    "<div id='standardMenuMain_Klassik'>" +
        "Acero galvanizado" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase A/Acero galvanizado/K100-410D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-410D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase A/Acero galvanizado/K100-420D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-420D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Acero inoxidable" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase A/Acero inoxidable/K100-450D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-450D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase A/Acero inoxidable/K100-451D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-451D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Plástico" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase A/Plastico/K100-494D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-494D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k100ClaseA").innerHTML = k100AcoDrainClaseA;
    document.getElementById("k100ClaseB").innerHTML = "";
    document.getElementById("k100ClaseC").innerHTML = "";
    document.getElementById("k100ClaseE").innerHTML = "";
    document.getElementById("productContainerItem_Klassik").style.height = "155vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "145vh";
    document.getElementById("displayProduct_Klassik").style.height = "125vh";
}
//Clase A
function k100ClaseB(){
    var k100AcoDrainClaseB = "";
    k100AcoDrainClaseB = 
    "<div id='standardMenuMain_Klassik'>" +
        "Acero galvanizado" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase B/Acero galvanizado/K100-438D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-438D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase B/Acero galvanizado/K100-447D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-447D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k100ClaseA").innerHTML = "";
    document.getElementById("k100ClaseB").innerHTML = k100AcoDrainClaseB;
    document.getElementById("k100ClaseC").innerHTML = "";
    document.getElementById("k100ClaseE").innerHTML = "";
    document.getElementById("productContainerItem_Klassik").style.height = "110vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "100vh";
    document.getElementById("displayProduct_Klassik").style.height = "80vh";
}
//Clase B
function k100ClaseC(){
    var k100AcoDrainClaseC = "";
    k100AcoDrainClaseC = 
    "<div id='standardMenuMain_Klassik'>" +
        "Acero galvanizado" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Acero galvanizado/K100-411D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-411D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Acero galvanizado/K100-425D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-425D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Resina" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Acero galvanizado/K100-492D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-492D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Acero inoxidable" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Acero inoxidable/K100-405D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-405D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Acero inoxidable/K100-430D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-430D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Acero inoxidable/K100-455D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-455D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Acero inoxidable/K100-465D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-465D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Hierro Dúctil" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Hierro Ductil/K100-460D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-460D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Hierro Ductil/K100-476D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-476D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase C/Hierro Ductil/K100-480D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-480D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k100ClaseA").innerHTML = "";
    document.getElementById("k100ClaseB").innerHTML = "";
    document.getElementById("k100ClaseC").innerHTML = k100AcoDrainClaseC;
    document.getElementById("k100ClaseE").innerHTML = "";
    document.getElementById("productContainerItem_Klassik").style.height = "195vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "185vh";
    document.getElementById("displayProduct_Klassik").style.height = "165vh";
}
//Clase C
function k100ClaseE(){
    var k100AcoDrainClaseE = "";
    k100AcoDrainClaseE = 
    "<div id='standardMenuMain_Klassik'>" +
        "Acero galvanizado" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase E/Acero galvanizado/K100-435Q.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-435Q&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Acero inoxidable" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase E/Acero inoxidable/K100S-490Q.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100S-490Q&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Hierro Dúctil" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K100/Clase E/Hierro Ductil/K100-461Q.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-461Q&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K100/Clase E/Hierro Ductil/K100-478Q.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K100-478Q&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k100ClaseA").innerHTML = "";
    document.getElementById("k100ClaseB").innerHTML = "";
    document.getElementById("k100ClaseC").innerHTML = "";
    document.getElementById("k100ClaseE").innerHTML = k100AcoDrainClaseE;
    document.getElementById("productContainerItem_Klassik").style.height = "140vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "130vh";
    document.getElementById("displayProduct_Klassik").style.height = "110vh";
}
//Clase E

function k200(){
    var k200AcoDrain = "";
    k200AcoDrain = 
    "<div id='productImageTextContainer'>" +
        "<div id='productTextContainer_Klassik'>" +
            "<div id='individualProductTitle_Klassik'>" +
                "K200:" +
            "</div>" +
            "<div id='SText_Klassik'>" +
            "<strong style='font-weight: bold;'>Canal de concreto polimérico de 20 cm de ancho interno</strong> y una <strong style='font-weight: bold;'>amplia variedad de rejillas</strong>. Desde rejillas decorativas hasta el uso industrial ligero, resisten <strong style='font-weight: bold;'>hasta la carga Clase E (65 Ton)</strong>." +
            "</div>" +
        "</div>" +
        "<div id='productImageDisplay_Klassik'>" +
            "<img src='img/k200-crea-300x259.png' alt='K200' id='productImageWidth_Klassik'>" + 
        "</div>" +
    "</div>" +
    "<div id='standardMenu_Klassik'>" +
        "<div id='standardMenuMain_Klassik'>" +
            "Rejillas por tipo de carga" +
        "</div>" +
        "<div class='k100SubMenuMain' onclick='k200ClaseB()'>" +
            "Clase B Vehículos ligeros&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k200ClaseB' class='pdfMenuElements'>" +
            "</div>" +
        "<div class='k100SubMenuMain' onclick='k200ClaseC()'>" +
            "Clase C Vehículos comerciales&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k200ClaseC' class='pdfMenuElements'>" +
            "</div>" +
        "<div class='k100SubMenuMain' onclick='k200ClaseE()'>" +
            "Clase E Industrial ligero&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k200ClaseE' class='pdfMenuElements'>" +
            "</div>" +
    "</div>";
    document.getElementById("displayProduct_Klassik").innerHTML = k200AcoDrain;
    document.getElementById("productContainerItem_Klassik").style.height = "89vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "81vh";
    document.getElementById("displayProduct_Klassik").style.height = "61vh";
}
//K200
function k200ClaseB(){
    var k200AcoDrainClaseB = "";
    k200AcoDrainClaseB = 
    "<div id='standardMenuMain_Klassik'>" +
        "Acero galvanizado" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K200/Clase B/Acero galvanizado/K200-647D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K200-647D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k200ClaseB").innerHTML = k200AcoDrainClaseB;
    document.getElementById("k200ClaseC").innerHTML = "";
    document.getElementById("k200ClaseE").innerHTML = "";
    document.getElementById("productContainerItem_Klassik").style.height = "95vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "87vh";
    document.getElementById("displayProduct_Klassik").style.height = "67vh";
}
//Clase B
function k200ClaseC(){
    var k200AcoDrainClaseC = "";
    k200AcoDrainClaseC = 
    "<div id='standardMenuMain_Klassik'>" +
        "Acero galvanizado" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K200/Clase C/Acero galvanizado/K200-611D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K200-611D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Hierro Dúctil" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K200/Clase C/Hierro Ductil/K200-660D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K200-660D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K200/Clase C/Hierro Ductil/K200-665D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K200-665D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K200/Clase C/Hierro Ductil/K200-676D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K200-676D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K200/Clase C/Hierro Ductil/K200-680D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K200-680D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k200ClaseB").innerHTML = "";
    document.getElementById("k200ClaseC").innerHTML = k200AcoDrainClaseC;
    document.getElementById("k200ClaseE").innerHTML = "";
    document.getElementById("productContainerItem_Klassik").style.height = "140vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "130vh";
    document.getElementById("displayProduct_Klassik").style.height = "110vh";
}
//Clase C
function k200ClaseE(){
    var k200AcoDrainClaseE = "";
    k200AcoDrainClaseE = 
    "<div id='standardMenuMain_Klassik'>" +
        "Hierro Dúctil" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K200/Clase E/Hierro Ductil/K200-661Q.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K200-661Q&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K200/Clase E/Hierro Ductil/K200-678Q.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K200-678Q&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k200ClaseB").innerHTML = "";
    document.getElementById("k200ClaseC").innerHTML = "";
    document.getElementById("k200ClaseE").innerHTML = k200AcoDrainClaseE;
    document.getElementById("productContainerItem_Klassik").style.height = "95vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "87vh";
    document.getElementById("displayProduct_Klassik").style.height = "67vh";
}
//Clase E

function k300(){
    var k300AcoDrain = "";
    k300AcoDrain = 
    "<div id='productImageTextContainer'>" +
        "<div id='productTextContainer_Klassik'>" +
            "<div id='individualProductTitle_Klassik'>" +
                "K300:" +
            "</div>" +
            "<div id='SText_Klassik'>" +
            "<strong style='font-weight: bold;'>Canal de concreto polimérico de 30 cm de ancho interno</strong> y una <strong style='font-weight: bold;'>amplia variedad de rejillas</strong>. Desde rejillas decorativas hasta el uso industrial ligero, resisten <strong style='font-weight: bold;'>hasta la carga Clase E (65 Ton)</strong>." +
            "</div>" +
        "</div>" +
        "<div id='productImageDisplay_Klassik'>" +
            "<img src='img/k300-crea-300x239.png' alt='K300' id='productImageWidth_Klassik'>" + 
        "</div>" +
    "</div>" +
    "<div id='standardMenu_Klassik'>" +
        "<div id='standardMenuMain_Klassik'>" +
            "Rejillas por tipo de carga" +
        "</div>" +
        "<div class='k100SubMenuMain' onclick='k300ClaseA()'>" +
            "Clase A Peatonal&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k300ClaseA' class='pdfMenuElements'>" +
            "</div>" +
        "<div class='k100SubMenuMain' onclick='k300ClaseB()'>" +
            "Clase B Vehículos ligeros&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k300ClaseB' class='pdfMenuElements'>" +
            "</div>" +
        "<div class='k100SubMenuMain' onclick='k300ClaseC()'>" +
            "Clase C Vehículos comerciales&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k300ClaseC' class='pdfMenuElements'>" +
            "</div>" +
        "<div class='k100SubMenuMain' onclick='k300ClaseE()'>" +
            "Clase E Industrial ligero&nbsp;&nbsp;" +
            "<img src='img/flecha-hacia-abajo.svg' alt='menu icon' width='5%'>" +
        "</div>" +
            "<div id='k300ClaseE' class='pdfMenuElements'>" +
            "</div>" +
    "</div>";
    document.getElementById("displayProduct_Klassik").innerHTML = k300AcoDrain;
    document.getElementById("productContainerItem_Klassik").style.height = "89vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "81vh";
    document.getElementById("displayProduct_Klassik").style.height = "61vh";
}
//K300
function k300ClaseA(){
    var k300AcoDrainClaseA = "";
    k300AcoDrainClaseA = 
    "<div id='standardMenuMain_Klassik'>" +
        "Acero inoxidable" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K300/Clase A/Acero inoxidable/K300-847D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-847D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k300ClaseA").innerHTML = k300AcoDrainClaseA;
    document.getElementById("k300ClaseB").innerHTML = "";
    document.getElementById("k300ClaseC").innerHTML = "";
    document.getElementById("k300ClaseE").innerHTML = "";
    document.getElementById("productContainerItem_Klassik").style.height = "95vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "87vh";
    document.getElementById("displayProduct_Klassik").style.height = "67vh";
}
//Clase A
function k300ClaseB(){
    var k300AcoDrainClaseB = "";
    k300AcoDrainClaseB = 
    "<div id='standardMenuMain_Klassik'>" +
        "Acero galvanizado" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K300/Clase B/Acero galvanizado/K300-811D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-811D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k300ClaseA").innerHTML = "";
    document.getElementById("k300ClaseB").innerHTML = k300AcoDrainClaseB;
    document.getElementById("k300ClaseC").innerHTML = "";
    document.getElementById("k300ClaseE").innerHTML = "";
    document.getElementById("productContainerItem_Klassik").style.height = "95vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "87vh";
    document.getElementById("displayProduct_Klassik").style.height = "67vh";
}
//Clase B
function k300ClaseC(){
    var k300AcoDrainClaseC = "";
    k300AcoDrainClaseC = 
    "<div id='standardMenuMain_Klassik'>" +
        "Acero galvanizado" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K300/Clase C/Acero galvanizado/K300-805D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-805D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K300/Clase C/Acero galvanizado/K300-865D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-865D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Acero inoxidable" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K300/Clase C/Acero inoxidable/K300-830D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-830D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<div id='standardMenuMain_Klassik'>" +
        "Hierro Dúctil" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K300/Clase C/Hierro Ductil/K300-860D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-860D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K300/Clase C/Hierro Ductil/K300-876D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-876D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K300/Clase C/Hierro Ductil/K300-880D.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-880D&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k300ClaseA").innerHTML = "";
    document.getElementById("k300ClaseB").innerHTML = "";
    document.getElementById("k300ClaseC").innerHTML = k300AcoDrainClaseC;
    document.getElementById("k300ClaseE").innerHTML = "";
    document.getElementById("productContainerItem_Klassik").style.height = "155vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "145vh";
    document.getElementById("displayProduct_Klassik").style.height = "125vh";
}
//Clase C
function k300ClaseE(){
    var k300AcoDrainClaseE = "";
    k300AcoDrainClaseE = 
    "<div id='standardMenuMain_Klassik'>" +
        "Hierro Dúctil" +
    "</div>" +
    "<a href='pdf/Klassik Drain/K300/Clase E/Hierro Ductil/K300-861Q.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-861Q&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>" +
    "<a href='pdf/Klassik Drain/K300/Clase E/Hierro Ductil/K300-878Q.pdf' target='_blank' class='standardMenuElements_Klassik'>" +
        "<div class='standardAlignText'>" +
            "K300-878Q&nbsp;&nbsp;" +
            "<img src='img/pdf.svg' alt='menu icon' width='16%'>" +
        "</div>" +
    "</a>";
    document.getElementById("k300ClaseA").innerHTML = "";
    document.getElementById("k300ClaseB").innerHTML = "";
    document.getElementById("k300ClaseC").innerHTML = "";
    document.getElementById("k300ClaseE").innerHTML = k300AcoDrainClaseE;
    document.getElementById("productContainerItem_Klassik").style.height = "105vh";
    document.getElementById("productSubcontainerItem_Klassik").style.height = "95vh";
    document.getElementById("displayProduct_Klassik").style.height = "75vh";
}
//Clase E
/*ACO Drain*/




/*ACO Sport*/
function s2000(){
    var s2000AcoSport = "";
    s2000AcoSport = 
    "<div id='productTextContainer3Big'>" +
        "<div id='individualProductTitle3Big'>" +
            "Sistema 2000:" +
        "</div>" +
        "<div id='SText3Big'>" +
            "<strong style='font-weight: bold;'>El Sistema 2000 es el primer drenaje de pistas de atletismo ranurado en el mercado</strong>, utilizado en la mayoría de los estadios olímpicos de alto perfil, incluyendo estadios profesionales avalados por la IAAF. El sistema se suministra en canales rectos y con radio con una ranura en línea adecuada para proporcionar un recorrido continuo de recolección de agua alrededor de toda la pista de atletismo. <strong style='font-weight: bold;'>Mayor profundidad para un máximo rendimiento hidráulico</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3Big'>" +
        "<img src='img/system2000-400x284.jpg' alt='product_image' id='productImageWidth3Big'>" +
    "</div>" +
    "<div id='standardMenu3Big'>" +
        "<div id='standardMenuMain3Big'>" +
            "Modelos de canal" +
        "</div>" +
        "<a href='pdf/Sport/Sport 2000.pdf' target='_blank' class='standardMenuElements3Big'>" +
            "<div class='standardAlignText'>" +
                "Sistema 2000&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3Big").innerHTML = s2000AcoSport;
}
//S2000
function s3000(){
    var s3000AcoSport = "";
    s3000AcoSport = 
    "<div id='productTextContainer3Big'>" +
        "<div id='individualProductTitle3Big'>" +
            "Sistema 3000:" +
        "</div>" +
        "<div id='SText3Big'>" +
            "<strong style='font-weight: bold;'>Las pistas de atletismo son el uso más común para el sistema 3000</strong>. El sistema se suministra en canales rectos y con radio con registros en línea para proporcionar un funcionamiento continuo alrededor de la pista entera. <strong style='font-weight: bold;'>El Sistema 3000 es el sistema con ranura fabricado en concreto polimérico más económico disponible</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3Big'>" +
        "<img src='img/sport3000-creaproyectos.jpg' alt='product_image' id='productImageWidth3Big'>" +
    "</div>" +
    "<div id='standardMenu3Big'>" +
        "<div id='standardMenuMain3Big'>" +
            "Modelos de canal" +
        "</div>" +
        "<a href='pdf/Sport/Sport 3000.pdf' target='_blank' class='standardMenuElements3Big'>" +
            "<div class='standardAlignText'>" +
                "Sistema 3000&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3Big").innerHTML = s3000AcoSport;
}
//S3000
function s4000(){
    var s4000AcoSport = "";
    s4000AcoSport = 
    "<div id='productTextContainer3Big'>" +
        "<div id='individualProductTitle3Big'>" +
            "Sistema 4000:" +
        "</div>" +
        "<div id='SText3Big'>" +
            "<strong style='font-weight: bold;'>El sistema 4000 está disponible sólo como canal recto</strong>, para las áreas ‘D’ (o curvas) puede ser combinado con un canal ranurado con radio del Sistema 2000, o el radio se puede lograr ajustando los canales con un pequeño espacio en el exterior de la junta. <strong style='font-weight: bold;'>Las pistas de atletismo pueden utilizar el sistema 4000, particularmente aquellas con superficies sintéticas</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3Big'>" +
        "<img src='img/sys4000.jpg' alt='product_image' id='productImageWidth3Big'>" +
    "</div>" +
    "<div id='standardMenu3Big'>" +
        "<div id='standardMenuMain3Big'>" +
            "Modelos de canal" +
        "</div>" +
        "<a href='pdf/Sport/Sport 4000.pdf' target='_blank' class='standardMenuElements3Big'>" +
            "<div class='standardAlignText'>" +
                "Sistema 4000&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";

    "<div style='width: 90%; height: 450px; display: flex; align-items: center; justify-content: space-around;'>" +
        "<div style='width: 35%; height: 430px;'>" +
            "<div id='individualProductTitle3'>" +
                
            "</div>" +
            "<div id='SText2'>" +
                
            "</div>" +
        "</div>" +
        "<div id='productImageDisplay3'>" +
            
        "</div>" +
        "<div id='standardMenu'>" +
            "<div id='standardMenuMain3'>" +
                "Modelos de canal" +
            "</div>" +
            
        "</div>" +
    "</div>";
    document.getElementById("displayProduct3Big").innerHTML = s4000AcoSport;
}
//S4000
/*ACO Sport*/


/*ACO PowerDrain*/
function s100k(){
    var s100kAcoPowerDrain = "";
    s100kAcoPowerDrain = 
    "<div id='productTextContainer3'>" +
        "<div id='individualProductTitle3'>" +
            "S100K:" + 
        "</div>" +
        "<div id='SText3'>" +
            "<strong style='font-weight: bold;'>Canal de concreto polimérico de 10 cm de ancho interno</strong> con riel y rejillas de hierro dúctil <strong style='font-weight: bold;'>hechas para soportar las condiciones más agresivas de carga. Clase F (90 Ton)</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3'>" +
        "<img src='img/s100k-creaproyectos-300x221.png' alt='S100K' id='productImageWidth3'>" +
    "</div>" +
    "<div id='standardMenu3'>" +
        "<div id='standardMenuMain3'>" +
            "Rejillas Clase F Industrial pesado" +
        "</div>" +
        "<a href='pdf/Power Drain/SK100/Carga F/S100K - Rejilla de hierro dúctil de 4 tornillos.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Hierro dúctil de 4 tornillos&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Power Drain/SK100/Carga F/S100K - Rejilla longitudinal de hierro dúctil.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Longitudinal de hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Power Drain/SK100/Carga F/S100K - Rejilla ranurada de hierro dúctil.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Ranurada de hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3").innerHTML = s100kAcoPowerDrain;
}
//S100K
function s200k(){
    var s200kAcoPowerDrain = "";
    s200kAcoPowerDrain = 
    "<div id='productTextContainer3'>" +
        "<div id='individualProductTitle3'>" +
            "S200K:" +
        "</div>" +
        "<div id='SText3'>" +
            "<strong style='font-weight: bold;'>Canal de concreto polimérico de 20 cm de ancho interno</strong> con riel y rejillas de hierro dúctil <strong style='font-weight: bold;'>hechas para soportar las condiciones más agresivas de carga. Hasta la clase F (90 Ton)</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3'>" +
        "<img src='img/s200k-Creaproyectos-300x232.png' alt='S100K' id='productImageWidth3'>" + 
    "</div>" +
    "<div id='standardMenu3'>" +
        "<div id='standardMenuMain3'>" +
            "Rejillas Clase E Industrial ligero" +
        "</div>" +
        "<a href='pdf/Power Drain/SK200/Carga E/S200K - Rejilla longitudinal de hierro dúctil.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Longitudinal de hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<div id='standardMenuMain3'>" +
            "Rejillas Clase F Industrial pesado" +
        "</div>" +
        "<a href='pdf/Power Drain/SK200/Carga F/S200K - Rejilla de hierro dúctil de 4 tornillos.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Hierro dúctil de 4 tornillos&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Power Drain/SK200/Carga F/S200K - Rejilla ranurada de hierro dúctil.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Ranurada de hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3").innerHTML = s200kAcoPowerDrain;
}
//S200K
function s300k(){
    var s300kAcoPowerDrain = "";
    s300kAcoPowerDrain = 
    "<div id='productTextContainer3'>" +
        "<div id='individualProductTitle3'>" +
            "S300K:" +
        "</div>" +
        "<div id='SText3'>" +
            "<strong style='font-weight: bold;'>Canal de concreto polimérico de 30 cm de ancho interno</strong> con riel y rejillas de hierro dúctil <strong style='font-weight: bold;'>hechas para soportar las condiciones más agresivas de carga. Hasta la clase F (90 Ton)</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3'>" +
        "<img src='img/s300k-crea-proyectos-300x239.png' alt='S100K' id='productImageWidth3'>" +  
    "</div>" +
    "<div id='standardMenu3'>" +
        "<div id='standardMenuMain3'>" +
            "Rejillas Clase E Industrial ligero" +
        "</div>" +
        "<a href='pdf/Power Drain/SK200/Carga E/S200K - Rejilla longitudinal de hierro dúctil.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Longitudinal de hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<div id='standardMenuMain3'>" +
            "Rejillas Clase E Industrial ligero" +
        "</div>" +
        "<a href='pdf/Power Drain/SK300/Carga E/S300K - Rejilla longitudinal de hierro dúctil.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Longitudinal de hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<div id='standardMenuMain3'>" +
            "Rejillas Clase F Industrial pesado" +
        "</div>" +
        "<a href='pdf/Power Drain/SK300/Carga F/S300K - Rejilla de hierro dúctil de 4 tornillos.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Hierro dúctil de 4 tornillos&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Power Drain/SK300/Carga F/S300K - Rejilla ranurada de hierro dúctil.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Ranurada de hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3").innerHTML = s300kAcoPowerDrain;
}
//S300K
/*ACO PowerDrain*/




function D100(){
    var Drainline100 = "";
    Drainline100 = 
    "<div id='productTextContainer3'>" +
        "<div id='individualProductTitle3'>" +
            "Drainline 100:" +
        "</div>" +
        "<div id='SText3'>" +
            "<strong style='font-weight: bold;'>DrainLine 100 es un sistema de concreto polimérico para uso en áreas residenciales, de oficina y otras áreas de servicio ligero</strong>. Utiliza las mismas rejillas que los drenes Hexaline, lo que es <strong style='font-weight: bold;'>adecuado para aplicaciones de tráfico peatonal y de vehículos ligeros</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3'>" +
        "<img src='img/drainline-100-crea.png' alt='product_image' id='productImageWidth3'>" +
    "</div>" +
    "<div id='standardMenu3'>" +
        "<div id='standardMenuMain3'>" +
            "Rejillas Clase B Vehículos ligeros" +
        "</div>" +
        "<a href='pdf/Self/Drainline 100/Drainline 100 con ranura Brickslot.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Ranura Brickslot&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Self/Drainline 100/Drainline 100 rejilla de acero galvanizado.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Acero Galvanizado&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Self/Drainline 100/Drainline 100 rejilla de plástico.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Plástico&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3").innerHTML = Drainline100;
}
//Drainline 100
function D150(){
    var Drainline150 = "";
    Drainline150 = 
    "<div id='productTextContainer3'>" +
        "<div id='individualProductTitle3'>" +
            "Drainline 150:" +
        "</div>" +
        "<div id='SText3'>" +
            "<strong style='font-weight: bold;'>DrainLine 100 es un sistema duradero de concreto polimérico para uso en áreas residenciales, de oficina y otras áreas de servicio ligero</strong>. Es un sistema práctico para drenar grandes cantidades de agua. <strong style='font-weight: bold;'>Adecuado para aplicaciones de tráfico peatonal y de vehículos ligeros</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3'>" +
        "<img src='img/dl150-300x296.png' alt='product_image' id='productImageWidth3'>" +
    "</div>" +
    "<div id='standardMenu3'>" +
        "<div id='standardMenuMain3'>" +
            "Rejillas Clase B Vehículos ligeros" +
        "</div>" +
        "<a href='pdf/Self/Drainline 150/Drainline 150 rejilla de hierro dúctil.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Hierro Dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3").innerHTML = Drainline150;
}
//Drainline 150
function hexa(){
    var Hexaline = "";
    Hexaline = 
    "<div id='productTextContainer3'>" +
        "<div id='individualProductTitle3'>" +
            "Hexaline:" +
        "</div>" +
        "<div id='SText3'>" +
            "<strong style='font-weight: bold;'>HexaLine es un sistema de drenaje de polipropileno con una gama de características innovadoras</strong>, haciendo la instalación de canales de drenaje más fácil que nunca. <strong style='font-weight: bold;'>Este producto es adecuado para aplicaciones de tráfico peatonal y de vehículos ligeros</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3'>" +
        "<img src='img/hexaline-3channels-crea.jpg' alt='product_image' id='productImageWidth3'>" +
    "</div>" +
    "<div id='standardMenu3'>" +
        "<div id='standardMenuMain3'>" +
            "Rejillas Clase B Vehículos ligeros" +
        "</div>" +
        "<a href='pdf/Self/Hexaline/Hexaline con ranura  Brickslot.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Ranura Brickslot&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Self/Hexaline/Hexaline rejilla acero galvanizado.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Acero Galvanizado&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Self/Hexaline/Hexaline rejilla de plástico.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Plástico&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3").innerHTML = Hexaline;
}
//Hexaline
/*ACO Self*/




function HSK(){
    var serie_HSK = "";
    serie_HSK = 
    "<div id='productTextContainer3Big'>" +
        "<div id='individualProductTitle3Big'>" +
            "SlabDrain – serie HSK:" +
        "</div>" +
        "<div id='SText3Big'>" +
            "<strong style='font-weight: bold;'>Canales de concreto polimérico disponibles en 10, 20 y 30 cm de ancho interno</strong>. La serie HSK utiliza las mismas rejillas y riel que el sistema PowerDrain." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3Big'>" +
        "<img src='img/H100SK-10.png' alt='product_image' style='width: 70%; margin: 5%;'>" +
        "<div class='descriptionElements3Big'>" +
            "H100SK-10" +
        "</div>" +
        "<img src='img/H200SK-13.png' alt='product_image' style='width: 70%; margin: 5%;'>" +
        "<div class='descriptionElements3Big'>" +
            "H200SK-13" +
        "</div>" +
        "<img src='img/H300SK-13.png' alt='product_image' style='width: 70%; margin: 5%;'>" +
        "<div class='descriptionElements3Big'>" +
            "H300SK-13" +
        "</div>" +
    "</div>" +
    "<div id='standardMenu3Big'>" +
        "<div id='standardMenuMain3Big'>" +
            "Modelos de canal" +
        "</div>" +
        "<a href='pdf/SlabDrain/HSK/H100SK-10.pdf' target='_blank' class='standardMenuElements3Big'>" +
            "<div class='standardAlignText'>" +
                "H100SK-10&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/HSK/H200SK-13.pdf' target='_blank' class='standardMenuElements3Big'>" +
            "<div class='standardAlignText'>" +
                "H200SK-13&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/HSK/H300SK-13.pdf' target='_blank' class='standardMenuElements3Big'>" +
            "<div class='standardAlignText'>" +
                "H300SK-13&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3Big").innerHTML = serie_HSK;
}
//Riel de hierro dúctil–Serie HSK
function HK(){
    var serie_HK = "";
    serie_HK = 
    "<div id='productTextContainer3Big'>" +
        "<div id='individualProductTitle3Big'>" +
            "SlabDrain – serie HK:" +
        "</div>" +
        "<div id='SText3Big'>" +
            "<strong style='font-weight: bold;'>Canales de concreto polimérico disponibles en 10, 20 y 30 cm de ancho interno</strong>. La serie HK utiliza las mismas rejillas y riel que el sistema KlassikDrain." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3Big'>" +
        "<img src='img/H100K-8.png' alt='product_image' style='width: 55%; margin: 5%;'>" +
        "<div class='descriptionElements3Big'>" +
            "H100K-8 &nbsp;&nbsp;&nbsp; H100KS-8" +
        "</div>" +
        "<img src='img/H200K-13.png' alt='product_image' style='width: 55%; margin: 5%;'>" +
        "<div class='descriptionElements3Big'>" +
            "H200K-13 &nbsp;&nbsp;&nbsp; H200KS-13" +
        "</div>" +
        "<img src='img/H300K-13.png' alt='product_image' style='width: 55%; margin: 5%;'>" +
        "<div class='descriptionElements3Big'>" +
            "H300K-13 &nbsp;&nbsp;&nbsp; H300KS-13" +
        "</div>" +
        "<img src='img/Multiline-6.png' alt='product_image' style='width: 55%; margin: 5%;'>" +
        "<div class='descriptionElements3Big'>" +
            "Multiline-6" +
        "</div>" +
    "</div>" +
    "<div id='standardMenu3Big'>" +
        "<div id='standardMenuMain3Big'>" +
            "Modelos de canal" +
        "</div>" +
        "<a href='pdf/SlabDrain/HK/H100K-8.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "H100K-8&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/HK/H100KS-8.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "H100KS-8&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/HK/H200K-13.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "H200K-13&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/HK/H200KS-13.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "H200KS-13&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/HK/H300K-13.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "H300K-13&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/HK/H300KS-13.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "H300KS-13&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/HK/Multiline V100S-BA-H90.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Multiline V100S-BA-H90&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/HK/Multiline.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Multiline&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3Big").innerHTML = serie_HK;
}
//Riel de acero galvanizado–Serie HK
function H(){
    var serie_H = "";
    serie_H = 
    "<div id='productTextContainer3Big'>" +
        "<div id='individualProductTitle3Big'>" +
            "SlabDrain – serie H:" +
        "</div>" +
        "<div id='SText3Big'>" +
            "<strong style='font-weight: bold;'>Canal de concreto polimérico de 10 cm de ancho interno. Es ideal para situaciones donde el metal no puede ser usado</strong>. El marco para la rejilla y el borde del canal se fabrican de concreto polimérico, utiliza rejillas KlassikDrain con sistema de cierre QuickLok." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3Big'>" +
        "<img src='img/H100-8.png' alt='product_image' style='width: 90%; margin: 5%;'>" +
        "<div class='descriptionElements3Big'>" +
            "H100-8" +
        "</div>" +
        "<img src='img/H100-10.png' alt='product_image' style='width: 90%; margin: 5%;'>" +
        "<div class='descriptionElements3Big'>" +
            "H100-10" +
        "</div>" +
    "</div>" +
    "<div id='standardMenu3Big'>" +
    "<div id='standardMenuMain3Big'>" +
        "Modelos de canal" +
    "</div>" +
    "<a href='pdf/SlabDrain/H/H100-8.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "H100-8&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/SlabDrain/H/H100-10.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "H100-10&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3Big").innerHTML = serie_H;
}
//Riel de acero galvanizado–Serie H
/*ACO Slab Drain*/




function oleoP(){
    var opeoPator = "";
    opeoPator = 
    "<div id='productTextContainer2'>" +
        "<div id='individualProductTitle3'>" +
            "ACO Oleopator P:" +
        "</div>" +
        "<div id='SText2'>" +
            "<strong style='font-weight: bold;'>Es una gama de separadores de aceite/agua que permiten separar simultáneamente sedimentos y líquidos ligeros en un solo tanque</strong> y están diseñados para lograr un alto rendimiento a grandes caudales en un tanque compacto." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay2'>" +
        "<img src='img/oleopatorP.png' alt='product_image' id='productImageWidth2'>" +
    "</div>" +
    "<div id='standardMenu'>" +
        "<div id='standardMenuMain'>" +
            "Separadores de hidrocarburos" +
        "</div>" +
        "<a href='pdf/Environment/Oleopator/Oleopator NS3 670.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "NS3 670&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Environment/Oleopator/Oleopator NS3 950.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "NS3 950&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Environment/Oleopator/Oleopator NS6 660.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "NS6 660&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Environment/Oleopator/Oleopator NS6 1210.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "NS6 1210&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct2").innerHTML = opeoPator;
}
//Oleopator P
function separa(){
    var separator = "";
    separator = 
    "<div id='productTextContainer2'>" +
        "<div id='individualProductTitle3'>" +
            "Separador de 2 cámaras:" +
        "</div>" +
        "<div id='SText2'>" +
            "<strong style='font-weight: bold;'>El separador de 2 cámaras para aceite-agua de ACO se basa en el principio de la gravedad</strong>; Como el aceite es más ligero que el agua, éste flotará y los sólidos son más pesados, por lo tanto se hundirán. <strong style='font-weight: bold;'>No utiliza enzimas o requiere mantenimiento frecuente tan sólo la eliminación periódica de sólidos y aceites</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay2'>" +
        "<img src='img/separador2camaras.png' alt='product_image' id='productImageWidth2'>" +
    "</div>" +
    "<div id='standardMenu'>" +
        "<div id='standardMenuMain'>" +
            "Separador de 2 cámaras" +
        "</div>" +
        "<a href='pdf/Environment/Separador 2 cámaras/Separador de grasas.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Separador de grasas&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct2").innerHTML = separator;
}
//Separador de 2 cámaras
/*ACO Environment*/




function plusDrain(){
    var plusD = "";
    plusD = 
    "<div id='productTextContainer2'>" +
        "<div id='individualProductTitle3'>" +
            "Linear Plus Drain:" +
        "</div>" +
        "<div id='SText2'>" +
            "<strong style='font-weight: bold;'>Línea de drenajes lineales y cuadrados con cuerpos de plástico y rejillas de acero inoxidable</strong> o de baldosas que están preenvasadas." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay2'>" +
        "<img src='img/linear-plus-drain-crea-proyectos.jpg' alt='product_image' id='productImageWidth2' style='width: 100%;'>" +
    "</div>" +
    "<div id='standardMenu'>" +
        "<div id='standardMenuMain'>" +
            "Rejillas Clase A Peatonal" +
        "</div>" +
        "<a href='pdf/Coladera de bano/Linear Plus Drain/Coladera Lineal A-Plus.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Coladera Lineal A-Plus&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct2").innerHTML = plusD;
}
//Linear Plus Drain
function premiumDrain(){
    var premiumD = "";
    premiumD = 
    "<div id='productTextContainer2'>" +
        "<div id='individualProductTitle3'>" +
            "Linear Premium Drain:" +
        "</div>" +
        "<div id='SText2'>" +
            "Línea de drenaje compatible con diferentes estructuras de suelo que elimina las complicadas pendientes del piso y simplifica el pavimento. <strong style='font-weight: bold;'>Las coladeras estéticas de ducha están diseñadas para durar</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay2'>" +
        "<img src='img/groupshot_crea.png' alt='product_image' id='productImageWidth2' style='width: 100%;'>" +
    "</div>" +
    "<div id='standardMenu'>" +
        "<div id='standardMenuMain'>" +
            "Rejillas Clase A Peatonal" +
        "</div>" +
        "<a href='pdf/Coladera de bano/Linear Premium Drain/Quartz Premium Wave.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Quartz Premium Wave&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Coladera de bano/Linear Premium Drain/Quartz Premium Flag.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Quartz Premium Flag&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Coladera de bano/Linear Premium Drain/Quartz Premium Pixel.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Quartz Premium Pixel&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Coladera de bano/Linear Premium Drain/Quartz Premium Tile.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Quartz Premium Tile&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Coladera de bano/Linear Premium Drain/Quartz Premium Cuadrato.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Quartz Premium Cuadrato&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct2").innerHTML = premiumD;
}
//Linear Premium Drain
/*Coladeras de Baño*/




function Qmax225(){
    var Qm225 = "";
    Qm225 = 
    "<div id='productTextContainer6'>" +
        "<div id='individualProductTitle6'>" +
            "Qmax 225:" +
        "</div>" +
        "<div id='SText6'>" +
            "<strong style='font-weight: bold;'>Es el Qmax más pequeño y tiene un diámetro de 225 mm</strong> debajo de los característicos arcos de captación patentados por ACO. <strong style='font-weight: bold;'>El canal está fabricado con resina virgen de polietileno de mediana densidad (MDPE) y cuenta con una unión macho y hembra de ajuste por empuje</strong>. El sistema cuenta con registros cortos y largos para mantenimiento y descarga." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6'>" +
        "<img src='img/qmax255.jpg' alt='product_image' id='productImageWidth6'>" +
    "</div>" +
    "<div id='standardMenu6'>" +
        "<div id='standardMenuMain6'>" +
            "Rejillas Clase F Industrial pesado" +
        "</div>" +
        "<a href='pdf/Q-Max/Qmax225/Acero Galvanizado/Q-Max 225 acero galvanizado Q-Flow.pdf' target='_blank' class='standardMenuElements6'>" +
            "<div class='standardAlignText'>" +
                "Acero Galvanizado&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Q-Max/Qmax225/Hierro Dúctil/Q-Max 225 hierro dúctil Q-Flow.pdf' target='_blank' class='standardMenuElements6'>" +
            "<div class='standardAlignText'>" +
                "Hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6").innerHTML = Qm225;
}
//Qmax 225
function Qmax300(){
    var Qm300 = "";
    Qm300 = 
    "<div id='productTextContainer6'>" +
        "<div id='individualProductTitle6'>" +
            "Qmax 300:" +
        "</div>" +
        "<div id='SText6'>" +
            "Cuenta con un diámetro de 300 mm, fabricado con resina virgen de polietileno de mediana densidad (MDPE). <strong style='font-weight: bold;'>El canal se conecta a los canales más pequeños y más grandes a través de tapas de conexión</strong>. El sistema cuenta con registros cortos y largos para mantenimiento y descarga." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6'>" +
        "<img src='img/qmax300.jpg' alt='product_image' id='productImageWidth6'>" +
    "</div>" +
    "<div id='standardMenu6'>" +
        "<div id='standardMenuMain6'>" +
            "Rejillas Clase F Industrial pesado" +
        "</div>" +
        "<a href='pdf/Q-Max/Qmax300/Hierro Dúctil/Q-Max 300 hierro dúctil Q-Flow.pdf' target='_blank' class='standardMenuElements6'>" +
            "<div class='standardAlignText'>" +
                "Hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6").innerHTML = Qm300;
}
//Qmax 300
function Qmax350(){
    var Qm350 = "";
    Qm350 = 
    "<div id='productTextContainer6'>" +
        "<div id='individualProductTitle6'>" +
            "Qmax 350:" +
        "</div>" +
        "<div id='SText6'>" +
            "<strong style='font-weight: bold;'>Cuenta con un diámetro de 350 mm</strong>, fabricado con resina virgen de polietileno de mediana densidad (MDPE). <strong style='font-weight: bold;'>El canal se conecta a los canales más pequeños y más grandes a través de tapas de conexión</strong>. El sistema cuenta con registros cortos y largos para mantenimiento y descarga." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6'>" +
        "<img src='img/qmax350.jpg' alt='product_image' id='productImageWidth6'>" +
    "</div>" +
    "<div id='standardMenu6'>" +
        "<div id='standardMenuMain6'>" +
            "Rejillas Clase F Industrial pesado" +
        "</div>" +
        "<a href='pdf/Q-Max/Qmax350/Acero Galvanizado/Q-Max 350 acero galvanizado Q-Flow.pdf' target='_blank' class='standardMenuElements6'>" +
            "<div class='standardAlignText'>" +
                "Acero Galvanizado&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Q-Max/Qmax350/Hierro Ductil/Q-Max 300 hierro dúctil Q-Flow.pdf' target='_blank' class='standardMenuElements6'>" +
            "<div class='standardAlignText'>" +
                "Hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6").innerHTML = Qm350;
}
//Qmax 350
function Qmax365(){
    var Qm365 = "";
    Qm365 = 
    "<div id='productTextContainer6'>" +
        "<div id='individualProductTitle6'>" +
            "Qmax 365:" +
        "</div>" +
        "<div id='SText6'>" +
            "<strong style='font-weight: bold;'>El cuerpo en forma de huevo del Qmax 365 está fabricado con resina virgen de polietileno de mediana densidad (MDPE) y presenta el sistema patentado de captación con arcos de entrada con una variedad de rejillas</strong>. El desarrollo en  “Vee” proporciona un <strong style='font-weight: bold;'>flujo hidráulico eficiente</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6'>" +
        "<img src='img/qmax365.jpg' alt='product_image' id='productImageWidth6'>" +
    "</div>" +
    "<div id='standardMenu6'>" +
        "<div id='standardMenuMain6'>" +
            "Rejillas Clase F Industrial pesado" +
        "</div>" +
        "<a href='pdf/Q-Max/Qmax365/Acero Galvanizado/Q-Max 365 acero galvanizado Q-Flow.pdf' target='_blank' class='standardMenuElements6'>" +
            "<div class='standardAlignText'>" +
                "Acero Galvanizado&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Q-Max/Qmax365/Hierro Dúctil/Q-Max 365 hierro dúctil Q-Flow.pdf' target='_blank' class='standardMenuElements6'>" +
            "<div class='standardAlignText'>" +
                "Hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6").innerHTML = Qm365;
}
//Qmax 365
function Qmax465(){
    var Qm465 = "";
    Qm465 = 
    "<div id='productTextContainer6'>" +
        "<div id='individualProductTitle6'>" +
            "Qmax 465:" +
        "</div>" +
        "<div id='SText6'>" +
            "<strong style='font-weight: bold;'> El cuerpo de forma ovalada del Qmax 465 está fabricado con resina virgen de polietileno de mediana densidad (MDPE) que lo hace ligero y fácil de instalar</strong>. Una variedad de rejillas están disponibles junto con accesorios tales como tapas de cierre conectores de oval a redondo." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6'>" +
        "<img src='img/qmax465.jpg' alt='product_image' id='productImageWidth6'>" +
    "</div>" +
    "<div id='standardMenu6'>" +
        "<div id='standardMenuMain6'>" +
            "Rejillas Clase F Industrial pesado" +
        "</div>" +
        "<a href='pdf/Q-Max/Qmax465/Acero Galvanizado/Q-Max 465 acero galvanizado Q-Flow.pdf' target='_blank' class='standardMenuElements6'>" +
            "<div class='standardAlignText'>" +
                "Acero Galvanizado&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Q-Max/Qmax465/Hierro Dúctil/Q-Max 465 hierro dúctil Q-Flow.pdf' target='_blank' class='standardMenuElements6'>" +
            "<div class='standardAlignText'>" +
                "Hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6").innerHTML = Qm465;
}
//Qmax 465
function Qmax600(){
    var Qm600 = "";
    Qm600 = 
    "<div id='productTextContainer6'>" +
        "<div id='individualProductTitle6'>" +
            "Qmax 600:" +
        "</div>" +
        "<div id='SText6'>" +
            "<strong style='font-weight: bold;'>El producto Qmax más grande cuenta con un cuerpo fabricado con resina virgen de polietileno de mediana densidad (MDPE)  con una variedad de rejillas de captación</strong>. Qmax 600 está diseñado con una conexión macho y hembra de ajuste por empuje que permite un montaje fácil. Las tapas de cierre y los conectores ovalados a redondos completan el sistema." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6'>" +
        "<img src='img/qmax600.jpg' alt='product_image' id='productImageWidth6'>" +
    "</div>" +
    "<div id='standardMenu6'>" +
        "<div id='standardMenuMain6'>" +
            "Rejillas Clase F Industrial pesado" +
        "</div>" +
        "<a href='pdf/Q-Max/Qmax600/Acero Galvanizado/Q-Max 600 acero galvanizado Q-Flow.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Acero Galvanizado&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Q-Max/Qmax600/Hierro Dúctil/Q-Max 600 hierro dúctil Q-Flow.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "Hierro dúctil&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6").innerHTML = Qm600;
}
//Qmax 600
/*ACO Qmax*/




function Brocal(){
    var brocal = "";
    brocal = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Brocal con tapa para pozo de visita:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Brocal para alcantarillado con tapa para pozo de visita</strong>, fabricado en concreto polimérico de alta resistencia reforzado con fibra de vidrio. Modelo sanitario ciego, o pluvial con  4 orificios de captación. " +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/Brocal Carga Pesada Sin Bisagra.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipos de Brocales" +
        "</div>" +
        "<a href='pdf/Alcantarillado/Brocal con tapa/Carga Ligera Sin Bisagra.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Carga Ligera Sin Bisagra&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Alcantarillado/Brocal con tapa/Carga Pesada Con Bisagra.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Carga Pesada Con Bisagra&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Alcantarillado/Brocal con tapa/Carga Pesada Sin Bisagra.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Carga Pesada Sin Bisagra&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = brocal;
}
//Brocal con tapa para pozo de visita
function Coladera(){
    var coladeraP = "";
    coladeraP = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Coladera pluvial para banqueta:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Coladera pluvial para banqueta</strong>, fabricada en concreto polimérico de alta resistencia reforzado con fibra de vidrio. Tapa con superficie antiderrapante piramidal." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/Coladera pluvial para banqueta.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipo de Coladera" +
        "</div>" +
        "<a href='pdf/Alcantarillado/Coladera pluvial para banqueta/Coladera pluvial para banqueta.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Coladera pluvial para banqueta&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = coladeraP;
}
//Coladera pluvial para banqueta
function MarcoYTapa(){
    var marcoYtapa = "";
    marcoYtapa = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Marco con tapa para caja de válvulas:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Marco con tapa para caja de válvula</strong>, fabricada en concreto polimérico de alta resistencia reforzado con fibra de vidrio, jaladera de acero galvanizado y tapa con antiderrapante piramidal." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/Marco con tapa para caja de válvulas.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipos de Marco con tapa" +
        "</div>" +
        "<a href='pdf/Alcantarillado/Marco con tapa para caja de válvulas/Marco con tapa sin bisagra.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Marco con tapa sin bisagra&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Alcantarillado/Marco con tapa para caja de válvulas/Marco con tapa y bisagra.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Marco con tapa y bisagra&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = marcoYtapa;
}
//Marco con tapa para caja de válvulas
function Rejilla(){
    var rejillaPiso = "";
    rejillaPiso = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Rejilla de piso para boca de tormenta:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Rejilla de piso para boca de tormenta</strong>, marco y rejilla fabricados en concreto polimérico de alta resistencia reforzado con fibra de vidrio y superficie lisa." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/Rejilla de piso para boca de tormenta.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tamaños de rejilla de piso" +
        "</div>" +
        "<a href='pdf/Alcantarillado/Rejillas de piso/50x50 cm.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "50x50 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Alcantarillado/Rejillas de piso/60x40 cm.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "60x40 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Alcantarillado/Rejillas de piso/60x60 cm.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "60x60 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Alcantarillado/Rejillas de piso/60x70 cm.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "60x70 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = rejillaPiso;
}
//Rejillas de piso
/*Alcantarillado*/




function AroYTapa(){
    var aroYtapa84 = "";
    aroYtapa84 = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Aro y Tapa 84:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>El aro y tapa 84 tiene tornillería y jaladera de acero galvanizado, dieléctricas y auto extinguibles</strong>. Está fabricada en concreto polimérico de alta resistencia reforzada con fibra de vidrio." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/Aro_y_Tapa_84.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipos de aro y tapa" +
        "</div>" +
        "<a href='pdf/Electricidad/Aro y Tapa 84/Aro y Tapa 84-A.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Aro y Tapa 84-A&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Electricidad/Aro y Tapa 84/Aro y Tapa 84-B.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Aro y Tapa 84-B&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = aroYtapa84;
}
//Aro y tapa 84
function RegistroBajaTension(){
    var registroBajaTension = "";
    registroBajaTension = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Registro de Baja Tensión:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Registro de baja tensión</strong> con cuerpo y marco prefabricados en plástico reforzado con fibra de vidrio y tapa de concreto polimérico de alta resistencia reforzada con fibra de vidrio." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/TN-RBTC-CC-1.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipos de registros" +
        "</div>" +
        "<a href='pdf/Electricidad/Registro Baja tensión/TN-RBTC-CC-1.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "TN-RBTC-CC-1&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Electricidad/Registro Baja tensión/TN-RBTC-CC-2.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "TN-RBTC-CC-2&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = registroBajaTension;
}
//Registro de baja tensión
function RegistroAlumbrado(){
    var registroAlumbrado = "";
    registroAlumbrado = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Registro de alumbrado:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Registro de alumbrado</strong> con cuerpo y marco prefabricados en plástico reforzado con fibra de vidrio y tapa de concreto polimérico de alta resistencia reforzada con fibra de vidrio. Resiste carga peatonal" +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/RegistroDeAlumbrado.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipos de registros" +
        "</div>" +
        "<a href='pdf/Electricidad/Registro de alumbrado/40 x 40 x 40 cm.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "40 x 40 x 40 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Electricidad/Registro de alumbrado/40 x 40 x60 cm.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "40 x 40 x60 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = registroAlumbrado;
}
//Registro de alumbrado
function TapaRegistroBT(){
    var tapaRegistroBT = "";
    tapaRegistroBT = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Tapa para registro baja tensión:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Tapa para registro baja tensión fabricada con concreto polimérico de alta resistencia y reforzada con fibra de vidrio</strong>. Cuenta con pernos de acero inoxidable." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/TN-RBTB-2.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipo de tapa para registros" +
        "</div>" +
        "<a href='pdf/Electricidad/Tapa para registro baja tensión/TN-RBTC-2.pdf' target='_blank' class='standardMenuElements'>" +
            "<div class='standardAlignText'>" +
                "TN-RBTC-2&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = tapaRegistroBT;
}
//Tapa para registro baja tensión
/*Electricidad*/




function PlacasMinusvalidos(){
    var placasM = "";
    placasM = 
    "<div id='productTextContainer3'>" +
        "<div id='individualProductTitle3'>" +
            "Placas para minusválidos:" +
        "</div>" +
        "<div id='SText3'>" +
            "<strong style='font-weight: bold;'>Placa para minusválidos</strong> fabricada en concreto polimérico de alta resistencia reforzada con fibra de vidrio, color azul con logo internacional en color blanco." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3'>" +
        "<img src='img/PlacaMinusvalidos.png' alt='product_image' id='productImageWidth3'>" +
    "</div>" +
    "<div id='standardMenu3'>" +
        "<div id='standardMenuMain3'>" +
            "Tamaños de placa" +
        "</div>" +
        "<a href='pdf/Construccion/Placas Minusvalidos/40 x 40 cm.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "40 x 40 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Construccion/Placas Minusvalidos/60 x 60 cm.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" + 
                "60 x 60 cm&nbsp;&nbsp;" + 
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3").innerHTML = placasM;
}
//Placas para minusválidos
function RegistroSanitario(){
    var registroS = "";
    registroS = 
    "<div id='productTextContainer3'>" +
        "<div id='individualProductTitle3'>" +
            "Registro sanitario:" +
        "</div>" +
        "<div id='SText3'>" +
            "<strong style='font-weight: bold;'>Registro sanitario domiciliario</strong> con cuerpo prefabricado en plástico reforzado con fibra de vidrio y tapa hecha de concreto polimérico de alta resistencia, reforzada con fibra de vidrio." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3'>" +
        "<img src='img/Registro Sanitario domiciliario.png' alt='product_image' id='productImageWidth3'>" +
    "</div>" +
    "<div id='standardMenu3'>" +
        "<div id='standardMenuMain3'>" +
            "Tipo de registro sanitario" +
        "</div>" +
        "<a href='pdf/Construccion/Registro Sanitario/Registro Sanitario domiciliario.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "Registro Sanitario domiciliario&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3").innerHTML = registroS;
}
//Placas para minusválidos
function TapaCisterna(){
    var tapaC = "";
    tapaC = 
    "<div id='productTextContainer3'>" +
        "<div id='individualProductTitle3'>" +
            "Tapa para cisterna:" +
        "</div>" +
        "<div id='SText3'>" +
            "<strong style='font-weight: bold;'>Tapa para cisterna</strong> con marco y tapa fabricados en concreto polimérico de alta resistencia reforzados con fibra de vidrio." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay3'>" +
        "<img src='img/TapaParaCisterna.png' alt='product_image' id='productImageWidth3'>" +
    "</div>" +
    "<div id='standardMenu3'>" +
        "<div id='standardMenuMain3'>" +
            "Tamaños de tapa" +
        "</div>" +
        "<a href='pdf/Construccion/Tapa para cisterna/50 x 50 cm.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "50 x 50 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Construccion/Tapa para cisterna/60 x 60 cm.pdf' target='_blank' class='standardMenuElements3'>" +
            "<div class='standardAlignText'>" +
                "60 x 60 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct3").innerHTML = tapaC;
}
//Placas para minusválidos
/*Construcción*/




function ColaderaIndHig(){
    var ColIndHig = "";
    ColIndHig = 
    "<div id='productTextContainer6Big'>" +
        "<div id='individualProductTitle6Big'>" +
            "Coladeras Industriales Higiénicas:" +
        "</div>" +
        "<div id='SText6Big'>" +
            "<strong style='font-weight: bold;'>Los drenajes higiénicos de ACO utilizan coladeras de acero inoxidable que cumplen con los mas estrictos requerimientos de higiene para prevenir la contaminación bacterial</strong>. Se utilizan los principios de diseño higiénico que se aplican a los equipos de procesos de alimentos (documentos N° 8, 13 y 44 de EHEDG) incluso para los drenajes de las cocinas y restaurantes." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6Big'>" +
        "<img src='img/coladerasIndustrialesHigiénicas1.png' alt='product_image' style='width: 100%; margin: 5%;'>" +
        "<img src='img/coladerasIndustrialesHigiénicas2.png' alt='product_image' style='width: 35%; margin: 5%;'>" +
    "</div>" +
    "<div id='standardMenu6Big'>" +
        "<div id='standardMenuMain6Big'>" +
            "Catalogo Coladeras" +
        "</div>" +
        "<a href='pdf/Drenaje industrial/Coladeras Industriales Higienicas/Industriales Higienicas.pdf' target='_blank' class='standardMenuElements6Big'>" +
            "<div class='standardAlignText'>" +
                "Industriales Higiénicas&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6Big").innerHTML = ColIndHig;
}
//Coladeras Industriales Higienicas
/* font-family: 'Open Sans Condensed', sans-serif; */
function CanalIndHig(){
    var canalIndHig = ""; 
    canalIndHig = 
    "<div id='productTextContainer6Big'>" +
        "<div id='individualProductTitle6Big'>" +
            "Canales Industriales Higiénicos:" +
        "</div>" +
        "<div id='SText6Big'>" +
            "<strong style='font-weight: bold;'>Los canales higiénicos de acero inoxidable ACO incluyen un rango de canales para todas las aplicaciones y pisos comerciales típicos</strong>, pudiendo escojer el largo del canal, el ancho de la ranura, la profundidad y posición de las salidas y el tipo de rejilla o tapa. <strong style='font-weight: bold;'>El portafolio esta diseñado con un gran enfasis en los requirimientos de diseño higienico</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6Big'>" +
        "<img src='img/CanalesIndustrialesHigienicos.png' alt='product_image' style='width: 70%; margin: 5%;'>" +
        "<img src='img/CanalesIndustrialesHigienicos1.png' alt='product_image' style='width: 50%; margin: 5%;'>" +
        "<img src='img/CanalesIndustrialesHigienicos2.png' alt='product_image' style='width: 50%; margin: 5%;'>" +
    "</div>" +
    "<div id='standardMenu6Big'>" +
        "<div id='standardMenuMain6Big'>" +
            "Catalogo Canales" +
        "</div>" +
        "<a href='pdf/Drenaje industrial/Canales Industriales Higienicos/Industriales Higienicos.pdf' target='_blank' class='standardMenuElements6Big'>" +
            "<div class='standardAlignText'>" +
                "Industriales Higiénicos&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6Big").innerHTML = canalIndHig;
}
//Canales Industriales Higiénicos
function CanalIndRan(){
    var canalIndRan = "";
    canalIndRan = 
    "<div id='productTextContainer6Big'>" +
        "<div id='individualProductTitle6Big'>" +
            "Canales Industriales Ranurados:" +
        "</div>" +
        "<div id='SText6Big'>" +
            "<strong style='font-weight: bold;'>Los canales ranurados de acero inoxidable ACO incluyen un rango de canales para todas las aplicaciones y pisos comerciales típicos</strong>, pudiendo escojer el largo del canal, el ancho de la ranura, la profundidad y posición de las salidas y el tipo de rejilla o tapa. <strong style='font-weight: bold;'>El portafolio esta diseñado con un gran enfasis en los requirimientos de diseño higienico</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6Big'>" +
        "<img src='img/CanalesIndustrialesRanurados.png' alt='product_image' style='width: 70%; margin: 5%;'>" +
        "<img src='img/CanalesIndustrialesRanurados1.png' alt='product_image' style='width: 75%; margin: 5%;'>" +
        "<img src='img/CanalesIndustrialesRanurados2.png' alt='product_image' style='width: 60%; margin: 5%;'>" +
    "</div>" +
    "<div id='standardMenu6Big'>" +
        "<div id='standardMenuMain6Big'>" +
            "Catalogo Canales" +
        "</div>" +
        "<a href='pdf/Drenaje industrial/Canal Industrial Ranurado/Industriales Ranurados.pdf' target='_blank' class='standardMenuElements6Big'>" +
            "<div class='standardAlignText'>" +
                "Industriales Ranurados&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6Big").innerHTML = canalIndRan;
}
//Canales Industriales Ranurados
function TuberiaAcero(){
    var tubAc = "";
    tubAc = 
    "<div id='productTextContainer6Big'>" +
        "<div id='individualProductTitle6Big'>" +
            "Tubería de Acero Inoxidable:" +
        "</div>" +
        "<div id='SText6Big'>" +
            "<strong style='font-weight: bold;'>Ideal para agua gris y negra, así como agua de lluvia y para el drenaje industrial. Cuando se usa con los sistemas de coladeras y canales ACO, las tuberías se convierten en una solución unica y compleja para el drenaje industrial</strong>. Están disponibles en diametros externos de 50, 75, 110, 125, 160, 200, 250 y 315 mm con longidudes desde 0.15 hasta 6 metros para ayudar con un ensamble práctico y fácil." + 
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6Big'>" +
        "<img src='img/tubAc2.png' alt='product_image' style='width: 40%; margin: 5%;'>" +
        "<img src='img/tubAc.png' alt='product_image' style='width: 60%; margin: 5%;'>" +
        "<img src='img/tubAc3.png' alt='product_image' style='width: 40%; margin: 5%;'>" +
    "</div>" +
    "<div id='standardMenu6Big'>" +
        "<div id='standardMenuMain6Big'>" +
            "Catalogo Tubería" +
        "</div>" +
        "<a href='pdf/Drenaje industrial/Tubería acero Inoxidable/Acero inoxidable.pdf' target='_blank' class='standardMenuElements6Big'>" +
            "<div class='standardAlignText'>" +
                "Acero inoxidable&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6Big").innerHTML = tubAc;
}
//Tubería de acero inoxidable
function InstalacionTip(){
    var instalT = "";
    instalT = 
    "<div id='productTextContainer6Big'>" +
        "<div id='individualProductTitle6Big'>" +
            "Instalaciones típicas:" +
        "</div>" +
        "<div id='SText6Big'>" +
            "<strong style='font-weight: bold;'>La instalación del drenaje es crucial para un buen funcionamiento del sistema así como evitar la generación de grietas en el piso</strong>. En el PDF anexo encontrarán algunas intlaciones típicas considerando diferentes tipos de pisos y acabados." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6Big'>" +
        "<img src='img/instalTip1.png' alt='product_image' style='width: 60%; margin: 5%;'>" +
        "<img src='img/instalTip2.png' alt='product_image' style='width: 60%; margin: 5%;'>" +
        "<img src='img/instalTip3.png' alt='product_image' style='width: 60%; margin: 5%;'>" +
    "</div>" +
    "<div id='standardMenu6Big'>" +
        "<div id='standardMenuMain6Big'>" +
            "Manual" +
        "</div>" +
        "<a href='pdf/Drenaje industrial/Instalaciones típicas/Instalaciones Típicas.pdf' target='_blank' class='standardMenuElements6Big'>" +
            "<div class='standardAlignText'>" +
                "Instalaciones Típicas&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6Big").innerHTML = instalT;
}
//Instalaciones típicas
function MetodoLimp(){
    var metLimp = "";
    metLimp = 
    "<div id='productTextContainer6Big'>" +
        "<div id='individualProductTitle6Big'>" +
            "Métodos de limpieza:" +
        "</div>" +
        "<div id='SText6Big'>" +
            "<strong style='font-weight: bold;'>Una Limpieza efectiva del drenaje en las áreas de preparación de alimentos reduce el riesgo de contaminación y desperdicio de alimento durante  la preparación, el proceso y almacenamiento</strong>. El principal objetivo de la limpieza es remover los solidos para obtener un superficie limpia y por lo tanto reducir el numero de microoorganismos. <strong style='font-weight: bold;'>Una mayor reducción de microorganismos puede ser obtenida con una desinfección</strong>." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay6Big'>" +
        "<img src='img/MetodoLimpieza1.png' alt='product_image' style='width: 60%; margin: 5%;'>" +
        "<img src='img/MetodoLimpieza2.png' alt='product_image' style='width: 60%; margin: 5%;'>" +
        "<img src='img/MetodoLimpieza3.png' alt='product_image' style='width: 60%; margin: 5%;'>" +
    "</div>" +
    "<div id='standardMenu6Big'>" +
        "<div id='standardMenuMain6Big'>" +
            "Manual" +
        "</div>" +
        "<a href='pdf/Drenaje industrial/Instalaciones típicas/Instalaciones Típicas.pdf' target='_blank' class='standardMenuElements6Big'>" +
            "<div class='standardAlignText'>" +
                "Métodos de limpieza&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct6Big").innerHTML = metLimp;
}
//Métodos de limpieza
/*Drenaje Industrial*/




function PozoManhole(){
    var pozoM = "";
    pozoM = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Pozo Manhole:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Pozo manhole con cuerpo prefabricado de plástico reforzado con fibra de vidrio</strong>. Tapa y aro hechas de concreto polimérico de alta resistencia." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/registroHandHole.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipos de pozo" +
        "</div>" +
        "<a href='pdf/Telefonia/Manhole/Pozo Handhole.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Pozo Handhole&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Telefonia/Manhole/Pozo Manhole.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Pozo Manhole&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Telefonia/Manhole/Pozo Minimanhole.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Pozo Minimanhole&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = pozoM;
}
//Pozo Manhole
function PozoConico(){
    var pozoC = "";
    pozoC = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Pozo Cónico:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Pozo cónico con cuerpo prefabricado de plástico reforzado con fibra de vidrio</strong>. Tapa, brocal y aro hechas de concreto polimérico de alta resistencia." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/pozoMiniConico.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipos de pozo" +
        "</div>" +
        "<a href='pdf/Telefonia/Pozo conico/Pozo Cónico Chico.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Pozo Cónico Chico&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Telefonia/Pozo conico/Pozo Cónico Grande.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Pozo Cónico Grande&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Telefonia/Pozo conico/Pozo Minicónico 50 x 60 cm.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Pozo Minicónico <br> 50 x 60 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
        "<a href='pdf/Telefonia/Pozo conico/Pozo Minicónico 50 x 70 cm.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Pozo Minicónico <br> 50 x 70 cm&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = pozoC;
}
//Pozo Cónico
function Registro3Tubo(){
    var registro3T = "";
    registro3T = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Registro Tritubo:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Registro tritubo con cuerpo prefabricado de plástico reforzado con fibra de vidrio</strong>, adaptador de concreto polimérico de alta resistencia y tapa cuadrada con dos hojas independientes superpuestas con dos tornillos para su cierre." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/registroTritubo.png' alt='product_image' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tipos de registro" +
        "</div>" +
        "<a href='pdf/Telefonia/Registro tritubo/Registro Tritubo.pdf' target='_blank' class='standardMenuElements4'>" +
            "<div class='standardAlignText'>" +
                "Registro Tritubo&nbsp;&nbsp;" +
                "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
            "</div>" +
        "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = registro3T;
}
//Registro tritubo
function TapasTelmex(){
    var tapasT = "";
    tapasT = 
    "<div id='productTextContainer4'>" +
        "<div id='individualProductTitle4'>" +
            "Tapas:" +
        "</div>" +
        "<div id='SText4'>" +
            "<strong style='font-weight: bold;'>Tapa para pozo fabricada con concreto polimérico de alta resistencia y reforzada con fibra de vidrio</strong>, incluye logo de TELMEX." +
        "</div>" +
    "</div>" +
    "<div id='productImageDisplay4'>" +
        "<img src='img/tapaGrande.png' alt='tapaGrande' id='productImageWidth4'>" +
        "<img src='img/tapaPasoVehicular.png' alt='tapaPasoVehicular' id='productImageWidth4'>" +
        "<img src='img/tapaGrande.png' alt='tapaGrande' id='productImageWidth4'>" +
    "</div>" +
    "<div id='standardMenu4'>" +
        "<div id='standardMenuMain4'>" +
            "Tapas TELMEX" +
        "</div>" +
        "<a href='pdf/Telefonia/Tapas/Tapa chica.pdf' target='_blank' class='standardMenuElements4'>" +
                "<div class='standardAlignText'>" +
                    "Tapa chica&nbsp;&nbsp;" +
                    "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
                "</div>" +
            "</a>" +
            "<a href='pdf/Telefonia/Tapas/Tapa grande.pdf' target='_blank' class='standardMenuElements4'>" +
                "<div class='standardAlignText'>" +
                    "Tapa grande&nbsp;&nbsp;" +
                    "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
                "</div>" +
            "</a>" +
            "<a href='pdf/Telefonia/Tapas/Tapa rectangular para arroyo.pdf' target='_blank' class='standardMenuElements4'>" +
                "<div class='standardAlignText'>" +
                    "Tapa rectangular para arroyo&nbsp;&nbsp;" +
                    "<img src='img/pdf.svg' alt='menu icon' width='18%'>" +
                "</div>" +
            "</a>" +
    "</div>";
    document.getElementById("displayProduct4").innerHTML = tapasT;
}
//Registro tritubo
/*Telefonía*/




function Airoxy(){
    var airoxy = "";
    airoxy = 
    "<div id='productTextButtonContainer7'>" +
        "<div id='productTextContainer7'>" +
            "<div id='individualProductTitle7'>" +
                "Tecnología Airoxy:" +
            "</div>" +
            "<div id='SText7'>" +
                "<strong style='font-weight: bold;'>Novedoso sistema que mantiene todo el proceso en un mismo contenedor: <br></strong>" +
                "<div class='listElement7'>" +
                    "<div style='width: 1vw; display: flex; align-self: flex-start; padding-top: 2%;'>" +
                        "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                    "</div>" +
                    "<div style='width: 97%;'>" +
                        "&nbsp;&nbsp;Permite mayor rendimiento de espacio." +
                    "</div>" +
                "</div>" +
                "<div class='listElement7'>" +
                    "<div style='width: 1vw; display: flex; align-self: flex-start; padding-top: 2%;'>" +
                        "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                    "</div>" +
                    "<div style='width: 97%;'>" +
                        "&nbsp;&nbsp;Proceso automatizado y probado bajo normas mundiales." +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>" +
        "<div id='productImage1Display7'>" +
            "<img src='img/TecnologiaAiroxy.png' alt='product_image' style='width: 100%;'>" +
        "</div>" +
        "<div id='productImage2Display7'>" +
            "<img src='img/TecnologiaAiroxy2.png' alt='product_image' style='width: 100%;'>" +
        "</div>" +
    "</div>" +
    "<a  id='standardButtonLink' href='https://www.youtube.com/watch?v=PN348oOq134' target='_blank'>" +
        "<div style='display: flex; justify-content: center; align-items: center;'>" +
            "Video explicativo" +
        "</div>" +
    "</a>";
    document.getElementById("displayProduct7").innerHTML = airoxy;
}
//Airoxy
function DesyPotAgua(){
    var DPAgua = "";
    DPAgua = 
    "<div id='productTextButtonContainer7Type2'>" +
        "<div id='productTextContainer7Type2'>" +
            "<div id='individualProductTitle7Type2'>" +
                "Desalinización y Potabilización de Agua:" +
            "</div>" +
            "<div id='SText7Type2'>" +
                "<strong style='font-weight: bold;'>Los sistemas de ósmosis inversa de Pure Aqua son capaces de eliminar las sales, así como otras impurezas tales como bacterias, azúcares, proteínas, colorantes y componentes que tienen un peso molecular mayor de 150-250 Daltons</strong>. Pure Aqua suministra una línea completa de sistemas de ósmosis inversa estándar y personalizables, todos los cuales están diseñados utilizando el software de diseño de 3D modelado informático y el proceso computarizado avanzado para soluciones precisas y personalizadas." +
                "<div class='listElement7Type2'>" +
                    "<div style='width: 1vw; display: flex; align-self: flex-start; padding-top: 2%;'>" +
                        "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                    "</div>" +
                    "<div style='width: 97%;'>" +
                        "&nbsp;&nbsp;Agua de mar, alta salinidad de 10,000 a 50,000 ppm" +
                    "</div>" +
                "</div>" +
                "<div class='listElement7Type2'>" +
                    "<div style='width: 1vw; display: flex; align-self: flex-start; padding-top: 2%;'>" +
                        "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                    "</div>" +
                    "<div style='width: 97%;'>" +
                        "&nbsp;&nbsp;Agua salobre, mediana salinidad de 4,500 a 10,000 ppm" +
                    "</div>" +
                "</div>" +
                "<div class='listElement7Type2'>" +
                    "<div style='width: 1vw; display: flex; align-self: flex-start; padding-top: 2%;'>" +
                        "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                    "</div>" +
                    "<div style='width: 97%;'>" +
                        "&nbsp;&nbsp;Agua salobre, baja salinidad menor a 4,500 ppm" +
                    "</div>" +
                "</div>" +
                "<strong style='font-weight: bold;'>Agua dulce, salobre o de mar, transformada en agua 100% potable</strong>." +
            "</div>" +
        "</div>" +
        "<div id='productImage1Display7Type2'>" +
            "<img src='img/Desalinización_Potabilización_de_Agua.png' alt='product_image' style='width: 100%;'>" +
        "</div>"
    "</div>";
    document.getElementById("displayProduct7").innerHTML = DPAgua;
}
//Desalinización y Potabilización de Agua
function RecupControl(){
    var rControl = "";
    rControl = 
    "<div id='individualProductTitle7Type3'>"+
        "Servicio de Diseño para Recuperación de Agua de Lluvia y Control de Tormentas: " +
    "</div>" +
    "<div id='productTextContainer7Type3'>" +
        "<div id='SText7Type3'>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Sistema para tratamiento de agua de lluvia." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Control de calidad de drenaje pluvial-basura, sedimentos y remoción de hidrocarburos." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Modernización y reordenamiento urbano." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Manejo de aguas  pluviales." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Drenaje sanitario y riego." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Manejo de escurrimientos pluviales." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Estabilización de suelo contra erosión." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div id='specialListIndex'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Pretratamiento para filtraciones, detención/infiltración, biorretención, sistemas de almacenamiento de aguas pluviales, diseños de bajo impacto ambiental." +
                "</div>" +
            "</div>" +
        "</div>" +
        "<div id='productImage1Display7Type3'>" +
            "<img src='img/RecuperaciónAguaLluviaControlTormentas.png' alt='product_image' style='width: 100%;'>" +
        "</div>" +
    "</div>";
    document.getElementById("displayProduct7").innerHTML = rControl;
}
//Diseño para recuperación y control
function Oxyfix(){
    var oxyFix = "";
    oxyFix = 
    "<div id='productTextButtonContainer7'>" +
        "<div id='productTextContainer7'>" +
            "<div id='individualProductTitle7'>" +
                "Tecnología Oxyfix:" +
            "</div>" +
            "<div id='SText7'>" +
                "<strong style='font-weight: bold;'>Oxyfix es un sistema de soporte bacteriano que logra obtener mayor producción de bacterias, logrando una mayor limpieza de agua en menor espacio y tiempo</strong>. Únicos en el mercado." +
            "</div>" +
        "</div>" +
        "<div id='productImage1Display7'>" +
            "<img src='img/oxyfix1.png' alt='product_image' style='width: 60%;'>" +
        "</div>" +
        "<div id='productImage2Display7'>" +
            "<img src='img/oxyfix2.png' alt='product_image' style='width: 60%;'>" +
        "</div>" +
    "</div>" +
    "<a  id='standardButtonLink' href='https://www.youtube.com/watch?v=-1mAJ-79lmU' target='_blank'>" +
        "<div style='display: flex; justify-content: center; align-items: center;'>" +
            "Video explicativo" +
        "</div>" +
    "</a>";
    document.getElementById("displayProduct7").innerHTML = oxyFix;
}
//Oxyfix
function TratAguasGrises(){
    var tratAguasG = "";
    tratAguasG = 
    "<div id='individualProductTitle7Type3'>"+
        "Sistemas de Tratamiento de Aguas Grises: " +
    "</div>" +
    "<div id='productTextContainer7Type3'>" +
        "<div id='SText7Type3'>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Planta <strong style='font-weight: bold;'>ENSAMBLADA y PROBADA</strong> en fábrica. Solución <strong style='font-weight: bold;'>PLUG&PLAY</strong>." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "<strong style='font-weight: bold;'>ARMARIO CERRADO</strong> con llave de seguridad para evitar manipulaciones por personal no autorizado." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Sistema de <strong style='font-weight: bold;'>MEMBRANAS DE ULTRAFILTRACIÓN</strong> diseñado para altas cargas TSS." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Tecnologías de <strong style='font-weight: bold;'>FILTRACIÓN MECÁNICA</strong>, sin olores, generación de residuos, ni ruidos molestos." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Pretratamiento exclusivo <strong style='font-weight: bold;'>AZUD HELIX AUTOMATIC AA</strong>, especialmente diseñados para sólidos filamentosos." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Instalación <strong style='font-weight: bold;'>RÁPIDA y SENCILLA</strong>." +
                "</div>" +
            "</div>" +
            "<div class='listElement7Type3'>" +
                "<div style='width: 1vw; display: flex; align-self: flex-start; margin-right: 1%'>" +
                    "<img src='img/drop.svg' alt='menu icon' width='100%'>" +
                "</div>" +
                "<div style='width: 95%;'>" +
                    "Sistema de <strong style='font-weight: bold;'>LIMPIEZA</strong> de filtros y membranas de <strong style='font-weight: bold;'>ALTA EFICIENCIA</strong>, gracias al uso combinado de agua/aire. <strong style='font-weight: bold;'>SENCILLEZ</strong> de operación y mantenimiento." +
                "</div>" +
            "</div>" +
        "</div>" +
        "<div id='productImage1Display7Type3'>" +
            "<img src='img/tratAguasGrises.png' alt='product_image' style='width: 100%;'>" +
        "</div>" +
    "</div>";
    document.getElementById("displayProduct7").innerHTML = tratAguasG;
}
//Tratamiento de aguas grises
function TratFisQuim(){
    var tratFQ = "";
    tratFQ = 
    "<div id='productTextButtonContainer7'>" +
        "<div id='productTextContainer7'>" +
            "<div id='individualProductTitle7'>" +
                "Tratamiento Físico Químico:" +
            "</div>" +
            "<div id='SText7'>" +
                "<strong style='font-weight: bold;'>Toro Equipment es líder europeo en el diseño y fabricación de equipos para el tratamiento de aguas residuales industriales y urbanas</strong>, aguas de proceso, aguas de abastecimiento, reutilización de aguas  y tratamiento de lodos. Experiencia de más de 20 años, <strong style='font-weight: bold;'>en la actualidad ofrecemos soluciones personalizadas tanto en el sector privado como en el sector público</strong>. Nuestros equipos se han suministrado en más de 45 países del mundo y más del 70% de la facturación proviene de los mercados internacionales." +
            "</div>" +
        "</div>" +
        "<div id='productImage1Display7'>" +
            "<img src='img/tratFisQuim1.png' alt='product_image' style='width: 100%;'>" +
        "</div>" +
        "<div id='productImage2Display7'>" +
            "<img src='img/tratFisQuim3.png' alt='product_image' style='width: 100%;'>" +
        "</div>" +
    "</div>";
    document.getElementById("displayProduct7").innerHTML = tratFQ;
}
//Tratamiento Físico Químico
function PtarPot(){
    var PTARpot = "";
    PTARpot = 
    "<div id='productTextButtonContainer7Type2'>" +
        "<div id='productTextContainer7Type2'>" +
            "<div id='individualProductTitle7Type2'>" +
                "Sistema Industrial RO Agua Salobre:" +
            "</div>" +
            "<div id='SText7Type2'>" +
                "<strong style='font-weight: bold;'>Los sistemas de ósmosis inversa de Pure Aqua son capaces de eliminar las sales, así como otras impurezas tales como bacterias, azúcares, proteínas, colorantes y componentes que tienen un peso molecular mayor de 150-250 Daltons</strong>. Pure Aqua suministra una línea completa de sistemas de ósmosis inversa estándar y personalizables, todos los cuales están diseñados utilizando el software de diseño de 3D modelado informático y el proceso computarizado avanzado para soluciones precisas y personalizadas." +
            "</div>" +
        "</div>" +
        "<div id='productImage1Display7Type2'>" +
            "<img src='img/ptarPot1.png' alt='product_image' style='width: 90%;'>" +
        "</div>"
    "</div>";
    document.getElementById("displayProduct7").innerHTML = PTARpot;
}
//PTAR potabilizadora
/*Plantas de Tratamiento*/