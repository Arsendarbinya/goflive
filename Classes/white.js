let script1 = require("./script1")
module.exports =  class white extends script1{
    constructor(x, y, id,energy) {
        super(x,y,id)
        this.multyply= 0
        this.energy = energy;
        this.timer=0
        this.end = 7;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    

    chooseCell(character) {
        this.directions
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    

    move() {
        
        
        this.multyply++
        if(this.multyply==2){
            this.multyply=0
            var emptyCells = this.chooseCell(3);
            var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          

            if (this.energy > 0 && newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = this.id;
                if(emptyCells.length>1){
                    matrix[this.y][this.x] = 3;
                }else{
                    matrix[this.y][this.x] = 0;
                    

                }

                this.x = newX;
                this.y = newY;
                this.energy--
                
            }else if(emptyCells.length<0){
                if(this.end>0){
                    this.end = this.end-1;
                }else{
                    this.die(0)
                }
                
            }
            else{
                this.die(3)
            }
        }
        
        
    }
     mull() {
        this.timer++
        if(this.timer<40){
    	
            
       			
            
        var emptyCells = this.chooseCell(3);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          

        if (this.energy > 29 && newCell&&whiteArr.length<20) {
            var newX = newCell[0];
            var newY = newCell[1];

            var New = new white(newX, newY, this.id,this.energy-4)
            whiteArr.push(New);

            matrix[newY][newX] = this.id;
        }
    }else{
        this.die(0)
        this.timer=0
        	

    }
}

    die(n) {
       
        if (this.energy <= 0) {
            matrix[this.y][this.x] = n;

            for (var i in whiteArr) {
                if (whiteArr[i].x == this.x && whiteArr[i].y == this.y) {
                    whiteArr.splice(i, 1);
                }
            }
        }
    }
}