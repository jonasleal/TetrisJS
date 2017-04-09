/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Colisao = function () {
    this.esquerda = function (linha, coluna) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        if (coluna > 0 && linha < 15) {
            var posicao = coluna - 1 + (linha * 10);
            if (posicao >= 0) {
                var child = celula[posicao].childElementCount;
                if (child === 0) {
                    return true;
                }
            } else {
                return true;
            }

        }
        return false;
    };
    this.direita = function (linha, coluna) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celular = tabela.getElementsByTagName("td");
        if (coluna < 9 && linha < 15) {
            var posicao = coluna + 1 + (linha * 10);
            if (posicao >= 0) {
                var child = celular[posicao].childElementCount;
                if (child === 0) {
                    return true;
                }
            } else {

                return true;
            }
        }
        return false;
    };
    this.baixo = function (linha, coluna) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celulas = tabela.getElementsByTagName("td");
        var retorno = false;
        
        if (linha < -1) {
            retorno = true;
        }else if (linha < 14 && linha > -2) {
            var child = celulas[coluna + (linha * 10) + 10].childElementCount;
            if (child === 0) {
                retorno = true;
            }else if(linha === -1){
                fimDeJogo();
            }

        
        
        }

        return retorno;
    };

    this.proxima = function (atual, proxima) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celulas = tabela.getElementsByTagName("td");

        var iAtualP1 = atual[1].coluna + (atual[1].linha * 10);
        var iAtualP2 = atual[2].coluna + (atual[2].linha * 10);
        var iAtualP3 = atual[3].coluna + (atual[3].linha * 10);

        for (var i = 1; i < 4; i++) {
            var iProximo = (proxima[i].coluna + (proxima[i].linha * 10));
            var limiteLinha = proxima[0].linha - proxima[i].linha;
            var limiteColuna = proxima[0].coluna - proxima[i].coluna;

            if (proxima[i].coluna < -1 + limiteColuna ||
                    proxima[i].coluna > 10 + limiteColuna ||
                    proxima[i].linha > 15 + limiteLinha) {
                return false;
            }
            if (iProximo > 0 && iProximo < celulas.length) {
                if (iProximo !== iAtualP1 && iProximo !== iAtualP2 && iProximo !== iAtualP3) {
                    var child = celulas[iProximo].childElementCount;
                    if (child > 0) {
                        return false;
                    }
                }
            }
        }
        return proxima;
    };
};



