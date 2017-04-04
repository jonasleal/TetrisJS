/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Cenario = function () {
    var largura = 300;
    var altura = 500;
    var proximo;
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var divPrincipal = document.createElement("div");
    var divPreview = document.createElement("div");
    var divStatus = document.createElement("div");


    divPrincipal.setAttribute("id", "divPrincipal");
    divPrincipal.setAttribute("style", "background:gainsboro; width:" + largura + "px; height:" + altura + "px; border: solid brown 30px; float: left;");
    divPreview.setAttribute("id", "divPreview");
    divPreview.setAttribute("style", "background:gainsboro; margin-top : 30px; width:" + 150 + "px; height:" + 150 + "px; border: solid black 2px;");
    divStatus.setAttribute("id", "divStatus");
    divStatus.setAttribute("style", "background:gainsboro; width:" + 150 + "px; height:" + 350 + "px; top : 500px; left : 500px border: solid black 2px;");
    div2.setAttribute("style", "float: left");
    //  teste
    
    var tabela = document.createElement("table");
    tabela.setAttribute("id", "tabelaPrincipal");
    tabela.setAttribute("style", "border-collapse: collapse;border: -1px solid black;");
    for( i = 0; i < 15 ; i++){
         linha = document.createElement("tr");
         //linha.setAttribute("style", "border: 1px solid black;");
         for (j = 0 ; j < 10 ; j++){
             coluna = document.createElement("td");
             coluna.setAttribute("style","width: 30px;height: 30px;border: 1px solid black;");
             linha.appendChild(coluna);
         }
         tabela.appendChild(linha);
        
    }
    divPrincipal.appendChild(tabela);

    //  teste
    div1.appendChild(divPrincipal);
    div2.appendChild(divPreview);
    div2.appendChild(divStatus);
    div1.appendChild(div2);
    document.body.appendChild(div1);



    this.preview = function (_tetramino) {
        proximo = _tetramino;
        proximo.posiciona(415, 80);
        proximo.mostrar();
    };
    this.proximaJogada = function () {
        proximo.posiciona(160, -30);
        return proximo;
    };
};
