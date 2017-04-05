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
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");

        if (centroX > 0 && centroY < 14) {
            child = celula[centroX - 1 + (centroY * 10)].childElementCount;
            child = child + celula[centroX - 11 + (centroY * 10)].childElementCount;
            if (child === 0) {
                centroX = centroX - 1;
                this.mostrar();
            }

        }

    };

    this.moverDireita = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        if (centroX < 8 && centroY < 14) {
            child = celula[centroX + 2 + (centroY * 10)].childElementCount;
            child = child + celula[centroX - 8 + (centroY * 10)].childElementCount;
            if (child === 0) {
                centroX = centroX + 1;
                this.mostrar();
            }
        }

    };

    this.moverBaixo = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        if (centroY < 14) {
            child = celula[centroX + (centroY * 10)+10].childElementCount;
            child = child + celula[centroX + 1 + (centroY * 10)+10].childElementCount;
            if (child === 0) {
                centroY = centroY + 1;
                this.mostrar();
            }
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

