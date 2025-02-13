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
  image.src = "img/"; // map img
  

const x = 5;
const y = 6;

  const shadow = new image();
    shadow.onload = () =>{
          this.ctx.drawimage(
      shadow,
      0, // left cut
      0, // top cut,
      32, //width of cut
      32, //height of cut
      x * 16 - 8,
      y * 16 - 18,
      32,
      32,
    ) 
    }
shadow.src = ""; // shadow img
  
  
const hero = New Image();
  hero.onload = () =>{
    this.ctx.drawimage(
      hero,
      0, // left cut
      0, // top cut,
      32, //width of cut
      32, //height of cut
      x * 16 - 8,
      y * 16 - 18,
      32,
      32,
    )
  };
  }
  hero.src = "img/"; // main character img

  
 } 

}
