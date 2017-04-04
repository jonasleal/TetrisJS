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
    
    var xdiv1 = 0, ydiv1 = 0, xdiv2 = 0, ydiv2 = 0, xdiv3 = 0, ydiv3 = 0, xdiv4 = 0, ydiv4 = 0; 
    
    var div1 = document.createElement("div");
    
    ydiv1 = centroY;
    xdiv1 = centroX;
    
    div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv1) + "px;left:" + (xdiv1)
            + "px;position:absolute;border: solid 1px;");
    
    var div2 = document.createElement("div");
    
    ydiv2 = centroY + tamanho;
    xdiv2 = centroX;
    
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv2) + "px;left:" + (xdiv2)
            + "px;position:absolute;border: solid 1px;");
    
    var div3 = document.createElement("div");
    
    ydiv3 = centroY + (tamanho * 2);
    xdiv3 = centroX;
    
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv3) + "px;left:" + (xdiv3)
            + "px;position:absolute;border: solid 1px;");
    
    var div4 = document.createElement("div");
    
    ydiv4 = centroY + (tamanho * 2);
    xdiv4 = centroX + tamanho;
    
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+cor+";top:" + (ydiv4) + "px;left:" + (xdiv4)
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
        
    ydiv1 = centroY;
    xdiv1 = centroX;
    div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv1) + "px;left:" + (xdiv1)
            + "px;position:absolute;border: solid 1px;");
    
    ydiv2 = centroY + tamanho;
    xdiv2 = centroX;
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv2) + "px;left:" + (xdiv2)
            + "px;position:absolute;border: solid 1px;");
    
    ydiv3 = centroY +(tamanho * 2);
    xdiv3 = centroX;
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv3) + "px;left:" + (xdiv3)
            + "px;position:absolute;border: solid 1px;");
    
    ydiv4 = centroY + (tamanho * 2);
    xdiv4 = centroX + tamanho;
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+cor+";top:" + (ydiv4) + "px;left:" + (xdiv4)
            + "px;position:absolute;border: solid 1px;");

    };

    this.moverDireita = function () {
        
        centroX = centroX + tamanho;
        
    ydiv1 = centroY;
    xdiv1 = centroX;
    div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv1) + "px;left:" + (xdiv1)
            + "px;position:absolute;border: solid 1px;");
    
    ydiv2 = centroY + tamanho;
    xdiv2 = centroX;
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv2) + "px;left:" + (xdiv2)
            + "px;position:absolute;border: solid 1px;");
    
    ydiv3 = centroY +(tamanho * 2);
    xdiv3 = centroX;
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv3) + "px;left:" + (xdiv3)
            + "px;position:absolute;border: solid 1px;");
    
    ydiv4 = centroY + (tamanho * 2);
    xdiv4 = centroX + tamanho;
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+cor+";top:" + (ydiv4) + "px;left:" + (xdiv4)
            + "px;position:absolute;border: solid 1px;");

    };

    this.moverBaixo = function () {
        
        centroY = centroY + tamanho;
        
    ydiv1 = centroY;
    xdiv1 = centroX;
    div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv1) + "px;left:" + (xdiv1)
            + "px;position:absolute;border: solid 1px;");
    
    ydiv2 = centroY + tamanho;
    xdiv2 = centroX;
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv2) + "px;left:" + (xdiv2)
            + "px;position:absolute;border: solid 1px;");
    
    ydiv3 = centroY +(tamanho * 2);
    xdiv3 = centroX;
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv3) + "px;left:" + (xdiv3)
            + "px;position:absolute;border: solid 1px;");
    
    ydiv4 = centroY + (tamanho * 2);
    xdiv4 = centroX + tamanho;
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+cor+";top:" + (ydiv4) + "px;left:" + (xdiv4)
            + "px;position:absolute;border: solid 1px;");


    };

    this.rodar = function () {
       
      
       
       
       if(ydiv1 === (ydiv3 - (tamanho * 2) ) && xdiv1 === xdiv3){
            
            div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv1 + (tamanho * 2)) + "px;left:" + (xdiv1 + (tamanho * 2))
            + "px;position:absolute;border: solid 1px;");
        }
       
        if(ydiv2 === (ydiv3 - tamanho) && xdiv2 === xdiv3 ){
            
            div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv2 + tamanho) + "px;left:" + (xdiv2 + tamanho)
            + "px;position:absolute;border: solid 1px;");
        }
        
        if(ydiv4 === ydiv3 && xdiv4 === (xdiv3 + tamanho) ){
            
            div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:"+ cor +";top:" + (ydiv4 + tamanho) + "px;left:" + (xdiv4 - tamanho)
            + "px;position:absolute;border: solid 1px;");
        }
    };
    
};




