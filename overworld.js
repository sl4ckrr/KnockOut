class Overworld {
costructor(config) {
  this.element = connfig.element;
  this.canvas = this.element.querySelector(".game-canvas")
  this.ctx = this.canvas.getContext("2d");
  this.map = null;
}

startGameLoop() {
  const step = () =>

    //draw lower layer
this.map.drawLowerImage(this.ctx);

  //Draw game objects
  Object.values(this.map.gameObjects).forEach(object => {
  object.sprite.draw(this.ctx);
  })

  
  //draw upper layer
this.map.drawUpperImage(this.ctx);
    
    requestAnimationFrame(() => {
    step();  
    })
}
  step();  
  }
  
init() {
 this.map = new OverworldMap(window.OverworldMaps.LivingRoom);
this.startGameLoop();


  
 } 

}
