let script1 = require("./script1")
module.exports = class Grass1 extends script1 {
   

    mull(n,n1) {
        if(this.multiply <= n){
            this.multiply++;
            super.mull(n,n1)
        }else{
            this.multiply = 0;
            
        }  
    
    }
}


