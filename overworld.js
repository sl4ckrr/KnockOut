class Overworld {
costructor(config) {
  this.element = connfig.element;
  this.canvas = this.element.querySelector(".game-canvas")
  this.ctx = this.canvas.getContext("2d");
  this.map = null;
}

startGameLoop() {
  const step = () =>
    requestAnimationFrame(() => {
    step();  
    })
}
  step();  
  }
  
init() {
 this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
this.startGameLoop();


  
 } 

}
