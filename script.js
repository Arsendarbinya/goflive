
var socket = io()
var side = 20;

function setup() {
    createCanvas(50 * side, 50 * side);
    background('#acacac');
}
function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("black");
            } else if (matrix[y][x] == 4) {
                fill("white")
            } else if (matrix[y][x] == 5) {
                fill("red")
            } else {
                fill("grey");
            }
            ellipse(x * side, y * side, side, side);
            //rect
        }

    }
}
socket.on("send matrix", nkarel)


function f0() {
    socket.emit("f0")
}
function f1() {

    var input = document.getElementById("1")
    var val = input.value
    var input1 = document.getElementById("11")
    var val1 = input1.value
    
    socket.emit("f1",val,val1)
}
function f2() {
    var input = document.getElementById("2")
    var val = input.value
    var input1 = document.getElementById("22")
    var val1 = input1.value
    
    socket.emit("f2",val,val1)
    
}

function f3() {
    var input = document.getElementById("3")
    var val = input.value
    var input1 = document.getElementById("33")
    var val1 = input1.value
    var input2 = document.getElementById("333")
    var val2 = input2.value
    var input3 = document.getElementById("333")
    var val3 = input3.value
    
    socket.emit("f3",val,val1,val2,val3)
}

function f4() {
    var input = document.getElementById("4")
    var val = input.value
    var input1 = document.getElementById("44")
    var val1 = input1.value
    
    socket.emit("f4",val,val1)
}

function f5() {
    var input = document.getElementById("5")
    var val = input.value
    var input1 = document.getElementById("55")
    var val1 = input1.value
    
    socket.emit("f5",val,val1)
}


