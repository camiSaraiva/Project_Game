
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
        this.backgroundImage.src = "docs/assets/images/werk_room_clean.png";
        ctx.drawImage(this.backgroundImage, 0, 0, 1400, 860);
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
        this.healthBar();
        this.checkGameOver();
        
    }
    
    checkGameOver() {
      for(let i = 0; i< this.obstacles.length; i++){
        if(this.player.crashWith(this.obstacles[i])){
          this.obstacles.splice(i,1)
          this.player.score -= 10;
        } else if(this.player.score <= 0){
          this.stop();
        }
      }
    }

    stop() {
      clearInterval(this.intervalId);
      /* if(this.score <= 0){
        
      } */
      
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].x -= 5;
            this.obstacles[i].draw();
        }
        
        
        if(this.frames % 60 === 0){
            let minHeight = 50;
            let maxHeight = 750;
    
            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    
        
            this.obstacles.push(new Obstacles(1400, height, 80, 80, this.ctx));
         }
        };

      healthBar(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(20,20,this.player.score,20)
      }
}
  
