class OverworldMap{
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc; 

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }
  
  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0)
  }
  
  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0)
  }
}

window.OverworldMaps(ctx) = {
  DemoRoom: {
    lowerSrc:"images/maps/demoLower.png",
    upperSrc:"images/maps/demoUpper.png",
      gameObjects: {
      hero:new gameObject({
        x: 5,
        y: 6,
      }),
  npc1:new gameObject({
        x: 7,
        y: 9,
        src:"images/characters/people/npc1.png";
      })
    }
  },
    LivingRoom: {
    lowerSrc:"images/maps/livingRoomLower.png",
    upperSrc:"images/maps/livingRoomUpper.png",
      gameObjects: {
      hero:new gameObject({
        x: 3,
        y: 1,
      }),
  npcA:new gameObject({
        x: 9,
        y: 2,
        src:"images/characters/people/npc2.png";
      })
  npcB:new gameObject({
        x: 10,
        y: 4,
        src:"images/characters/people/npc3.png";
      })
    }
  },
}
