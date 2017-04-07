/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


T = function (coluna, linha) {
    var posicao = [];
    var centroX = coluna;
    var centroY = linha;
    var tamanho = 30;
    var cor = "purple";
    var orientacao = 4;
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
    posicao[3] = new Posicao(linha, coluna - 1, div2);
    posicao[2] = new Posicao(linha, coluna + 1, div3);
    posicao[1] = new Posicao(linha + 1, coluna, div4);



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
            if (colisao.esquerda(centroY, (centroX - 1)) && colisao.esquerda((centroY - 1), centroX)) {
                centroX = centroX - 1;
            }
            this.mostrar();
        } else if (orientacao === 2) {
            if (colisao.esquerda((centroY - 1), centroX) && colisao.esquerda(centroY, centroX) && colisao.esquerda((centroY + 1), centroX)) {
                centroX = centroX - 1;
            }
            this.mostrar();

        } else if (orientacao === 3) {
            if (colisao.esquerda(centroY, (centroX - 1)) && colisao.esquerda((centroY + 1), centroX)) {
                centroX = centroX - 1;
            }
            this.mostrar();


        } else if (orientacao === 4) {
            if (colisao.esquerda(centroY, (centroX - 1)) && colisao.esquerda((centroY - 1), centroX) && colisao.esquerda((centroY + 1), centroX)) {
                centroX = centroX - 1;
            }
            this.mostrar();
        }
    };


    this.moverDireita = function () {
        if (orientacao === 1) {
            if (colisao.direita((centroY - 1), centroX) && colisao.direita(centroY, (centroX + 1))) {
                centroX = centroX + 1;
            }
            this.mostrar();

        } else if (orientacao === 2) {
            if (colisao.direita((centroY - 1), centroX) && colisao.direita(centroY, (centroX + 1)) && colisao.direita((centroY + 1), centroX)) {
                centroX = centroX + 1;
            }
            this.mostrar();

        } else if (orientacao === 3) {
            if (colisao.direita((centroY + 1), centroX) && colisao.direita(centroY, (centroX + 1))) {
                centroX = centroX + 1;
            }
            this.mostrar();

        } else if (orientacao === 4) {
            if (colisao.direita((centroY - 1), centroX) && colisao.direita(centroY, centroX) && colisao.direita((centroY + 1), centroX)) {
                centroX = centroX + 1;
            }
            this.mostrar();
        }
    };


    this.moverBaixo = function () {
        if (orientacao === 1) {

            if (colisao.baixo(centroY, centroX) && colisao.baixo(centroY, centroX - 1) && colisao.baixo(centroY, centroX + 1)) {
                centroY = centroY + 1;
                this.mostrar();
                return true;
            }


        } else if (orientacao === 2) {

            if (colisao.baixo(centroY, centroX + 1) && colisao.baixo(centroY + 1, centroX)) {
                centroY = centroY + 1;
                this.mostrar();
                return true;
            }


        } else if (orientacao === 3) {
            if (colisao.baixo(centroY + 1, centroX) && colisao.baixo(centroY, centroX - 1) && colisao.baixo(centroY, centroX + 1)) {
                centroY = centroY + 1;
                this.mostrar();
                return true;
            }


        } else if (orientacao === 4) {

            if (colisao.baixo(centroY, centroX - 1) && colisao.baixo(centroY + 1, centroX)) {
                centroY = centroY + 1;
                this.mostrar();
                return true;
            }


        }
    };


    this.rodar = function () {
        //primeiro if verifica a orientacao, o segundo a posição das paredes pra poder rodar, e o 3 vai verificar pecas pra ver se ele pode rodar

        r = new Rotacao();
        posicao = r.horaria(posicao[0], posicao[2], posicao[1], posicao[3]);
        this.mostrar();
    };

    this.verificaColisao = function () {


    };

    this.posiciona = function (coluna, linha) {
        centroX = coluna;
        centroY = linha;

    };

};



