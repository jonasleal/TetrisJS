/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


T = function(x,y){
    var centroX = x;
    var centroY = y;
    var tamanho = 30;
    
    //Div 1 será a peça do meio e a peça de movimento
    var div1 = document.createElement("div");
    div1.setAttribute("style","width:"+(tamanho-1)+"px;height:"+(tamanho-1)+"px;background:purple;top:"+
            (centroY)+"px;left:"+(centroX)+"px;position:absolute;border: solid 1px");
    
    var div2 = document.createElement("div");
    div2.setAttribute("style","width:"+(tamanho-1)+"px;height:"+(tamanho-1)+"px;background:purple;top:"+
            (centroY+tamanho)+"px;left:"+(centroX)+"px;position:absolute;border: solid 1px");
    
    var div3 = document.createElement("div");
    
    div3.setAttribute("style","width:"+(tamanho-1)+"px;height:"+(tamanho-1)+"px;background:purple;top:"+
            (centroY)+"px;left:"+(centroX-tamanho)+"px;position:absolute;border: solid 1px");
    
    var div4= document.createElement("div");
    
    div4.setAttribute("style", "width:"+(tamanho-1)+"px;height:"+(tamanho-1)+"px;background:purple;top:"+
            (centroY)+"px;left:"+(centroX+tamanho)+"px;position:absolute;border: solid 1px");
    
    
    this.mostrar=function(){
        var div = document.getElementById("divPrincipal");
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);
    };
    
};



