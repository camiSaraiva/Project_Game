const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let player 
let player2
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        player = new Player (200, 300, 100, 190, ctx, "docs/assets/images/Rupaul_standing_plr1.png");
        player2 = new Player (50, 300, 100, 190, ctx, "docs/assets/images/Rupaul_standing_plr2.png");
        let game = new Game(ctx, 1400, 860, player, player2);
        game.start()
    };
   
};

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowRight':
        player.x += 10;
        break;
        case 'ArrowLeft':
        player.x -= 10;
        break;
        case 'ArrowUp':
        player.img.src = "docs/assets/images/Rupaul_lying.png"
        //player = new Player(this.x,this.y, 50, 50, this.ctx, this.img)
        if (player.speedY < -5){
            player.speedY = player.speedY
        } else {
            player.speedY += -3;   
        }
        break;
    }
  });

  window.addEventListener('keyup', (e) => {
    player.img.src = "docs/assets/images/Rupaul_standing_plr1.png"
    player.speedY = 0;
  });

  window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyD':
        player2.x += 10;
        break;
        case 'KeyA':
        player2.x -= 10;
        break;
        case 'KeyW':
        player2.img.src = "docs/assets/images/Rupaul_lying_plr2.png"
        if (player2.speedY < -5){
            player2.speedY = player2.speedY
        } else {
            player2.speedY += -3;   
        }
        break;
    }
  });


  window.addEventListener('keyup', (e) => {
    player2.img.src = "docs/assets/images/Rupaul_standing_plr2.png"
    player2.speedY = 0;
  });