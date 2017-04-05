/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Quadrado = function (coluna, linha) {
    var centroX = coluna;
    var centroY = linha;
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

        posicao = (centroX + centroY * 10);
        if (posicao >= 0) {
            celula[posicao].appendChild(div1);
        }
        posicao = (centroX + 1 + centroY * 10);
        if (posicao >= 0) {
            celula[posicao].appendChild(div2);
        }
        posicao = (centroX + (centroY - 1) * 10);
        if(posicao >=  0){
            celula[posicao].appendChild(div3);
        }
        posicao = (centroX + 1 + (centroY - 1) * 10);
        if(posicao >= 0){
             celula[posicao].appendChild(div4);
        }
       

    };

    this.moverEsquerda = function () {

        if (colisao.esquerda(centroY, centroX) &&
                colisao.esquerda(centroY - 1, centroX)) {
            centroX = centroX - 1;
            this.mostrar();
        }

    };

    this.moverDireita = function () {
        if (colisao.direita(centroY, centroX + 1) &&
                colisao.direita(centroY - 1, centroX + 1)) {
            centroX = centroX + 1;
            this.mostrar();
        }

    };

    this.moverBaixo = function () {
        if (colisao.baixo(centroY, centroX) &&
                colisao.baixo(centroY, centroX + 1)) {

            centroY = centroY + 1;
            this.mostrar();
            return true;
        }
        return false;

    };

    this.rodar = function () {

    };
    this.posiciona = function (coluna, linha) {
        centroX = coluna;
        centroY = linha;
        
    };
};

