/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Cenario = function () {
    var largura = 330;
    var altura = 495;
    var proximo;
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var divPrincipal = document.createElement("div");
    var divPreview = document.createElement("div");
    var divStatus = document.createElement("div");
    var idIntervalo;
    var idTempo;
    var pontuacao = 0;
    var nodePontuacao;
    var nodeTempo;
    var s = 0;
    var m = 0;
    var h = 0;

    iniciarJogo = function () {
        proximo = (sorteio());
        proximaJogada();
        idIntervalo = setInterval(interacao, 800);
        idTempo = setInterval(contarTempo, 1000);
    };

    contarTempo = function () {
        s++;
        if(s === 60){
            m++;
            s=0;
        };
        if(m === 60){
            h++;
            m=0;
        }
        nodeTempo.data = h + ":" + m + ":" + s;
    };

    gameOver = function () {
        var clearIn = clearInterval(idIntervalo);
        clearInterval(idTempo);
        console.log(clearIn);
    };

    sorteio = function () {
        var sorteado = Math.floor(Math.random() * 3);
        console.log(sorteado);
        var tetraminos = [new Quadrado(4, 4), new T(4, 4), new L(4, 4)];
        return tetraminos[sorteado];
    };

    this.preview = function (_tetramino) {
        proximo = _tetramino;
        proximo.posiciona(415, 80);
        proximo.mostrar();
    };

    proximaJogada = function () {
        tetramino = proximo;
        tetramino.posiciona();
        tetramino.mostrar();
        proximo = (sorteio());
        proximo.mostrar();

    };

    fimDeJogo = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");

        clearInterval(idIntervalo);
        clearInterval(idTempo);
        console.log("Fim de jogo");

    };

    interacao = function () {
        if (tetramino) {
            switch (tetramino.moverBaixo()) {
                case 0:
                    fimDeJogo();
                    break;
                case false:
                    pontuacao = pontuacao + verificaParede();
                    nodePontuacao.data = pontuacao;
                    proximaJogada();
                    break;
            }
        }
    };

    verificaParede = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        var hit = 0;
        for (var i = 14; i >= 0; i--) {
            var blocos = 0;
            var posicao = 0;
            for (var j = 9; j >= 0; j--) {
                posicao = i * 10 + j;

                if (celula[posicao].childElementCount > 0) {
                    blocos++;
                }
                if (blocos === 10) {
                    for (var l = 0; l < 10; l++) {
                        posicao = i * 10 + l;
                        if (celula[posicao - 10].childElementCount > 0) {
                            celula[posicao].replaceChild(celula[posicao - 10].firstChild, celula[posicao].firstChild);
                        } else {
                            celula[posicao].removeChild(celula[posicao].firstChild);
                        }

                    }
                    for (var m = i; m > 0; m--) {
                        for (var n = 0; n < 10; n++) {
                            posicao = m * 10 + n;
                            if (celula[posicao - 10].childElementCount > 0) {
                                var temp = celula[posicao - 10].removeChild(celula[posicao - 10].firstChild);
                                celula[posicao].appendChild(temp);
                            }
                        }
                    }
                    i++;
                    hit++;
                }
            }

        }
        return 100 * hit;

    };
    this.construir = function () {
        div2.setAttribute("style", "float: left");

        criaCenario();
        criaPreview();
        criaStatus();

        div1.appendChild(divPrincipal);
        div2.appendChild(divPreview);
        div2.appendChild(divStatus);
        div1.appendChild(div2);
        document.body.appendChild(div1);

        iniciarJogo();
    };

    criaStatus = function () {
        divStatus.setAttribute("id", "divStatus");
        divStatus.setAttribute("style", "background:gainsboro; width:" + 150 +
                "px; height:" + 350 + "px; top : 500px; left : 500px; border: solid black 2px;");

        var tabelaStatus = document.createElement("table");
        tabelaStatus.setAttribute("style", "border-collapse: collapse;border: 1px solid black;" +
                "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);");


        var tr = document.createElement("tr");
        var td = document.createElement("td");
        tr.appendChild(td);
        var b = document.createElement("b");
        td.appendChild(b);
        var texto = document.createTextNode("SCORE");
        b.appendChild(texto);
        tabelaStatus.appendChild(tr);

        var tr = document.createElement("tr");
        var td = document.createElement("td");
        tr.appendChild(td);
        var b = document.createElement("b");
        td.appendChild(b);
        nodePontuacao = document.createTextNode(pontuacao);
        b.appendChild(nodePontuacao);
        tabelaStatus.appendChild(tr);

        var tr = document.createElement("tr");
        var td = document.createElement("td");
        tr.appendChild(td);
        var b = document.createElement("b");
        td.appendChild(b);
        var texto = document.createTextNode("TIME");
        b.appendChild(texto);
        tabelaStatus.appendChild(tr);

        var tr = document.createElement("tr");
        var td = document.createElement("td");
        tr.appendChild(td);
        var b = document.createElement("b");
        td.appendChild(b);
        nodeTempo = document.createTextNode("00:00:00");
        b.appendChild(nodeTempo);
        tabelaStatus.appendChild(tr);

        divStatus.appendChild(tabelaStatus);
    };

    criaPreview = function () {
        divPreview.setAttribute("id", "divPreview");
        divPreview.setAttribute("style", "background:gainsboro; margin-top : 30px; width:" + 150 + "px; height:" + 140 + "px; border: solid black 2px;");

        var tabelaPreview = document.createElement("table");
        tabelaPreview.setAttribute("id", "tabelaPreview");
        tabelaPreview.setAttribute("style", "border-collapse: collapse; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);");
        for (var i = 0; i < 10; i++) {
            var linha = document.createElement("tr");
            for (var j = 0; j < 10; j++) {
                var coluna = document.createElement("td");
//                coluna.setAttribute("style", "border: 1px solid black;");
                linha.appendChild(coluna);
            }
            tabelaPreview.appendChild(linha);

        }
        divPreview.appendChild(tabelaPreview);


    };

    criaCenario = function () {
        divPrincipal.setAttribute("id", "divPrincipal");
        divPrincipal.setAttribute("style", "background:gainsboro; width:" + largura + "px; height:" + altura + "px; border: solid brown 30px; float: left;");

        var tabelaPrincipal = document.createElement("table");
        tabelaPrincipal.setAttribute("id", "tabelaPrincipal");
        tabelaPrincipal.setAttribute("style", "border-collapse: collapse;");
        for (var i = 0; i < 15; i++) {
            var linha = document.createElement("tr");
            //linha.setAttribute("style", "border: 1px solid black;");
            for (var j = 0; j < 10; j++) {
                var coluna = document.createElement("td");
                coluna.setAttribute("style", "width: 31px;height: 31px;");
                linha.appendChild(coluna);
            }
            tabelaPrincipal.appendChild(linha);

        }

        divPrincipal.appendChild(tabelaPrincipal);

    };
};


