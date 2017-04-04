/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
L = function (x, y){
   
    var centroX = x;
    var centroY = y;
    var tamanho = 30;
    var cor = "orange";

    var div1 = document.createElement("div");
    div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    var div2 = document.createElement("div");
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY + tamanho) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    var div3 = document.createElement("div");
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY + (tamanho * 2)) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    var div4 = document.createElement("div");
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+cor+";top:" + (centroY + (tamanho * 2)) + "px;left:" + (centroX + tamanho)
            + "px;position:absolute;border: solid 1px;");

    

this.mostrar=function () {
    
    var div = document.getElementById("divPrincipal");
    
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4); 
};
    this.moverEsquerda = function () {
        
        centroX = centroX - tamanho;
        
        
    div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY + tamanho) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY + (tamanho * 2)) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+cor+";top:" + (centroY + (tamanho * 2)) + "px;left:" + (centroX + tamanho)
            + "px;position:absolute;border: solid 1px;");

    };

    this.moverDireita = function () {
        
        centroX = centroX + tamanho;
        
        div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY + tamanho) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY + (tamanho * 2)) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+cor+";top:" + (centroY + (tamanho * 2)) + "px;left:" + (centroX + tamanho)
            + "px;position:absolute;border: solid 1px;");

    };

    this.moverBaixo = function () {
        
        centroY = centroY + tamanho;
        
       div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY + tamanho) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (centroY + (tamanho * 2)) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    
    
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+cor+";top:" + (centroY + (tamanho * 2)) + "px;left:" + (centroX + tamanho)
            + "px;position:absolute;border: solid 1px;");

    };

    this.rodar = function () {
       
        if(div1.getAttribute("top") === (div3.getAttribute("top") - (tamanho/2) ) && div1.getAttribute("left") === div3.getAttribute("left")){
            
            div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (div1.getAttribute("top") + (tamanho* 2)) + "px;left:" + (div1.getAttribute("left") + (tamanho * 2))
            + "px;position:absolute;border: solid 1px;");
        }
        
        if(div2.getAttribute("top") === (div3.getAttribute("top") - tamanho) && div2.getAttribute("left") === div3.getAttribute("left") ){
            
            div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (div2.getAttribute("top") + tamanho) + "px;left:" + (div2.getAttribute("left") + tamanho)
            + "px;position:absolute;border: solid 1px;");
        }
        
        if(div4.getAttribute("top") === div3.getAttribute("top") && div4.getAttribute("left") === (div3.getAttribute("left") + tamanho) ){
            
            div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (div4.getAttribute("") + tamanho) + "px;left:" + (div4.getAttribute("left") - tamanho)
            + "px;position:absolute;border: solid 1px;");
        }
    };
    
};




