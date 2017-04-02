/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Quadrado = function (x, y) {
    var centroX = x;
    var centroY = y;
    var tamanho = 30;
    var cor = "yellow";

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX)
            + "px;position:absolute;border: solid 1px;");
    div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX + tamanho)
            + "px;position:absolute;border: solid 1px;");
    div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX + tamanho)
            + "px;position:absolute;border: solid 1px;");



    this.mostrar = function () {
        var div = document.getElementById("divPrincipal");
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);
    };

    this.moverEsquerda = function () {
        centroX = centroX - tamanho;
        div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX)
                + "px;position:absolute;border: solid 1px;");
        div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX)
                + "px;position:absolute;border: solid 1px;");
        div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX + tamanho)
                + "px;position:absolute;border: solid 1px;");
        div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX + tamanho)
                + "px;position:absolute;border: solid 1px;");
    };

    this.moverDireita = function () {
        centroX = centroX + tamanho;
        div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX)
                + "px;position:absolute;border: solid 1px;");
        div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX)
                + "px;position:absolute;border: solid 1px;");
        div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX + tamanho)
                + "px;position:absolute;border: solid 1px;");
        div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX + tamanho)
                + "px;position:absolute;border: solid 1px;");
    };

    this.moverBaixo = function () {
        centroY = centroY + tamanho;
        div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX)
                + "px;position:absolute;border: solid 1px;");
        div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX)
                + "px;position:absolute;border: solid 1px;");
        div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX + tamanho)
                + "px;position:absolute;border: solid 1px;");
        div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX + tamanho)
                + "px;position:absolute;border: solid 1px;");
    };

    this.rodar = function () {

    };
    this.posiciona = function (x, y) {
        centroX = x;
        centroY = y;
        div1.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX)
                + "px;position:absolute;border: solid 1px;");
        div2.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX)
                + "px;position:absolute;border: solid 1px;");
        div3.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY) + "px;left:" + (centroX + tamanho)
                + "px;position:absolute;border: solid 1px;");
        div4.setAttribute("style", "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
                + "px;background:" + cor + ";top:" + (centroY + tamanho) + "px;left:" + (centroX + tamanho)
                + "px;position:absolute;border: solid 1px;");
    };
};
