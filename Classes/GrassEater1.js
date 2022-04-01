let script1 = require("./script1")
module.exports =  class GrassEater1 extends script1{
    constructor(x, y, id) {
        super(x,y,id)
        this.energy = 2;
    
    
   
    }

    
 

    move() {
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          

        if (this.energy > 0 && newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.id;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            console.log(this.energy)
            this.energy--;
        }

            this.die();
        
    }
    eat() {
        var emptyCells = super.chooseCell(1);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        ;

        if (this.energy > 0 && newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.id;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1);
                    break
                }
            }
            this.energy++;
            if (this.energy >= 8){
                this.mull(5,0);
            }
        } else {
            this.move();
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;

            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1);
                }
            }
        }
    }
}