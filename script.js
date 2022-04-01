
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
    socket.emit("f1")
}
function f2() {
    socket.emit("f2")
}




