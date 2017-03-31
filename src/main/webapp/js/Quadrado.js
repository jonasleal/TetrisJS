/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Quadrado = function(x , y){
    var centroX = x;
    var centroY = y;
    var tamanho = 30;
    
    var div1 = document.createElement("div");
    div1.setAttribute("style","width:"+tamanho+"px;height:"+tamanho
            +"px;background:yellow;top:"+(centroY)+"px;left:"+(centroX)
            +"px;position:absolute");
    var div2 = document.createElement("div");
    div2.setAttribute("style","width:"+tamanho+"px;height:"+tamanho
            +"px;background:yellow;top:"+(centroY+tamanho)+"px;left:"+(centroX)
            +"px;position:absolute");
    var div3 = document.createElement("div");
    div3.setAttribute("style","width:"+tamanho+"px;height:"+tamanho
            +"px;background:yellow;top:"+(centroY)+"px;left:"+(centroX+tamanho)
            +"px;position:absolute");
    var div4 = document.createElement("div");
    div4.setAttribute("style","width:"+tamanho+"px;height:"+tamanho
            +"px;background:yellow;top:"+(centroY+tamanho)+"px;left:"+(centroX+tamanho)
            +"px;position:absolute");
    };
    Quadrado.prototype.mostrar = function () {
        var div = document.getElementById("divPrincipal");
        div.appendChild(div1);
    };


