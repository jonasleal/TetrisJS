/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
L = function (x, y) {

    var centroX = x;
    var centroY = y;
    var tamanho = 30;
    var cor = "orange";
    var orientacao = 1;

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
            celula[centroX + centroY * 10].appendChild(div1);
            celula[centroX + 1 + centroY * 10].appendChild(div2);
            celula[centroX + (centroY - 1) * 10].appendChild(div3);
            celula[centroX + (centroY - 2) * 10].appendChild(div4);
        }
        if(orientacao === 2){
            celula[centroX + centroY * 10].appendChild(div1);
            celula[centroX + (centroY + 1)* 10].appendChild(div2);
            celula[centroX + 1 + centroY * 10].appendChild(div3);
            celula[centroX + 2 + centroY  * 10].appendChild(div4);
        }
        if(orientacao === 3){
            celula[centroX + centroY * 10].appendChild(div1);
            celula[centroX - 1 + centroY * 10].appendChild(div2);
            celula[centroX + (centroY + 1) * 10].appendChild(div3);
            celula[centroX + (centroY + 2) * 10].appendChild(div4);
        }
        if(orientacao === 4){
            celula[centroX + centroY * 10].appendChild(div1);
            celula[centroX + (centroY - 1)* 10].appendChild(div2);
            celula[centroX - 1 + centroY * 10].appendChild(div3);
            celula[centroX - 2 + centroY * 10].appendChild(div4);
             
        }
        
        
        
    };

    this.moverEsquerda = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        
        if(orientacao ===  1){
            if (centroX > 0 && centroY < 14) {

                centroX = centroX - 1;
                this.mostrar();
            }
        }
        if(orientacao === 2){
            if (centroX > 0 && centroY < 13) {

                centroX = centroX - 1;
                this.mostrar();
            }
        }
        if(orientacao === 3){
            if (centroX > 1 && centroY < 12) {

                centroX = centroX - 1;
                this.mostrar();
            }
        }
        if(orientacao === 4){
            if (centroX > 2 && centroY < 12) {

                centroX = centroX - 1;
                this.mostrar();
            }
        }
    };

    this.moverDireita = function () {
        if(orientacao === 1){
            if (centroX < 8 && centroY < 14) {
                centroX = centroX + 1;
                this.mostrar();
            }
        }
        if(orientacao === 2){
            if (centroX < 7 && centroY < 13) {
                centroX = centroX + 1;
                this.mostrar();
            }
        }
        if(orientacao === 3){
            if (centroX < 9 && centroY < 12) {
                centroX = centroX + 1;
                this.mostrar();
            }
        }
        if(orientacao === 4){
            if (centroX < 9 && centroY < 14) {
                centroX = centroX + 1;
                this.mostrar();
            }
        }
        
    };

    this.moverBaixo = function () {
        if(orientacao === 1 || orientacao === 4){
            if (centroY < 14) {
                centroY = centroY + 1;
                this.mostrar();
            }
        }
        if(orientacao === 2){
             if (centroY < 13) {
                centroY = centroY + 1;
                this.mostrar();
            }
        }
        if(orientacao === 3){
             if (centroY < 12) {
                centroY = centroY + 1;
                this.mostrar();
            }
        }
    };

    this.rodar = function () {

        orientacao = orientacao + 1;
        if(orientacao > 4){
            orientacao = 1;
        }
        this.mostrar();
        
    };
};




