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
    var idIntervalo;
    var temMovimento = true;
    iniciarJogo = function () {
        tetramino = (sorteio());
        proximo = (sorteio());
        idIntervalo = setInterval(interacao, 1000);
    };
    gameOver = function () {
        var clearIn = clearInterval(idIntervalo);
        console.log(clearIn);
    };

    sorteio = function () {
        var sorteado = Math.floor(Math.random() * 3);
        console.log(sorteado);
        var tetraminos = [new Quadrado(4, -1), new T(4, -1), new L(4, -1)];
        return tetraminos[sorteado];
    };

    this.preview = function (_tetramino) {
        proximo = _tetramino;
        proximo.posiciona(415, 80);
        proximo.mostrar();
    };

    proximaJogada = function () {
        tetramino = proximo;
        tetramino.posiciona(4, -1);
        tetramino.mostrar();
        proximo = (sorteio());

    };

    interacao = function () {

        if (tetramino) {
            if (!tetramino.moverBaixo()) {
                verificaParede();
                proximaJogada();

            } else {
                temMovimento = false;
            }
        }
    };

    verificaParede = function () {
        var tabela = document.getElementById("tabelaPrincipal");
        var celula = tabela.getElementsByTagName("td");
        var reposicionar = false;
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
                }
            }

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
        for (var i = 0; i < 15; i++) {
            var linha = document.createElement("tr");
            //linha.setAttribute("style", "border: 1px solid black;");
            for (var j = 0; j < 10; j++) {
                var coluna = document.createElement("td");
                coluna.setAttribute("style", "width: 31px;height: 31px;border: 1px solid black;");
                linha.appendChild(coluna);
            }
            tabelaPrincipal.appendChild(linha);

        }

        var tabelaPreview = document.createElement("tabela");
        tabelaPreview.setAttribute("id", "tabelaPreview");
        tabelaPreview.setAttribute("style", "border-collapse: collapse;border: 1px solid black;");
        for (var i = 0; i < 4; i++) {
            var linha = document.createElement("tr");
            for (var j = 0; j < 4; j++) {
                var coluna = document.createElement("td");
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

        iniciarJogo();
    };


};


