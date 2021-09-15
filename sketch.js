var startTile;
var tile2;
var tile3;
var tile4;
var tile5;
var tile6;
var tile7;
var tile8;
var tile9;
var tile10;
var tile11;
var tile12;
var endTile;

function preload(){
  
}

function setup() {
  createCanvas(800,400);
    startTile = new Tile();
    tile2 = new Tile();
    tile3 = new Tile();
    tile4 = new Tile();
    tile5 = new Tile();
    tile6 = new Tile();
    tile7 = new Tile();
    tile8 = new Tile();
    tile9 = new Tile();
    tile10 = new Tile();
    tile11 = new Tile();
    tile12 = new Tile();
    endTile = new Tile();
}

function draw() { 
  background(0);
    startTile.x = 20;
    startTile.y = 310;
    tile2.x = 111;
    tile2.y = 310;
    tile3.x = 202;
   tile3.y = 310;
   tile4.x = 293;
   tile4.y = 310;
   tile5.x = 384;
    tile5.y = 310;
    tile6.x = 475;
    tile6.y = 310;
    tile7.x = 566;
    tile7.y = 310;
    tile8.x = 657;
    tile8.y = 310;
    tile9.x = 657;
    tile9.y = 219;
    tile10.x = 657;
    tile10.y = 128;
    tile11.x = 657;
    tile11.y = 37;
    tile12.x = 565;
    tile12.y = 37;
    endTile.x = 475;
    endTile.y = 37;
    //noFill();
    fill("green");
    startTile.display();
    tile2.display();
    tile3.display();
    tile4.display();
    tile5.display();
    tile6.display();
    tile7.display();
    tile8.display();
    tile9.display();
    tile10.display();
    tile11.display();
    tile12.display();
    endTile.display();
  //drawSprites();
}

