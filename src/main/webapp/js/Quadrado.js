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
    var colisao = new Colisao();


    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var css = "width:" + (tamanho - 1) + "px;height:" + (tamanho - 1)
            + "px;background:" + cor + ";position:static;border: solid 1px;";

    div1.setAttribute("style", css);
    div2.setAttribute("style", css);
    div3.setAttribute("style", css);
    div4.setAttribute("style", css);




    this.mostrar = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");


        celula[centroX + centroY * 10].appendChild(div1);
        celula[centroX + 1 + centroY * 10].appendChild(div2);
        celula[centroX + (centroY - 1) * 10].appendChild(div3);
        celula[centroX + 1 + (centroY - 1) * 10].appendChild(div4);

    };

    this.moverEsquerda = function () {

        if (colisao.esquerda(centroY, centroX) &&
                colisao.esquerda(centroY - 1, centroX)) {
            centroX = centroX - 1;
            this.mostrar();
        }

    };

    this.moverDireita = function () {
        if (colisao.direita(centroY, centroX) &&
                colisao.direita(centroY - 1, centroX)) {
            centroX = centroX + 1;
            this.mostrar();
        }

    };

    this.moverBaixo = function () {
        if (colisao.baixo(centroY, centroX) &&
                colisao.baixo(centroY , centroX +1)) {

            centroY = centroY + 1;
            this.mostrar();
        }

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

