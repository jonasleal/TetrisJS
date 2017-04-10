/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.addEventListener("keydown", function (e) {
    //Esquerda
    if (e.keyCode === 37) {
        tetramino.moverEsquerda();
    } else
    //Direita
    if (e.keyCode === 39) {
        tetramino.moverDireita();
    } else
    if (e.keyCode === 38) {
        tetramino.moverCima();
    } else
    //Baixo
    if (e.keyCode === 40) {
        tetramino.moverBaixo();
    }else
    //Rodar
     if(e.keyCode === 17){
        tetramino.mudarCor();
    }
    //Rodar
     if(e.keyCode === 32){
        tetramino.pintar();
    }
    
    
    
});

