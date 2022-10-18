class Obstacles {
    constructor (x, y, w, h, color, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = new Image;
        this.ctx = ctx;
        this.obstacles = [];
        this.img.src = "/docs/assets/images/obstacles.png"
    }
   draw(){
    ctx.drawImage(this.img, this.x, this.y, 100, 60)
   }
   top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }

}