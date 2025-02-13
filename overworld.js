// 17:05 eps 2
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

// place some game objects
  const hero = new GameObject({
    x: 5,
    y: 6,
  })  
    const npc1 = new GameObject({
    x: 7,
    y: 9,
      src: "images/characters/people/npc1.png";
  })

  setTimeout(() => {
    hero.sprite.draw(this.ctx);
    npc1.sprite.draw(this.ctx);
  }, 200)

  
 } 

}
