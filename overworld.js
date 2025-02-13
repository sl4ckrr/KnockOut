class Overworld {
costructor(config) {
  this.element = connfig.element;
  this.canvas = this.element.querySelector(".game-canvas")
  this.ctx = this.canvas.getContext("2d");
}

init() {
const image = New Image();
  image.onload = () =>{
    this.ctx.drawimage(image,0,0)
  };
  image.src = "img/";
  

const x = 0;
const y = 0;

  
const hero = New Image();
  hero.onload = () =>{
    this.ctx.drawimage(
      hero,
      0, // left cut
      0, // top cut,
      32, //width of cut
      32, //height of cut
      x,
      y,
      32,
      32,
    )
  };
  }
  hero.src = "img/";

  
 } 

}
