/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Cursor = function () {
    var linha = 0;
    var coluna = 0;
    var cor = "yellow";
    var cursor = document.createElement("div");
    var css = "width:" + 30 + "px;height:" + 30
            + "px;background:" + cor + ";position:static;border: solid 1px;";

    cursor.setAttribute("style", css);
    var pai = document.getElementById("tabelaPrincipal");

    this.moverEsquerda = function () {
        if (coluna > 0) {
            coluna = coluna - 1;
        }
        this.mostrar();
    };

    this.moverDireita = function () {
        if (coluna < 35) {
            coluna = coluna + 1;
        }
        this.mostrar();
    };

    this.moverBaixo = function () {
        if (linha < 18) {
            linha = linha + 1;
        }
        this.mostrar();
    };

    this.moverCima = function () {
        if (linha > 0) {
            linha = linha - 1;
        }
        this.mostrar();
    };

    this.mostrar = function () {
        var css = "width:" + 30 + "px;height:" + 30
                + "px;background:" + cor + ";position:static;border: solid 1px;";

        cursor.setAttribute("style", css);
        var celulas = pai.getElementsByTagName("td");
        celulas[coluna + linha * 35].appendChild(cursor);

    };
    this.mudarCor = function () {
        switch (cor) {
            case "yellow":
                cor = "aqua";
                break;

            case "aqua":
                cor = "orange";
                break;
            case "orange":
                cor = "purple";
                break;
            case "purple":
                cor = "green";
                break;
            case "green":
                cor = "gainsboro";
                break;
            case "gainsboro":
                cor = "yellow";
                break;

        }
        this.mostrar();

    };
    
    this.pintar = function () {
        var css = "width: 31px;height: 31px;border: 1px solid black;"+"px;background:" + cor;

        var celulas = pai.getElementsByTagName("td");
        celulas[coluna + linha * 35].setAttribute("style", css);
    };

};
