let script1 = require("./script1")
module.exports = class script1 {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.multiply = 0;

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
    mull(n,n1) {
    

        var emptyCells = this.chooseCell(n1);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          

        if(this.multiply >= n && newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            
            this.what(this.id,newX,newY)
            matrix[newY][newX] = this.id;

            

            
        }
    }
    what(id,x,y){

        if(id==1){
            var newGrass = new Grass1 (x,y, this.id);
            grassArr.push(newGrass);
        }

        if(id==2){
            var newGrassEater = new GrassEater1(x, y, this.id)
            grassEaterArr.push(newGrassEater);
        }
        if(id==3){
            var newGrass = new Grass1 (newX,newY, this.id);
            grassArr.push(newGrass);
        }
        if(id==4){
            var newGrass = new Grass1 (newX,newY, this.id);
            grassArr.push(newGrass);
        }
        if(id==5){
            var newGrass = new Grass1 (newX,newY, this.id);
            grassArr.push(newGrass);
        }
    }
}


