/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Rotacao = function () {
    this.horaria = function (pivo, p1, p2, p3) {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        //t = [pivo, p1, p2, p3];
        t = [pivo, p1, p2, p3];

        for (i = 1; i < 4; i++) {
            col = t[i].linha - t[0].linha;
            lin = t[i].coluna - t[0].coluna;
            lin = lin + t[0].linha;
            col = col + t[0].coluna;
            t[i] = new Posicao(lin, col,t[i].div);
            posicao = t[i].coluna + t[i].linha * 10;
            if (posicao <= celula.length) {
                child = celula[posicao].childElementCount;
                if (child < 0) {
                    return false;
                }
            }
        }
        return t;
    };
};

