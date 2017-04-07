/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Colisao = function () {
    this.esquerda = function (linha, coluna) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        if (coluna > 0 && linha < 14) {
            posicao = coluna - 1 + (linha * 10);
            if (posicao >= 0) {
                child = celula[posicao].childElementCount;
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
        if (coluna < 9 && linha < 14) {
            posicao = coluna + 1 + (linha * 10);
            if (posicao >= 0) {
                child = celular[posicao].childElementCount;
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
        if (linha < 14) {
            child = celulas[coluna + (linha * 10) + 10].childElementCount;
            if (child === 0) {
                return true;
            }
        }
        return false;
    };

    this.proxima = function (posicao) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celulas = tabela.getElementsByTagName("td");

        for (i = 1; i < 4; i++) {
            indice = (posicao[i].coluna + (posicao[i].linha * 10));
            if (indice <= celulas.length) {
                child = celulas[indice].childElementCount;
                if (child > 0) {
                    return false;
                }
            }
        }
        return posicao;
    };
};


