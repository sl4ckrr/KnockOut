class Sprite {
  constructor(config) {

// set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    }
    
//shadow
    this.shadow = new image();
    this.useShadow = true; //cofig.useShadow || false
    if (this.Useshadow) {
    this.shadow.src = "images/characters/shadow.png";
    }
    this.shadow.onload = () => {
      this.isLoaded = true;
    }
    
//configure animation & innitial state
    this.animations = config.animations || {
      idleOwn: [
        [0,0]
      ]
    }
this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    //refrence the game object
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 18;

    this.is.shadowLoaded && ctx.drawImage(this.image, x, y)

    this.isLoaded && ctx.drawImage(this.image,
      0,0
      32,32
      x,y
      32,32
    )
  }
}
