class Player {
    constructor(x, y, w, h, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.img = new Image;
      this.ctx = ctx;
      this.gravity = 0.09;
      this.speedY = 0;
      this.score = 50;
      this.img.src = "/docs/assests/images/Rupaul_standing.png"
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 100, 200)
      }
    newPos(){
       this.speedY += this.gravity 
       this.y += this.speedY  
        if(this.y > 365){
            this.y = 365
        }else if(this.y < 0){
            this.y = 0
        }
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
    
    crashWith(obstacle) {
      return !(
          this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() ||
          this.right() < obstacle.left() ||
          this.left() > obstacle.right()
        );
      }

    }
    