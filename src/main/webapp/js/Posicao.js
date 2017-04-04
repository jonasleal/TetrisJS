/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Posicao = function (_css){
    var css = _css;
   
    this.getTop = function (){
        return css.split("width:")[1].split("px")[0];
    };
    
    this.getLeft = function (){
        return css.split("left:")[1].split("px")[0];
    };
    
    
    this.getCss = function (){
        return css;
    };

};
