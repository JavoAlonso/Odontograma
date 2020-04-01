$(document).ready(function () {

    console.log($(".diente").length);
    
    try {
        $.ajax({
            type: "get",
            url: "/conf.json",
            data: {},
            dataType: "Json",
            complete: function (c){
            },
            success: function (s) {
               loadDiente(s);
              // console.log(s);
               
            }
        });
    } catch (error) {
        alert("no cargo ajax");
    }
   

 function loadDiente(obj){
     for (let i = 0; i < $(".diente").length; i++) {
            obj.Default_dent[i]=$(".diente").eq(i);
     }
     cargarMuestras(obj);
     seleccionObjeto(obj);
 } 
 
 function seleccionObjeto(obj){
    var dienteS;
     $(".diente").click(function (e){
         e.preventDefault();
         dienteS= $(this);
         $("#m-diente-selected").modal('show');
         $("#m-diente-selected").find("span strong").text($(this).attr("accesskey"));
       //  $("#m-diente-selected").find("button").  
     });
     $("#m-diente-selected").find($(".btn-c")).click(function (e){
        e.preventDefault();
        $(this).attr({"background":obj.configuracion[1].color}); 
        $(this).attr({"data-dismiss":"modal"});
        switch ($(this).attr("accesskey")) {
            case "da":
               dienteS.find("img").attr({"style":"background-color: "+obj.configuracion[1].color+";"});
                break;
            case "ei":
                dienteS.find("img").attr({"style":"background-color: "+obj.configuracion[0].color+";"});
                    break;
            case "er":
                dienteS.find("img").attr({"style":"background-color: "+obj.configuracion[2].color+";"});
                    break;
                default:
                alert("no programado");
                break;
        }
    });
 }

 function cargarMuestras(obj){
    $("#div-muestras").html("");
     $("<div>",{"style":"width: "+obj.configuracion[0].muestra+";height: "+obj.configuracion[0].muestra+"; display: inline-block; border: solid 1px #bfbaba; background: "+obj.configuracion[0].color+";"}).appendTo($("#div-muestras").append($("<span>",{"class":"m-1","text":obj.configuracion[0].nombre})));
     $("<div>",{"style":"width: "+obj.configuracion[1].muestra+";height: "+obj.configuracion[1].muestra+"; display: inline-block; border: solid 1px #bfbaba; background: "+obj.configuracion[1].color+";"}).appendTo($("#div-muestras").append($("<span>",{"class":"m-1","text":obj.configuracion[1].nombre})));
     $("<div>",{"style":"width: "+obj.configuracion[2].muestra+";height: "+obj.configuracion[2].muestra+"; display: inline-block; border: solid 1px #bfbaba; background: "+obj.configuracion[2].color+";"}).appendTo($("#div-muestras").append($("<span>",{"class":"m-1","text":obj.configuracion[2].nombre})));
 }

 $("body").append($("<p>",{"text":"by : ING. JUAN JAVIER ALONSO RODRIGUEZ","class":"m-3"}));

});
