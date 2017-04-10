/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

S = function (_coluna, _linha){
    
    desenhaS = function(_linha, _coluna, _orientacao, _divs){
        var desenho = [];
        switch (_orientacao) {
            case 1:
                desenho[0] = new Posicao(_linha, _coluna, _divs[0]);
                desenho[1] = new Posicao(_linha, _coluna + 1, _divs[1]);
                desenho[2] = new Posicao(_linha - 1, _coluna, _divs[2]);
                desenho[3] = new Posicao(_linha + 1, _coluna + 1, _divs[3]);
                break;
            case 2:
                desenho[0] = new Posicao(_linha, _coluna, _divs[0]);
                desenho[1] = new Posicao(_linha + 1, _coluna, _divs[1]);
                desenho[2] = new Posicao(_linha, _coluna + 1, _divs[2]);
                desenho[3] = new Posicao(_linha + 1, _coluna - 1, _divs[3]);
                break;
        };
      return desenho;  
    };
    
    
    var tamanho = 30;
    var cor = "green";
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
    
    var pai = document.getElementById("tabelaPreview");
    var centroColuna = _coluna;
    var centroLinha = _linha;
    var orientacao = 1;
    var posicao = desenhaS(centroLinha, centroColuna, orientacao, [div1, div2, div3, div4]);
    var colisao = new Colisao();
    

    
    this.moverEsquerda = function () {
        
        if (orientacao === 1) {
            if (colisao.esquerda(posicao[0].linha, posicao[0].coluna) &&
                    colisao.esquerda(posicao[3].linha, posicao[3].coluna) &&
                    colisao.esquerda(posicao[2].linha, posicao[2].coluna)) {
                centroColuna = centroColuna - 1;
            }
        } else if (orientacao === 2) {
            if (colisao.esquerda(posicao[0].linha, posicao[0].coluna &&
                    colisao.esquerda(posicao[3].linha, posicao[3].coluna))) {
                centroColuna = centroColuna - 1;
            }
        }
        posicao = desenhaS(centroLinha, centroColuna, orientacao, [div1, div2, div3, div4]);
        this.mostrar();
    };

    this.moverDireita = function () {
        
        if (orientacao === 1) {
            if (colisao.direita(posicao[2].linha, posicao[2].coluna) &&
                    colisao.direita(posicao[1].linha, posicao[1].coluna) &&
                    colisao.direita(posicao[3].linha, posicao[3].coluna)) {
                centroColuna = centroColuna + 1;
            }
        } else if (orientacao === 2) {
            if (colisao.direita(posicao[1].linha, posicao[1].coluna) &&
                    colisao.direita(posicao[2].linha, posicao[2].coluna)) {
                centroColuna = centroColuna + 1;
            }
        } 
        posicao = desenhaS(centroLinha, centroColuna, orientacao, [div1, div2, div3, div4]);
        this.mostrar();
    };

    this.moverBaixo = function () {
        
        var moveu = false;
        if (orientacao === 1) {
            if (colisao.baixo(posicao[0].linha, posicao[0].coluna) &&
                    colisao.baixo(posicao[3].linha, posicao[3].coluna)) {

                centroLinha = centroLinha + 1;
                posicao = desenhaS(centroLinha, centroColuna, orientacao, [div1, div2, div3, div4]);
                moveu = true;
            }
        } else if (orientacao === 2) {
            if (colisao.baixo(posicao[1].linha, posicao[1].coluna) &&
                    colisao.baixo(posicao[2].linha, posicao[2].coluna) &&
                    colisao.baixo(posicao[3].linha, posicao[3].coluna)) {

                centroLinha = centroLinha + 1;
                posicao = desenhaS(centroLinha, centroColuna, orientacao, [div1, div2, div3, div4]);
                moveu = true;
            }
        } 
        this.mostrar();
        return moveu;
    };

    this.rodar = function () {
        if (orientacao === 1) {
            var proximaPosicao = desenhaS(centroLinha, centroColuna, orientacao + 1, [div1, div2, div3, div4]);
            if (colisao.proxima(posicao, proximaPosicao)) {
                orientacao++;
                posicao = proximaPosicao;
            }
        } else {
            var proximaPosicao = desenhaS(centroLinha, centroColuna, 1, [div1, div2, div3, div4]);
            if (colisao.proxima(posicao, proximaPosicao)) {
                orientacao = 1;
                posicao = proximaPosicao;
            }
        }
        this.mostrar();
    };
    
    this.mostrar = function () {
          var celulas = pai.getElementsByTagName("td");
        for (var i = 0; i < 4; i++) {
            var celula = (posicao[i].coluna + posicao[i].linha * 10);
            if (posicao[i].div.parentNode) {
                posicao[i].div.parentNode.removeChild(posicao[i].div);
            }
            if (celula >= 0) {
                celulas[celula].appendChild(posicao[i].div);
            }
        }    
    };
    this.posiciona = function () {
        centroColuna = 4;
        centroLinha = -2;
        posicao = desenhaS(centroLinha, centroColuna, orientacao, [div1, div2, div3, div4]);
        pai = document.getElementById("tabelaPrincipal");
    };
};



