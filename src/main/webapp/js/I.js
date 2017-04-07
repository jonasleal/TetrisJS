/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
I = function (coluna, linha) {
    var posicao = [];
    var centroX = coluna;
    var centroY = linha;
    var tamanho = 30;
    var cor = "aqua";
    var orientacao = 1;
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


    posicao[0] = new Posicao(linha, coluna, div1);
    posicao[1] = new Posicao(posicao[0].linha, posicao[0].coluna - 1, div2);
    posicao[2] = new Posicao(posicao[0].linha, posicao[0].coluna + 1, div3);
    posicao[3] = new Posicao(posicao[0].linha, posicao[0].coluna + 2, div4);

    this.mostrar = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celulas = tabela.getElementsByTagName("td");

        for (i = 0; i < 4; i++) {
            celula = (posicao[i].coluna + posicao[i].linha * 10);
            if (celula >= 0) {
                celulas[celula].appendChild(posicao[i].div);
            }
        }

    };

    this.moverEsquerda = function () {
        if (orientacao === 1) {

            if (colisao.esquerda(centroY, (centroX - 1))) {
                centroX = centroX - 1;
            }


            this.mostrar();


        } else if (orientacao === 2) {


            if (colisao.esquerda(centroY - 1, centroX) && colisao.esquerda(centroY, centroX) && colisao.esquerda(centroY + 1, centroX)
                    && colisao.esquerda(centroY + 2, centroX)) {
                centroX = centroX - 1;
            }
            this.mostrar();
        }
    };

    this.moverDireita = function () {

        if (orientacao === 1) {
            //if (centroX < 7 && centroY < 14) {

            if (colisao.direita(centroY, centroX + 2)) {

                centroX = centroX + 1;

            }

            this.mostrar();

        } else if (orientacao === 2) {
            //if (centroX < 9 && centroY < 12) {

            if (colisao.direita(centroY - 1, centroX) && colisao.direita(centroY, centroX) && colisao.direita(centroY + 1, centroX) &&
                    colisao.direita(centroY + 2, centroX)) {
                centroX = centroX + 1;
            }
            this.mostrar();


        }
    };

    this.moverBaixo = function () {
        if (orientacao === 1) {
            //if (centroY < 14) {

            if (colisao.baixo(centroY, centroX - 1) && colisao.baixo(centroY, centroX) && colisao.baixo(centroY, centroX + 1) &&
                    colisao.baixo(centroY, centroX + 2)) {
                centroY = centroY + 1;
                this.mostrar();
                return true;

            }


        }

        if (orientacao === 2) {
            //if (centroY < 12) {

            if (colisao.baixo(centroY + 2, centroX)) {
                centroY = centroY + 1;
                this.mostrar();
                return true;
            }
            return false;
        }




    };

    this.rodar = function () {
        r = new Rotacao();
        posicao = r.horaria(posicao[0], posicao[1], posicao[2], posicao[3]);
        this.mostrar();
    };

    this.posiciona = function (coluna, linha) {
        centroX = coluna;
        centroY = linha;

    };
};