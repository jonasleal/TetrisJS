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

    this.mostrar = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");

        if (orientacao === 1) {

            posicao = centroX - 1 + centroY * 10;
            if (posicao >= 0) {
                celula[posicao].appendChild(div1);
            }

            posicao = centroX + centroY * 10;
            if (posicao >= 0) {
                celula[posicao].appendChild(div2);
            }

            posicao = centroX + 1 + centroY * 10;
            if (posicao >= 0) {
                celula[posicao].appendChild(div3);
            }

            posicao = (centroX + 2) + centroY * 10;
            if (posicao >= 0) {
                celula[posicao].appendChild(div4);
            }
        }


        if (orientacao === 2) {
            posicao = centroX + (centroY - 1) * 10;
            if (posicao >= 0) {
                celula[posicao].appendChild(div1);
            }

            posicao = centroX + centroY * 10;
            if (posicao >= 0) {
                celula[posicao].appendChild(div2);
            }

            posicao = centroX + (centroY + 1) * 10;
            if (posicao >= 0) {
                celula[posicao].appendChild(div3);
            }

            posicao = centroX + (centroY + 2) * 10;
            if (posicao >= 0) {
                celula[posicao].appendChild(div4);
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


        if (orientacao === 1) {

            if (centroY < 14 && centroY >= 1) {

                orientacao = orientacao + 1;

            }


        } else
        // Esse if verifica se o I quando em pé esta do lado da parede esquerda, ou direita, ou no chão    
        if (orientacao === 2) {

            if (centroY < 12 && centroX > 0 && centroX < 8) {

                orientacao = orientacao + 1;

            }
        }

        if (orientacao > 2) {

            orientacao = 1;
        }
        this.mostrar();

    };

    this.posiciona = function (coluna, linha) {
        centroX = coluna;
        centroY = linha;

    };
};