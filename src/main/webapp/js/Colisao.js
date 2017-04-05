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
            child = celula[coluna - 1 + (linha * 10)].childElementCount;
            if (child === 0) {
                return true;
            }

        }
        return false;
    };
    this.direita = function (linha, coluna) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        if (coluna < 9 && linha < 14) {
            child = celula[coluna + 1 + (linha * 10)].childElementCount;
            if (child === 0) {
                return true;
            }
        }
        return false;
    };
    this.baixo = function (linha, coluna) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        if (coluna < 14) {
            child = celula[coluna + (linha * 10) + 10].childElementCount;
            if (child === 0) {
                return true;
            }
        }
        return false;
    };
};

