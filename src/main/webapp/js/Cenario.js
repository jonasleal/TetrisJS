/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Cenario = function () {
    var largura = 341;
    var altura = 510;
    var proximo;
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var divPrincipal = document.createElement("div");
    var divPreview = document.createElement("div");
    var divStatus = document.createElement("div");


    iniciarJogo = function () {
        proximo = (sorteio());
        setInterval(interacao, 1000);
    };

    sorteio = function () {
        sorteado  = Math.floor(Math.random() * 4);
        console.log(sorteado);
        var tetraminos = [new Quadrado(4, 0), new I(4, 0)];
        return tetraminos[0];
    };

    this.preview = function (_tetramino) {
        proximo = _tetramino;
        proximo.posiciona(415, 80);
        proximo.mostrar();
    };

    proximaJogada = function () {
        tetramino = proximo;
        tetramino.posiciona(4, 0);
        tetramino.mostrar();
        proximo = (sorteio());
        
    };

    interacao = function () {
        if (!tetramino.moverBaixo()) {
            proximaJogada();
        }
    };
    this.criaCentario = function () {
        divPrincipal.setAttribute("id", "divPrincipal");
        divPrincipal.setAttribute("style", "background:gainsboro; width:" + largura + "px; height:" + altura + "px; border: solid brown 30px; float: left;");
        divPreview.setAttribute("id", "divPreview");
        divPreview.setAttribute("style", "background:gainsboro; margin-top : 30px; width:" + 150 + "px; height:" + 125 + "px; border: solid black 2px;");
        divStatus.setAttribute("id", "divStatus");
        divStatus.setAttribute("style", "background:gainsboro; width:" + 150 + "px; height:" + 350 + "px; top : 500px; left : 500px border: solid black 2px;");
        div2.setAttribute("style", "float: left");

        var tabelaPrincipal = document.createElement("table");
        tabelaPrincipal.setAttribute("id", "tabelaPrincipal");
        tabelaPrincipal.setAttribute("style", "border-collapse: collapse;border: 1px solid black;");
        for (i = 0; i < 15; i++) {
            linha = document.createElement("tr");
            //linha.setAttribute("style", "border: 1px solid black;");
            for (j = 0; j < 10; j++) {
                coluna = document.createElement("td");
                coluna.setAttribute("style", "width: 31px;height: 31px;border: 1px solid black;");
                linha.appendChild(coluna);
            }
            tabelaPrincipal.appendChild(linha);

        }

        var tabelaPreview = document.createElement("tabela");
        tabelaPreview.setAttribute("id", "tabelaPreview");
        tabelaPreview.setAttribute("style", "border-collapse: collapse;border: 1px solid black;");
        for (i = 0; i < 4; i++) {
            linha = document.createElement("tr");
            for (j = 0; j < 4; j++) {
                coluna = document.createElement("td");
                coluna.setAttribute("style", "width: 31px;height: 31px;border: 1px solid black;");
                linha.appendChild(coluna);
            }
            tabelaPreview.appendChild(linha);

        }


        divPrincipal.appendChild(tabelaPrincipal);
        // divPreview.appendChild(tabelaPreview);
        //divPreview.appendChild(tabelaPreview);

        div1.appendChild(divPrincipal);
        div2.appendChild(divPreview);
        div2.appendChild(divStatus);
        div1.appendChild(div2);
        document.body.appendChild(div1);

      //iniciarJogo();
    };

};


