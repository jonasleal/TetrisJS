/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


I = function (x, y) {
    var centroX = x;
    var centroY = y;
    var tamanho = 30;
    var cor = "aqua";


    // o primeiro div é o 2 pois ele está mais ao meio e é o centro para alinhar as outras peças

    var div1 = document.createElement("div");

    div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1) + "px;background:" + cor + ";top:" +
            (centroY) + "px; left:" + (centroX - tamanho) + "px;position:absolute;border: solid 1px");

    var div2 = document.createElement("div");
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1) + "px;background:" + cor + ";top:" +
            (centroY) + "px;left:" + (centroX) + "px;position:absolute;border: solid 1px");

    var div3 = document.createElement("div");
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1) + "px;background:" + cor + ";top:" +
            (centroY) + "px;left:" + (centroX + tamanho) + "px;position:absolute;border: solid 1px");

    var div4 = document.createElement("div");
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1) + "px;background:" + cor + ";top:" +
            (centroY) + "px;left:" + (centroX + (tamanho * 2)) + "px;position:absolute;border: solid 1px");

    this.mostrar = function () {
        var div = document.getElementById("divPrincipal");
        div.appendChild(div2);
        div.appendChild(div1);
        div.appendChild(div3);
        div.appendChild(div4);
    };


    this.moverEsquerda = function () {
        centroX = centroX - tamanho;


        div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1) + "px;background:" + cor + ";top:" +
                (centroY) + "px; left:" + (centroX - tamanho) + "px;position:absolute;border: solid 1px");


        div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1) + "px;background:" + cor + ";top:" +
                (centroY) + "px;left:" + (centroX) + "px;position:absolute;border: solid 1px");


        div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1) + "px;background:" + cor + ";top:" +
                (centroY) + "px;left:" + (centroX + tamanho) + "px;position:absolute;border: solid 1px");


        div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1) + "px;background:" + cor + ";top:" +
                (centroY) + "px;left:" + (centroX + (tamanho * 2)) + "px;position:absolute;border: solid 1px");

    };

    this.moverDireita = function () {
        centroX = centroX + tamanho;

        div1.setAttribute("style", "width:" + (tamanho - 1) + "px; height:" + (tamanho - 1) + "px; background:" + cor + ";top:" +
                (centroY) + "px; left:" + (centroX - tamanho) + "px; position:absolute; border: solid 1px");

        div2.setAttribute("style", "width:" + (tamanho - 1) + "px; height:" + (tamanho - 1) + "px; background:" + cor + ";top:" +
                (centroY) + "px; left:" + (centroX) + "px; position:absolute; border: solid 1px");

        div3.setAttribute("style", "width:" + (tamanho - 1) + "px; height:" + (tamanho - 1) + "px; background:" + cor + ";top:" +
                (centroY) + "px; left:" + (centroX + tamanho) + "px; position:absolute; border: solid 1px");

        div4.setAttribute("style", "width:" + (tamanho - 1) + "px; height:" + (tamanho - 1) + "px; background:" + cor + ";top:" +
                (centroY) + "px; left:" + (centroX + (tamanho * 2)) + "px; position:absolute; border: solid 1px");

    };



    this.moverBaixo = function () {
        centroY = centroY + tamanho;

        div1.setAttribute("style", "width:"+(tamanho - 1)+"px; height:"+(tamanho - 1)+"px; background:"+cor+"; top:"+
                (centroY)+"px; left:"+(centroX - tamanho)+"px; position: absolute; border: solid 1px");

        div2.setAttribute("style", "width:"+(tamanho - 1)+"px; height:"+(tamanho - 1)+"px; background:"+cor+"; top:"+
                (centroY)+"px; left:"+(centroX)+"px; position: absolute; border: solid 1px");
        
        div3.setAttribute("style", "width:"+(tamanho - 1)+"px; height:"+(tamanho - 1)+"px; background:"+cor+"; top:"+
                (centroY)+"px; left:"+(centroX + tamanho)+"px; position: absolute; border: solid 1px");
        
        div4.setAttribute("style", "width:"+(tamanho - 1)+"px; height:"+(tamanho - 1)+"px; background:"+cor+"; top:"+
                (centroY)+"px; left:"+(centroX + (tamanho*2))+"px; position: absolute; border: solid 1px");
        



    };
    
    
    this.rodar = function(){
     
        
    };
};


