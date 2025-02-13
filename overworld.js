class Overworld {
costructor(config) {
  this.element = connfig.element;
  this.canvas = this.element.querySelector(".game-canvas")
  this.ctx = this.canvas.getContext("2d");
}

init() {
const image = New image();
  image.onload = () =>{
    this.ctx.drawimage(image,0,0)
  };
  image.src = "img/";
}

  
}
