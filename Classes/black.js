let script1 = require("./script1")
module.exports = class black extends script1 {
    constructor(x, y, id,n,multiply) {
        super(x,y,id)
        this.multiply = multiply;
        this.namber = --n
        this.oneblack = true

        this.directions = [
            [this.x - this.namber, this.y],
            [this.x, this.y -this.namber],
            [this.x , this.y + this.namber],
            [this.x +this.namber, this.y]
           
        ];
        this.directions1 = [
            [this.x - 1, this.y],
            [this.x, this.y -1],
            [this.x , this.y + 1],
            [this.x +1, this.y]
           
        ];
    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x1 = this.directions[i][0];
            var y1 = this.directions[i][1];
            if (x1 >= 0 && x1 < matrix[0].length && y1 >= 0 && y1 < matrix.length) {
                if(matrix[y1][x1]!=3){
                    found.push(this.directions[i]); 
                }
            }
        }
        return found;
    }
    Cell(character) {
        var found = [];
        for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if(matrix[y][x] == character){
                    found.push(this.directions1[i]);
                }
                
            }
        }
        return found;
    }
    mull() {
        this.multiply--;
        if (this.multiply==10){
            this.white = true;       
        }else if(this.multiply> 0 && this.oneblack ){
            var emptyCells = this.chooseCell(0);
            if(emptyCells.length>0){
                for (var i = 0;i<emptyCells.length;i++){
                    matrix[emptyCells[i][1]][emptyCells[i][0]] = this.id;
                    var New= new black (emptyCells[i][0],emptyCells[i][1], this.id,this.namber,this.multiply-1);
                    blackArr.push(New);
                }
                this.oneblack =false; 
            }
        }else if(this.multiply ==0){
            if (this.white){    
                var l = this.Cell(3);
                var l1 = max1(0,l.length); 
                var New = new white(l[l1][0],l[l1][1] ,4,30);
                whiteArr.push(New);
            }
        }else if(this.multiply<-50){
             matrix[this.y][this.x] = 0;
             for (var i in blackArr) {
                if (blackArr[i].x == this.x && blackArr[i].y == this.y) {
                    blackArr.splice(i, 1);
                }
            }
            if(this.white){
                matrix[this.y][this.x]= 5;
                var New = new blackspawner(this.x, this.y, 5);
                spawnerArr.push(New);
            }
        }
    }
}