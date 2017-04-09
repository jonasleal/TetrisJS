/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Cenario = function () {
    var largura = 1191;
    var altura = 613;
    
    var divPrincipal = document.createElement("div");


    this.construir = function () {
        

        criaCenario();
        document.body.appendChild(divPrincipal);

    };

    criaCenario = function () {
        divPrincipal.setAttribute("id", "divPrincipal");
        divPrincipal.setAttribute("style", "background:gainsboro; width:" + largura + "px; height:" + altura + "px; border: solid red 1px; float: left;");

        var tabelaPrincipal = document.createElement("table");
        tabelaPrincipal.setAttribute("id", "tabelaPrincipal");
        tabelaPrincipal.setAttribute("style", "border-collapse: collapse; border: 1px solid black;");
        for (var i = 0; i < 18; i++) {
            var linha = document.createElement("tr");
//            linha.setAttribute("style", "border: 1px solid black;");
            for (var j = 0; j < 35; j++) {
                var coluna = document.createElement("td");
                coluna.setAttribute("style", "width: 31px;height: 31px;border: 1px solid black;");
                linha.appendChild(coluna);
            }
            tabelaPrincipal.appendChild(linha);

        }

        divPrincipal.appendChild(tabelaPrincipal);

    };
};


