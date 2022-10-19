const gameover1 = document.getElementById('gameover1');
const gameover2 = document.getElementById('gameover2');
const restartBtn = document.getElementById('restart');

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
          
          this.stop()
          gameover1.classList.remove('hidden');
          restartBtn.classList.remove('hidden');
          startBtn.classList.add('hidden')
        } else if (this.player2.crashWith(this.obstacles[i])){
          this.obstacles.splice(i,1)
          this.player2.score -= 10;
        } else if (this.player2.score <= 0) {
          
          this.stop()
          gameover2.classList.remove('hidden');
          restartBtn.classList.remove('hidden');
          startBtn.classList.add('hidden')
        }
      }
    }

    stop() {
      clearInterval(this.intervalId);
      
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
        const imgscr1 = new Image ();
        imgscr1.src = "/docs/assets/images/PLAYER 1_score.png";
        ctx.drawImage(imgscr1, 40, 15, 200, 120);
        this.ctx.fillStyle = "#88ff55";
        this.ctx.fillRect(80,75,this.player.score,20)
      }

      healthBar2(){
        const imgscr2 = new Image ();
        imgscr2.src = "/docs/assets/images/PLAYER 2_score.png";
        ctx.drawImage(imgscr2, 1200, 15, 200, 120);
        this.ctx.fillStyle = "#88ff55";
        this.ctx.fillRect(1245,75,this.player2.score,20)
      }
}
  
