var Point  = Isomer.Point;
var Path   = Isomer.Path;
var Shape  = Isomer.Shape;
var Vector = Isomer.Vector;
var Color  = Isomer.Color;

var iso = new Isomer(document.getElementById("canvas"));

var red = new Color(255, 60, 50);
var blue = new Color(30, 30, 160);

// given originRoom,
var originRoom = Shape.Prism(new Point(0, 0, 0), 1, 1, 1);
iso.add(originRoom, blue);

// draw one north of originRoom
function drawNorth(iso, originRoom) {
    originRoom.
    iso.add(Shape.Prism(new Point(3, 3, 0), 1, 1, 1), blue);
    iso.add(
        new Path([
            Point(0.5,0.5,1.5),
            Point(2.5,2.5,1),
            Point(1.5,1.5,1)])
            ,
            red);
}