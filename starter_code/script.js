window.onload = function () {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  var img = new Image();
  img.src = 'images/car.png';
  var car = {
    x: 250,
    moveLeft: function () { 
      if(this.x>0){
      this.x -= 10} 
    },
    moveRight: function () { 
      if(this.x<520)
      {this.x += 10 }
  }
}
// var obstacles[];
class Obstacle{
  constructor(x, y, height, width){
    this.x = x;
    this.y = y;
    this.height = heigth;
    this.width = width;
    // this.color = color; 
  }
}
var obstacles = new Obstacle (100,100,50,100);

  document.getElementById("start-button").onclick = function () {
    startGame();
    ctx.drawImage(img, car.x, 450, 80, 160);

  }

  function startGame() {
    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37: car.moveLeft(); console.log('left', car); break;
        case 39: car.moveRight(); console.log('right', car); break;
      }
      updateCanvas()
    }
    function updateCanvas() {
      ctx.clearRect(0,0,600,600);
      
      ctx.drawImage(img, car.x, 450, 80, 160);
    }
  }
};
