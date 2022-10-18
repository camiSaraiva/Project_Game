
class Game {
    constructor(ctx, width, height, player) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null;
      this.frames = 0;
      this.backgroundImage = new Image();
      this.obstacles = [];

    }

    drawBackground() {
        this.backgroundImage.src = "/docs/assests/images/background_img-2.jpg";
        ctx.drawImage(this.backgroundImage, 0, 0, 1200, 580);
    }

    start() {
        this.intervalId = setInterval(this.update, 1000 / 60)
    }

    

    update = () => {
        this.frames++
        this.drawBackground();
        this.player.newPos();
        this.player.draw();
        this.updateObstacles();
        this.checkGameOver();
    }
    
    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
          return this.player.crashWith(obstacle);
        });
        if (crashed) {
          this.stop();
          /* this.score -= 5; */
        }
    }

    stop() {
      clearInterval(this.intervalId);
      /* if(this.score <= 0){
        return 'Sashay Away!'
      } */
      
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].x -= 5;
            this.obstacles[i].draw();
        }
        
        
        if(this.frames % 60 === 0){
            let minHeight = 50;
            let maxHeight = 500;
    
            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    
        
            this.obstacles.push(new Obstacles(1200, height, 50, 50, 'yellow', this.ctx));
         }
        };
}
  
