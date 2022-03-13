class Grass1 extends script1 {
    constructor(x, y, id) {
        super(x, y, id)
    }

    mull(n) {
        if(this.multiply <= n){
            this.multiply++;
            super.mull(n)
        }else{
            this.multiply = 0;
            
        }  
    
    }
}


