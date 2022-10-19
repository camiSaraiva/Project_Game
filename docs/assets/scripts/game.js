
class Game {
    constructor(ctx, width, height, player, player2) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.player2 = player2;
      this.intervalId = null;
      this.frames = 0;
      this.backgroundImage = new Image();
      this.obstacles = [];
      this.imgGameover = new Image();
      this.imgGameover.src = "/docs/assets/images/Player2_shantay.png";
      this.imgGameover2 = new Image();
      this.imgGameover2.src = "/docs/assets/images/Player1_shantay.png";


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
        this.player2.newPos();
        this.player2.draw();
        this.updateObstacles();
        this.healthBar();
        this.healthBar2();
        this.checkGameOver();
        
    }
    
    checkGameOver() {
      for(let i = 0; i< this.obstacles.length; i++){
        if(this.player.crashWith(this.obstacles[i])){
          this.obstacles.splice(i,1)
          this.player.score -= 10;
        } else if(this.player.score <= 0){
          this.ctx.drawImage(this.imgGameover, 0, 0,this.width,this.height);
          this.stop()
        } else if (this.player2.crashWith(this.obstacles[i])){
          this.obstacles.splice(i,1)
          this.player2.score -= 10;
        } else if (this.player2.score <= 0) {
          this.ctx.drawImage(this.imgGameover2, 0, 0,this.width,this.height);
          this.stop()
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
        
        
        if(this.frames % 60 === 0 && this.frames < 1000){
            let minHeight = 50;
            let maxHeight = 750;
    
            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    
        
            this.obstacles.push(new Obstacles(1400, height, 80, 80, this.ctx));
         } else if(this.frames % 40 === 0 && this.frames > 1000){
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

      healthBar2(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(20,60,this.player2.score,20)
      }
}
  
