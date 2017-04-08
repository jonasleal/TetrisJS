/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Quadrado = function (_coluna, _linha) {

    desenhaQuadrado = function (_linha, _coluna, _divs) {
        var desenho = [];

        desenho[0] = new Posicao(_linha, _coluna, _divs[0]);
        desenho[1] = new Posicao(_linha, _coluna + 1, _divs[1]);
        desenho[2] = new Posicao(_linha - 1, _coluna, _divs[2]);
        desenho[3] = new Posicao(_linha - 1, _coluna + 1, _divs[3]);

        return desenho;
    };
    //Aparencia
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

    //Localização
    var centroColuna = _coluna;
    var centroLinha = _linha;
    var posicao = desenhaQuadrado(centroLinha, centroColuna, [div1, div2, div3, div4]);


    //Interação
    var colisao = new Colisao();

    this.moverEsquerda = function () {
//        Verifica se o caminho esta livre para as peças da esquerda
//        de acordo com a orientação atual do tetraminó

        if (colisao.esquerda(posicao[0].linha, posicao[0].coluna) &&
                colisao.esquerda(posicao[2].linha, posicao[2].coluna)) {
            centroColuna = centroColuna - 1;
        }
        posicao = desenhaQuadrado(centroLinha, centroColuna, [div1, div2, div3, div4]);
        this.mostrar();
    };

    this.moverDireita = function () {
//        Verifica se o caminho esta livre para as peças da direita
//        de acordo com a orientação atual do tetraminó

        if (colisao.direita(posicao[1].linha, posicao[1].coluna) &&
                colisao.direita(posicao[3].linha, posicao[3].coluna)) {
            centroColuna = centroColuna + 1;

        }
        posicao = desenhaQuadrado(centroLinha, centroColuna, [div1, div2, div3, div4]);
        this.mostrar();
    };

    this.moverBaixo = function () {
//        Verifica se o caminho esta livre para as peças a baixo
//        de acordo com a orientação atual do tetraminó e retorna true se
//        houver movimento e false caso na haja possibilidade

        var moveu = false;
        if (colisao.baixo(posicao[1].linha, posicao[1].coluna) &&
                colisao.baixo(posicao[0].linha, posicao[0].coluna)) {

            centroLinha = centroLinha + 1;
            posicao = desenhaQuadrado(centroLinha, centroColuna, [div1, div2, div3, div4]);
            moveu = true;
        }
        this.mostrar();
        return moveu;
    };
//        Verifica se ha espaço suficiente para a peça rodar e redesenha a peça
//        na nova posição caso haja
    this.rodar = function () {

    };

    this.mostrar = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celulas = tabela.getElementsByTagName("td");
        for (i = 0; i < 4; i++) {
            var celula = (posicao[i].coluna + posicao[i].linha * 10);
            if (posicao[i].div.parentNode) {
                posicao[i].div.parentNode.removeChild(posicao[i].div);
            }
            if (celula >= 0) {
                celulas[celula].appendChild(posicao[i].div);
            }
        }

    };

    this.posiciona = function (_coluna, _linha) {
        centroColuna = _coluna;
        centroLinha = _linha;

    };
};