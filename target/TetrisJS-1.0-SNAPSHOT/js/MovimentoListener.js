/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.addEventListener("keydown", function (e) {
    //Esquerda
    if (e.keyCode === 37) {
        tetraminos.moverEsquerda();
    } else
    //Direita
    if (e.keyCode === 39) {
        tetraminos.moverDireita();
    } else
    //Baixo
    if (e.keyCode === 40) {
        tetraminos.moverBaixo();
    }
});

