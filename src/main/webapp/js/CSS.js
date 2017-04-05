/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
CSS = function (_css){
    var css = _css;
   
    this.getTop = function (){
        var temp = removeEspaco();
        return temp.split("top:")[1].split("px")[0];
    };
    
    this.getLeft = function (){
        var temp = removeEspaco();
        return temp.split("left:")[1].split("px")[0];
    };
    
    
    this.getCss = function (){
        return css;
    };
    
    removeEspaco = function (){
        var temp = css;
        return temp.split(" ");
    };

};
