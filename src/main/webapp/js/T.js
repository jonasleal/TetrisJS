/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


T = function (x, y) {
    var centroX = x;
    var centroY = y;
    var tamanho = 30;
    var cor = "purple";
    var orientacao = 4;
    var colisao = new Colisao();




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
            celula[centroX + (centroY - 1) * 10].appendChild(div2);
            celula[(centroX - 1) + centroY * 10].appendChild(div3);
            celula[(centroX + 1) + centroY * 10].appendChild(div4);
        } 
        
        if(orientacao === 2){
            celula[centroX + centroY * 10].appendChild(div1);
            celula[(centroX + 1) + centroY * 10].appendChild(div2);
            celula[centroX  + (centroY -1) * 10].appendChild(div3);
            celula[centroX  + (centroY +1) * 10].appendChild(div4);
        }
        
        if(orientacao === 3) {
            celula[centroX + centroY * 10].appendChild(div1);
            celula[centroX  + (centroY+1) * 10].appendChild(div2);
            celula[(centroX+1)  + centroY  * 10].appendChild(div3);
            celula[(centroX -1)  + centroY * 10].appendChild(div4);
        }
        
        if(orientacao === 4){
            celula[centroX + centroY * 10].appendChild(div1);
            celula[(centroX - 1) + centroY * 10].appendChild(div2);
            celula[centroX  + (centroY + 1)  * 10].appendChild(div3);
            celula[centroX  + (centroY - 1) * 10].appendChild(div4);
        }

    };

    this.moverEsquerda = function () {
        if(orientacao === 1){
            if(colisao.esquerda(centroY,(centroX-1)) && colisao.esquerda((centroY-1),centroX)){
                centroX = centroX - 1;
            }
            this.mostrar();
        }else if(orientacao === 2){
            if(colisao.esquerda((centroY - 1),centroX) && colisao.esquerda(centroY,centroX) && colisao.esquerda((centroY+1),centroX)){
                centroX = centroX -1;
            }
            this.mostrar();
            
        }else if(orientacao === 3){
            if(colisao.esquerda(centroY,(centroX - 1)) && colisao.esquerda((centroY+1),centroX)){
                centroX = centroX -1;
            }
            this.mostrar();
            
            
        }else if(orientacao === 4){
            if(colisao.esquerda(centroY,(centroX - 1)) && colisao.esquerda((centroY - 1),centroX) && colisao.esquerda( (centroY + 1),centroX)){
                centroX = centroX -1;
            }
            this.mostrar();
        }
    };


    this.moverDireita = function () {
        if(orientacao === 1){
            if(colisao.direita((centroY - 1),centroX) &&colisao.direita(centroY,(centroX + 1)) ){
                centroX = centroX +1;
            }
            this.mostrar();
            
        }else if(orientacao === 2){
            if(colisao.direita((centroY - 1),centroX) && colisao.direita(centroY,(centroX + 1)) &&colisao.direita((centroY + 1),centroX )){
                centroX = centroX +1;
            }
            this.mostrar();
            
        }else if( orientacao === 3){
            if(colisao.direita((centroY + 1),centroX) &&colisao.direita(centroY,(centroX + 1)) ){
                centroX = centroX +1;
            }
            this.mostrar();
            
        }else if(orientacao ===4){
            if(colisao.direita((centroY - 1),centroX) && colisao.direita(centroY,centroX) && colisao.direita((centroY + 1),centroX )){
                centroX = centroX +1;
            }
            this.mostrar();
        }
    };


    this.moverBaixo = function () {
        if(orientacao === 1){
            
            if(colisao.baixo(centroY,centroX) && colisao.baixo(centroY,centroX -1) && colisao.baixo(centroY,centroX +1)){
                centroY = centroY +1;
            }
            this.mostrar();
            
        }else if(orientacao === 2){
            
            if(colisao.baixo(centroY,centroX + 1) && colisao.baixo(centroY+1,centroX)){
                centroY = centroY+1;
            }
            this.mostrar();
            
        }else if(orientacao === 3){
            if(colisao.baixo(centroY + 1,centroX) && colisao.baixo(centroY,centroX -1) && colisao.baixo(centroY,centroX +1)){
                centroY = centroY +1;
            }
            this.mostrar();
            
        }else if(orientacao ===4){
            
            if(colisao.baixo(centroY,centroX - 1) && colisao.baixo(centroY + 1,centroX)){
                centroY = centroY+1;
            }
            this.mostrar();
            
        }
    };
    
    
    this.rodar = function (){
      //primeiro if verifica a orientacao, o segundo a posição das paredes pra poder rodar, e o 3 vai verificar pecas pra ver se ele pode rodar
      
      
        if(orientacao === 1 ){
            
            if(centroX >0 && centroX <9 && centroY <14 ){
                orientacao = orientacao +1;
            }
        }else if(orientacao === 2){
            
            if(centroX > 0 && centroX < 9 && centroY < 13 ){
                orientacao = orientacao +1;
            }
        }else if(orientacao === 3){
            
            if(centroX > 0 && centroX < 9 && centroY < 13){
                orientacao = orientacao +1;
            }
        }else if(orientacao === 4){
            if(centroX > 0 && centroX <9 && centroY <13){
                orientacao = orientacao +1;
            }
        }
        
        if(orientacao > 4){
            orientacao = 1;
        }
        this.mostrar();
    };

    this.verificaColisao = function(){
        
        
    };
    


};



