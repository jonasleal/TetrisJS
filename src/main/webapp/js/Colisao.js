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
        var celula = tabela.getElementsByTagName("td");
        if (coluna < 9 && linha < 14) {
            posicao = coluna + 1 + (linha * 10);
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
    this.baixo = function (linha, coluna) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        if (linha < 14) {
            child = celula[coluna + (linha * 10) + 10].childElementCount;
            if (child === 0) {
                return true;
            }
        }
        return false;
    };
    this.rodar = function (pivor, p1, p2, p3){
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        
        if(pivor.y < 14 && pivor.x < 9 && pivor.x > 0){
            x1 = p1.y - pivor.y;
            y1 = p1.x - pivor.x;
            
            child = celula[x1 + y1 * 10].childElementCount;
            
            if(child !== 0 ){
                return false;
            }
            x2 = p2.y - pivor.y;
            y2 = p2.x - pivor.x;
            
            child1 = celula[x2 + y2 * 10].childElementCount;
            
            if(child1 !== 0){
                return false;
            }
            x3 = p3.y - pivor.y;
            y3 = p3.x - pivor.x;
            
            child2 = celula[x3 + y3 * 10].childElementCount;
            if(child2 !== 0){
                
                return false;
            }
            return true;
        }
    };
};

